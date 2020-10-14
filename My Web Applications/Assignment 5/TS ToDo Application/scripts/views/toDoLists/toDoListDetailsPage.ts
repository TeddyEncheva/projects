
export default function toDoListDetailsPage() {
    return { template:`<table id="listsDetails">    
    </table>
    <button id="newTaskLink" class="newbutton">New</button>
    <table id="tasksTable">
        <tr>
            <td class="table-field">ID:</td>
            <td class="table-field">Title:</td>
            <td class="table-field">Description:</td>
            <td class="table-field">Completed:</td>
            <td class="table-field">Created on:</td>
            <td class="table-field">Created by ID:</td>
            <td class="table-field">Last Edited on:</td>
            <td class="table-field">Last Edit by ID:</td>
            <td class="table-field">Assignees: </td>
        </tr>
    </table>`,
    listeners:[]
    };
}