export default function workLogPage() {
    return { template: `
    <div class="page-container">
        <section class="section">
            <div class="heading">
                <h2>Task</h2>
            </div>
            <div id="taskInfo" class="box shadow">
            </div>   
        </section>  
        <section class="section">
            <div class="heading task-heading">
                <h2>Work Log</h2>
                <button id="newLog" class="button border-rounding" value="New Log">  &#65291 LOG WORK</button>
            </div>
                <div id="logList">
                </div>
        </section>
    </div>`,
        listeners: [

        ]
    };
}