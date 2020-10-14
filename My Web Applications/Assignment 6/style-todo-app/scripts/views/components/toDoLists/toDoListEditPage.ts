import { listsEditForm_Submit } from '../../../controllers/toDoController';

export default function toDoListEditPage() {
    
    return {template: `
    <div class="edit-form-container">
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
                <div>
                <div id="shareOption" class="form-field">
                    <label>Share With:</label>
                        <div>
                            <input type="text" id='sharedWith' name='shareWith' placeholder='Write an ID' />
                        </div>
                </div>
                </div>
                <div class="form-field">
                   <button type="submit" id="listSaveBtn" class= 'save-button blue-button' value="Edit TODO List">Create/Edit TODO List</button>
                </div>
            </form>
    </div>`,
        listeners: [
            {
                targetId: 'listSaveBtn',
                eventType: 'click',
                callback: listsEditForm_Submit
            }
        ]
    };
}