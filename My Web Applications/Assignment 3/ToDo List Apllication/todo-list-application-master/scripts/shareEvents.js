async function checkIfShared(currentItem){
    const currentlyLogged = await AuthenticationService.getLoggedUser();
    const shareList = currentItem._shareWith;
  
    if(shareList != null){
        for (let i = 0; i < shareList.length; i++) {
            const shareWithId = shareList[i];
           
            if(shareWithId==currentlyLogged._id){
                return true;
            }   
        }
    }
    return false;
}

async function  buildOptionList(){
    const users = await UsersRepository.getAll();
    const shareWithOptions = document.getElementById('shareWith');
    const currentUser = await AuthenticationService.getLoggedUser();
   
    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if(user._id != currentUser._id){
            const userIdOpt = document.createElement('option');

            userIdOpt.setAttribute('id', user._id);
            userIdOpt.innerHTML = user._id;
            shareWithOptions.appendChild(userIdOpt);
        }
    }
}

//checks if it should render the multiple select element or not
async function handleSharing(userId){
    const currentUser = await AuthenticationService.getLoggedUser();
    const lists = await ToDoRepository.getAll();
    
    for (let i = 0; i < lists.length; i++) {
        const list = lists[i];

        if(list._userId == userId){
            if (currentUser._id == list._userId || currentUser._isAdmin == true) {
                document.getElementById('shareWith').style.display = '';
            } else{
                document.getElementById('shareWith').style.display = 'none';
            }
        }
    }
    return;
}

async function getSelectedOption(){
    const opts = [];
    let optionList = document.getElementById('shareWith').childNodes; 
    for (let i=0; i<optionList.length; i++) {
        opt = optionList[i];

        if ( opt.selected && opt.value != 0 ) {
            opts.push(opt.value);
        }
    }
    return opts;
}

async function showSelected(shareWith, userId){
    const allElements = document.getElementById('shareWith').childNodes; 
    let selectedOnes = -1;

    for (let j = 0; j <allElements.length; j++){
        const element = allElements[j];
        let optionId = element.value ;

           if(shareWith.includes(optionId)){
               let index = optionId;

               if(optionId!=userId){

                   if(optionId>userId){
                       index-=1;
                   }

                    selectedOnes = document.getElementById('shareWith')[index].selected = true;
               }
           }
       }
       return selectedOnes;
   }

async function removeFromShared(currentItem){
    const currentlyLogged = await AuthenticationService.getLoggedUser();
    let removedId = [];

        for (let i = 0; i < currentItem._shareWith.length; i++) {
            const sharedId = currentItem._shareWith[i];
        
            if(sharedId != currentlyLogged._id){
            removedId.push(sharedId);
            }
        } 
        const item = new ToDoList(currentItem._userId, currentItem._title, removedId);
        await ToDoRepository.editList(currentItem._id, item); 
}