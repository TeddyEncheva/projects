
export default function taskPage() {
    return { template:`
    <div class="task-container">
    <div class="task-left">
        <div class="above-table">
            <h3>TODO Task Management</h3>
        </div>

        <div class="task-column">
            <div id="tasksList" class="shadow">
            </div>
            <div id="tasksTable" class="table-container shadow">
                <div class="grey-field">
                    <button id="newTaskLink"class="new-task"></button>
                </div>
            </div>
        </div>
    </div>    
        <div class="task-edit-container">
        </div>
    </div>`,
    listeners:[]
    };
}