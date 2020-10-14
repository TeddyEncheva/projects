import { logEdit_Submit } from '../../../controllers/workLogController';

export default function logEditPage() {
    
    return {template: `
        <input type="hidden" id="id" name="id" />
        <input type="hidden" id="taskId" name="id" />
        <input type="hidden" id="userId" name="userId" />
        <div class="above-table">
        <h3>Create/Edit Work Log</h3>
        </div>
            <form class="form">            
                <div>
                    <label for="time"></label>
                    <input type="text" id="time" class="input" name="title" placeholder='Hours'/>
                </div>
                <div>
                    <label for="date"></label>
                    <input type="date" id="date" class="date input" name="date" placeholder='Date' required/>
                </div>
                <div>
                   <button type="submit" class= 'button border-rounding close' id="editLogBtn"  value="Create/Edit Work Log">CREATE/EDIT WORK LOG</button>
                </div>
            </form>`,
        listeners: [
            {
                targetId: 'editLogBtn',
                eventType: 'click',
                callback: logEdit_Submit
            }
        ]
    };
}