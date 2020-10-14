import { assignUser_Submit } from "../../../controllers/teamController";

export default function assignUserPage() {
    return { template: `
    <input type="hidden" id="id" name="id" />
        <div class="above-table">
        <h3>Assign User to Team</h3>
        </div>
            <form class="form">      
                <div>
                    <label for="userId"></label>
                    <input type="text" id="userId" class="input" name="userId" placeholder='ID' required/>
                </div>
                <div>
                   <button type="submit"  id="assignUserBtn" class= 'button border-rounding close' value="Assign User">ASSIGN USER</button>
                </div>
            </form>`,
        listeners: [
            {
                targetId: 'assignUserBtn',
                eventType: 'click',
                callback: assignUser_Submit
            }
        ]
    };
}