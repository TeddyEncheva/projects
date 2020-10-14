function toDoListsPage() {
    return `<button id="newToDoList" class="newbutton" onclick="listsEditLink_Click()">New</button>
    <table id="toDoListTable">
        <tr>
            <td class="table-field">Username</td>
            <td class="table-field">Title</td>
            <td class="table-field">Task Count</td>
            <td class="table-field">Date of Creation</td>
            <td class="table-field">Created by ID</td>
            <td class="table-field">Date of Last Edit</td>
            <td class="table-field">Last Edited by ID</td>
            <td class="table-field">Shared With:</td>
            <td ></td>
            <td ></td>
            <td ></td>
        </tr>
    </table>`;
}