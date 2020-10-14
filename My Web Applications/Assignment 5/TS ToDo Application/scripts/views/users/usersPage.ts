import { usersEditLink_Click} from "../../userEvenets";
export default function usersPage() {
    return { template: `<button id="newUserLink" class="newbutton">New</button>
        <table id="usersTable">
            <tr>
                <td class="table-field">User ID</td>
                <td class="table-field">Username</td>
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
        </table>`,
        listeners: [
            {
                targetId: 'newUserLink',
                eventType: 'click',
                callback: usersEditLink_Click
            }
        ]
    };
}