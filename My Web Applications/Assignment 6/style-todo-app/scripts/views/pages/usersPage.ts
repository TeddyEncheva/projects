import { createNewUser } from '../../controllers/userController';

export default function usersPage() {
    return { template: `
    <section class="table-holder">
        <div class="above-table">
        <h3>Users List</h3>
        <div class="button-unifier">
            <button id="newUserLink" class="newbutton blue-button opacity">Add user</button>
            <a class="user-icon"></a>
        </div>
        </div>
            <table id="usersTable" class="table-container shadow">
                <tr>
                    <td class="table-field">First Name</td>
                    <td class="table-field">Last Name</td>
                    <td class="table-field">Username</td>
                    <td class="table-field hide">Date of creation</td>
                    <td class="table-field hide">Date of last edit</td>
                    <td class="table-field"></td>
                </tr>         
            </table>
    </section>`,
        listeners: [
            {
                targetId: 'newUserLink',
                eventType: 'click',
                callback:()=> createNewUser()
            }
        ]
    };
}