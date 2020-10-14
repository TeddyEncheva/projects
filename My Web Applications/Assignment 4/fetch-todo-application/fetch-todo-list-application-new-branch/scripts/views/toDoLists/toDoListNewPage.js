function toDoListNewPage() {
    
    return `<input type="hidden" id="id" name="id" />
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
                <td colspan="2"><input type="submit" class= 'save-button' onclick="listsNewForm_Submit()" value="Save" /></td>
            </tr>
        </table>
    </fieldset>`;
}