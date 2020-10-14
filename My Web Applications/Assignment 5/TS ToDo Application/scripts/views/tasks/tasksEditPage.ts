import {tasksEditForm_Submit} from "../../taskEvenets";

export default function tasksEditPage() {
    return {
    template: `<input type="hidden" id="id" name="id" />
    <input type="hidden" id="listId" name="listId" />
    <fieldset>
    <div class="sign">
    <h2>ToDo List</h2>
    </div>
        <table>
            <tr>
                <td class="table-field">Task:</td>
                <td class="table-field"><input type="text" id="task" name="task" placeholder='Write a Task' /></td>
            </tr>
            <tr>
            <tr>
            <tr>
                <td class="table-field">Description:</td>
                <td class="table-field"><input type="text" id="details" name="details" placeholder='Write a Short Description' /></td>
             <tr>
                <td  class = "table-field"><label for='assignee'>Assign a User: </label></td>
                <td  class = "table-field"><input type="text" id='assignee' name='assignee' placeholder="Write an ID" /></td>
             </tr>   
            </tr>
                <td class="table-field">Completed:</td>
                <td class="table-field"><input type="checkbox" id="isCompleted" name="isCompleted" /></td>
            </tr>
                <td colspan="2"><input type="button" id="editTaskBtn" class="save-button" value="Save" /></td>
            </tr>
        </table>
    </fieldset>`,
    listeners: [
            {
                targetId: 'editTaskBtn',
                eventType:'click',
                callback: tasksEditForm_Submit
            }
        ]
    };
}