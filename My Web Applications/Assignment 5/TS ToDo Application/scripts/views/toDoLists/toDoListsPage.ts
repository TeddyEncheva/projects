import { listsNewLink_Click } from '../../toDoEvents';

export default function toDoListsPage() {
    return { template: `<button id="newToDoList" class="newbutton">New</button>
        <table id="toDoListTable">
            <tr>
                <td class="table-field">ID:</td>
                <td class="table-field">Title</td>
                <td class="table-field">Task Count</td>
                <td class="table-field">Date of Creation</td>
                <td class="table-field">Created by ID</td>
                <td class="table-field">Date of Last Edit</td>
                <td class="table-field">Last Edited by ID</td>
                <td ></td>
                <td ></td>
                <td ></td>
            </tr>
        </table>`,
        listeners: [
            {
                targetId: 'newToDoList',
                eventType: 'click',
                callback: listsNewLink_Click
            }
        ]
    };
}