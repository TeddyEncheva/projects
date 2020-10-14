import {taskEdit_Submit} from '../../../controllers/taskController';

export default function taskEditPage() {
    
    return {template: `
        <input type="hidden" id="id" name="id" />
        <input type="hidden" id="projectId" name="projectId" />
        <div class="above-table">
        <h3>Create/Edit Task</h3>
        </div>
            <form class="form">            
                <div>
                    <label for="title"></label>
                    <input type="text" id="title" class="input" name="title" placeholder='Title' required/>
                </div>
                <div>
                    <label for="description"></label>
                    <textarea type="input" id="description" class="textarea input" name="description" placeholder='Description' required/></textarea>
                </div>
                <div>
                    <label for="status"></label>
                    <select type="input" id="status" name="status" class="select" placeholder='Status'/>
                        <option value="Pending">Pending</option>
                        <option value="In progress">In progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                    <label for="assignee"></label>
                    <input type="text" id="assignee" class="input" name="description" placeholder='Assignee'/></input>
                <div>
                   <button type="submit" id="editTaskBtn" class= 'button border-rounding close' value="Create/Edit Task">Create/Edit TASK</button>
                </div>
            </form>`,
        listeners: [
            {
                targetId: 'editTaskBtn',
                eventType: 'click',
                callback: taskEdit_Submit
            }
        ]
    };
}