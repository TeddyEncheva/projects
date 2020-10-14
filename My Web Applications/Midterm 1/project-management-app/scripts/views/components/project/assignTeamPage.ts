import { assignTeam_Submit } from "../../../controllers/projectController";

export default function assignTeamPage() {
    return { template: `
        <input type="hidden" id="id" name="id" />
        <div class="above-table">
        <h3>Assign Team to Project</h3>
        </div>
            <form class="form">            
                <div>
                    <label for="teamId"></label>
                    <input type="text" id="teamId" class="input" name="teamId" placeholder='ID' required/>
                </div>
                <div>
                    <button type="submit"  id="assignTeamBtn" class='button border-rounding close' value="ASSIGN TEAM">ASSIGN TEAM</button>
                </div>
            </form>`,
        listeners: [
            {
                targetId: 'assignTeamBtn',
                eventType: 'click',
                callback: assignTeam_Submit
            }
        ]
    };
}