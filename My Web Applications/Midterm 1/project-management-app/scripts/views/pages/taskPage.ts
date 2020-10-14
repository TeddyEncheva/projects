export default function taskPage() {
    return { template: `
    <div class="page-container">
        <section class="section">
        <div class="heading">
            <h2>Project Name</h2>
        </div>
            <div id="projectParent" class="box shadow">
            </div>
        </section>  
        <section class="section">
            <div class="heading task-heading">
                <h2>Tasks</h2>
                <button id="newTask" class="button border-rounding" value="New Task">  &#65291 CREATE TASK</button>
            </div>
                <div id="taskList">
                </div>
        </section>
    </div>`,
        listeners: [

        ]
    };
}