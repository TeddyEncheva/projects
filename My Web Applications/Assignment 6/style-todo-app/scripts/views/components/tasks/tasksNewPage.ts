import {tasksNewForm_Submit} from '../../../controllers/taskController';

export default function tasksNewPage() {
    return {template: `
    <div class="above-table">
    <h3>Add/Edit Task</h3>
    </div>
    <div class="edit-box  shadow">
        <input type="hidden" id="id" name="id" />
        <input type="hidden" id="listId" name="listId" />
            <form>
                <div>
                <div  class="form-field">
                    <label>Title</label>
                    <input type="text" id="task" name="task" placeholder='Write a Task' />
                </div>

                <div  class="form-field">
                    <label for="details">Description</label>
                   <textarea wrap="hard" class="description-input" type="text"  id="details" name="details" placeholder='Write a Short Description'> </textarea>
                </div>
                
                <div class="form-checkbox" "form-field">
                    <label  class="checkbox-label">
                        <input type="checkbox" id="isCompleted" name="isCompleted" />
                        <span class="checkbox-copy"></span>
                    </label>
                    <label class="checkbox-completed-label" for="isCompleted">Completed</label>
                </div>
                
                </div>
                <div  class="form-field">
                   <button type="submit" id="newTaskBtn" class="save-button blue-button" value="Save" >Create/Edit Task</button>
                </div>
            </form>
        </div>`,
    listeners: [
        {
            targetId: 'newTaskBtn',
            eventType: 'click',
            callback: tasksNewForm_Submit
        }
    ]
    };
}