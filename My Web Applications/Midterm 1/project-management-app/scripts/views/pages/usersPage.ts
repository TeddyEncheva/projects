import { createNewUser } from '../../controllers/userController';

export default function usersPage() {
    return { template: `
    <div class="page-container">
        <div class="table-holder">
            <div class="heading bottom-margin">
                <h2>Users</h2>
                <button id="newUser" class="button border-rounding" value="New User">＋ CREATE USER</button>
            </div>
            <table id="usersTable" class="table-container shadow">
                    <tr>
                        <td class="table-field">First Name</td>
                        <td class="table-field">Last Name</td>
                        <td class="table-field">Username</td>
                        <td class="table-field"></td>
                    </tr>
            </table>
        </div>
    </div>`,

        listeners: [
            {
                targetId: 'newUser',
                eventType: 'click',
                callback:()=> createNewUser()
            }
        ]
    };
}