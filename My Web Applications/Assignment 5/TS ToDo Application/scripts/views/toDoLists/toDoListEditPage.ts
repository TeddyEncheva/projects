import { listsEditForm_Submit } from '../../toDoEvents';

export default function toDoListEditPage() {
    
    return {template: `<input type="hidden" id="id" name="id" />
        <input type="hidden" id="userId" name="userId" />
        <fieldset>
        <div class="sign">
        <h2>ToDo List</h2>
        </div>
            <table>            
                <tr>
                    <td class="table-field">Title:</td>
                    <td class="table-field"><input type="text" id="title" name="title" placeholder='Write a Title'/></td>
                </tr>
                <tr>
                <div id="shareOption">
                    <td class="table-field">Share With:</td>
                    <td>
                    <div class="table-field">
                        <div>
                            <input type="text" id='sharedWith' name='shareWith' placeholder='Write an ID' />
                        </div>
                    </div>
                    </td>
                </div>
                </tr>
                <tr>
                    <td colspan="2"><input type="submit" id="listSaveBtn" class= 'save-button' value="Save" /></td>
                </tr>
            </table>
        </fieldset>`,
        listeners: [
            {
                targetId: 'listSaveBtn',
                eventType: 'click',
                callback: listsEditForm_Submit
            }
        ]
    };
}