import { teamEdit_Submit } from '../../../controllers/teamController';

export default function teamEditPage() {
    return {template: `
        <input type="hidden" id="id" name="id" />
        <div class="above-table">
        <h3>Create/Edit Team</h3>
        </div>
            <form class="form">            
                <div>
                    <label for="title"></label>
                    <input type="text" id="title" class="input" name="title" placeholder='Title' required/>
                </div>
                <div>
                   <button type="submit"  id="editTeamBtn" class= 'button border-rounding close' value="Create/Edit Team">Create/Edit TEAM</button>
                </div>
            </form>`,
        listeners: [
            {
                targetId: 'editTeamBtn',
                eventType: 'click',
                callback: teamEdit_Submit
            }
        ]
    };
}