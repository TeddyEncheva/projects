import { projectEdit_Submit } from '../../../controllers/projectController';

export default function projecteditPage() {
    
    return {template: `
    
        <input type="hidden" id="id" name="id" />
        <input type="hidden" id="userId" name="userId" />
        <div class="above-table">
        <h3>Create/Edit Project</h3>
        </div>
            <form class="form">            
                <div>
                    <label for="title"></label>
                    <input type="text" id="title" class="input" name="title" placeholder='Title' required/>
                </div>
                <div>
                    <label for="description"></label>
                    <textarea type="input" id="description" class="textarea input" name="description" placeholder='Description'/></textarea>
                </div>
                <div>
                   <button type="submit" class= 'button border-rounding close' id="editProjectBtn"  value="Create/Edit PROJECT">CREATE/EDIT PROJECT</button>
                </div>
            </form>`,
        listeners: [
            {
                targetId: 'editProjectBtn',
                eventType: 'click',
                callback: projectEdit_Submit
            }
        ]
    };
}