function toDoListEditPage() {
    return `<input type="hidden" id="id" name="id" />
    <input type="hidden" id="userId" name="userId" />
    <fieldset>
        <legend>ToDo List</legend>
        <table>            
            <tr>
                <td class="table-field">Title:</td>
                <td class="table-field"><input type="text" id="title" name="title" /></td>
            </tr>
            <tr>
            <div id="shareOption">
                <td class="table-field">Share With:</td>
                <td>
                <div id="selectBox" class="table-field">
                <p>Hold Ctrl to select multiple options!</p>
                <select  id="shareWith" name="shareWith" size=4 multiple>
                <option id="firstOption" value="0">Select User IDs:</option>
                </select>
                </div>
                </td>
            </div>
            </tr>
            <tr>
                <td colspan="2"><input type="submit" class= 'save-button' onclick="listsEditForm_Submit()" value="Save" /></td>
            </tr>
        </table>
    </fieldset>`;
}