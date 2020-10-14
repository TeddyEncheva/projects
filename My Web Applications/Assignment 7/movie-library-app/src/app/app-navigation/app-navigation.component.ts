import { Component }  from '@angular/core'

@Component({
    selector: 'app-navigation',
    templateUrl: './app-navigation.component.html',
    styleUrls: ['./app-navigation.component.css'],

})


export class NavigationComponent{
    
    loggedIn(value:boolean): string{
        if(value===false){
            return "Sign In"
        } else{
            return "Sign Out"
        }
    }
}