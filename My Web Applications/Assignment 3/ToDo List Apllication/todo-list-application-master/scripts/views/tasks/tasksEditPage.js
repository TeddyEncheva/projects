function tasksEditPage() {
    return `<input type="hidden" id="id" name="id" />
    <input type="hidden" id="listId" name="listId" />
    <fieldset>
        <legend class='normalize-font-size'>Task</legend>
        <table>
            <tr>
                <td class="table-field">Task:</td>
                <td class="table-field"><input type="text" id="task" name="task" /></td>
            </tr>
            <tr>
            <tr>
            <tr>
                <td class="table-field">Description:</td>
                <td class="table-field"><input type="text" id="details" name="details" /></td>
            </tr>
                <td class="table-field">Completed:</td>
                <td class="table-field"><input type="checkbox" id="isCompleted" name="isCompleted" /></td>
            </tr>
                <td colspan="2"><input type="button" class="save-button" onclick="tasksEditForm_Submit()" value="Save" /></td>
            </tr>
        </table>
    </fieldset>`;
}