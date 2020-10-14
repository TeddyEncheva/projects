function toDoListDetailsPage() {
    return `<table id="listsDetails">
    <tr>
        <td class='cell-style'>Creator:</td>
        <td id="userId"></td>
    </tr>
    <tr>
        <td class='cell-style'>Title:</td>
        <td id="title" class="cell-style"></td>
    </tr>
</table>
<button id="newTaskLink" class="newbutton">New</button>
<table id="tasksTable">
    <tr>
        <td class="table-field">Tasks</td>
        <td class="table-field">Description:</td>
        <td class="table-field">Completed:</td>
        <td class="table-field">Created on:</td>
        <td class="table-field">Created by ID:</td>
        <td class="table-field">Last Edited on:</td>
        <td class="table-field">Last Edit by ID:</td>
    </tr>
</table>`;
}