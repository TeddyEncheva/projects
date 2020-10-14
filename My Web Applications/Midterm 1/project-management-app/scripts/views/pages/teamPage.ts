import { createNewTeam } from '../../controllers/teamController';

export default function teamPage() {
    return { template: `
    <div class="page-container">
        <div class="table-holder">
            <div class="heading bottom-margin">
                <h2>Teams</h2>
                <button id="newTeam" class="button border-rounding" value="New Team">＋ CREATE TEAM</button>
            </div>
            <table id="teamTable" class="table-container shadow">
                    <tr>
                        <td class="table-field">Title</td>
                        <td class="table-field">Date of creation</td>
                        <td class="table-field">Date of last change</td>
                        <td class="table-field"></td>
                    </tr>
            </table>
        </div>
    </div>`,

        listeners: [
            {
                targetId: 'newTeam',
                eventType: 'click',
                callback:()=> createNewTeam()
            }
        ]
    };
}