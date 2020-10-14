import { listsNewForm_Submit } from '../../../controllers/toDoController';

export default function toDoListNewPage() {
    
    return { template:`<div class="edit-form-container">
    <input type="hidden" id="id" name="id" />
        <input type="hidden" id="userId" name="userId" />
        <div class="above-table">
        <h3>Create/Edit TODO List</h3>
        </div>
            <form class="shadow">            
                <div class="form-field">
                    <label>Title</label>
                    <input type="text" id="title" name="title" placeholder='Write a Title'/>
                </div>
                <div class="form-field">
                   <button type="submit" id="listSaveBtn" class= 'save-button blue-button' value="Create TODO List">Create/Edit TODO List</button>
                </div>
            </form>
    </div>`,
        listeners:[
            {
                targetId: 'listSaveBtn',
                eventType: 'click',
                callback: listsNewForm_Submit
            }
        ]
    };
}