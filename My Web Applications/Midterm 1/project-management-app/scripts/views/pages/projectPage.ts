import { createNewProject } from '../../controllers/projectController' ;

export default function projectPage() {
    return { template: `
    <div class="page-container">
        <section class="section-wrapper">

            <div class="heading left-margin">
                <h2>Dashboard</h2>
            </div>

            <div id="dashboard">
                <div class="dashboard-box shadow">
                    <img src="../../images/ic_projects_24px.svg" alt="projects">
                    <div class="dashboard-stat">
                        <h2 id="projectCount">0</h2>
                        <p>Projects</p>
                    </div>
                </div>
                <div class="dashboard-box shadow">
                    <img src="../../images/ic_tasks_24px.svg" alt="tasks">
                    <div class="dashboard-stat">
                        <h2 id="assigned">0</h2>
                        <p>Tasks</p>
                    </div>
                </div>
                <div class="dashboard-box shadow">
                    <img src="../../images/ic_pending_24px.svg" alt="pending">
                    <div class="dashboard-stat">
                        <h2 id="pendingCount">0</h2>
                        <p>Pending tasks</p>
                    </div>
                </div>
                <div class="dashboard-box shadow">
                    <img src="../../images/ic_worklog_24px.svg" alt="worklog">
                    <div class="dashboard-stat">
                        <h2 id="timeWorked">0h</h2>
                        <p>Work log</p>
                    </div>
                </div>
            </div> 
        </section>
        
        <section class="section-wrapper">
                <div class="heading margin">
                    <h2>Projects</h2>
                    <button id="newProject" class="button border-rounding" value="New Project">＋ CREATE PROJECT</button>
                </div>  
                <div id="projectList">
                </div>
        </section>
    </div>`,
        listeners: [
            {
            targetId: 'newProject',
            eventType: 'click',
            callback: () => createNewProject()
            }
        ]
    };
}