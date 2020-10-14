import { usersEditForm_Submit } from "../../../controllers/userController";
export default function usersEditPage() {
    return { template: `
    <div class="edit-form-container">
    <input type="hidden" id="id" name="id" />
        <div class="above-table">
        <h3>Create/Edit User</h3>
        </div>
            <form id="usersEditForm">
                <div class="form-field">
                    <label>First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" />
                </div>
                <div class="form-field">
                    <label >Last Name</label>
                    <input type="text" id="lastName" name="lastName"  placeholder="Last Name"/>
                </div>
                <div class="form-field">
                    <label >Username</label>
                    <input type="text" id="username" name="username" placeholder="Username" />
                </div>
                <div class="form-field">
                    <label >Password</label>
                    <input type="password" id="password" name="password" placeholder="Do NOT Leave Empty"/>
                </div>
                <div class="isadmin-check form-field">
                <div class="form-checkbox">
                    <label  class="checkbox-label">
                        <input type="checkbox" id="isAdmin" name="isAdmin" />
                        <span class="checkbox-copy"></span>
                    </label>
                    <label class="checkbox-completed-label">Admin</lable>
                </div>
                </div>
                <div class="center-form-button">
                <div class="form-field">
                    <button type="submit" id="editUserBtn" class="save-button blue-button" value="Save">Create/Edit user</button>
                </div>
                </div>
            </form>
        </div>`,
        listeners: [
            {
                targetId: 'editUserBtn',
                eventType: 'click',
                callback: usersEditForm_Submit
            }
        ]
    };
}