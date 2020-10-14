function usersPage() {
    return `<button id="newUserLink" class="newbutton" onclick="usersEditLink_Click()">New</button>
    <table id="usersTable">
        <tr>
            <td class="table-field">User ID</td>
            <td class="table-field">Username</td>
            <td class="table-field">Password</td>
            <td class="table-field">First Name</td>
            <td class="table-field">Last Name</td>
            <td class="table-field">Is admin</td>
            <td class="table-field">Created on</td>
            <td class="table-field">Created by ID</td>
            <td class="table-field">Last Edited</td>
            <td class="table-field">Edited by ID</td>
            <td></td>
            <td></td>
        </tr>         
    </table>`;
}