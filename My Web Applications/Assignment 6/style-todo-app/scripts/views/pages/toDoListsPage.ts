import { listsNewLink_Click } from '../../controllers/toDoController';

export default function toDoListsPage() {
    return { template: `
    <section class="table-holder">
        <div class="above-table">
            <h3>TODO List</h3>
            <div class="button-unifier">
                <button id="newToDoList" class="newbutton blue-button opacity">Add TODO</button>
                <a class="todo-icon"></a>
            </div>
        </div>
        <table id="toDoListTable" class="table-container shadow">
            <tr>
                <td class="table-field">Title</td>
                <td class="table-field">Date of creation</td>
                <td class="table-field hide">Date of last edit</td>
                <td class="table-field"></td>
            </tr>
        </table>
    </section> `,
        listeners: [
            {
                targetId: 'newToDoList',
                eventType: 'click',
                callback:  listsNewLink_Click
            }
        ]
    };
}