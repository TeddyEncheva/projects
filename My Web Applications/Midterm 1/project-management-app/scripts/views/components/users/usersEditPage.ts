import { usersEditForm_Submit } from "../../../controllers/userController";

export default function usersEditPage() {
    return { template: `
    <input type="hidden" id="id" name="id" />
        <div class="above-table">
        <h3>Create User/Edit User</h3>
        </div>
            <form id="usersEditForm" class="form">
                <div class="form-field">
                    <label for="firstName"></label>
                    <input type="text" id="firstName" class="input" name="firstName" placeholder="First name" />
                </div>
                <div class="form-field">
                    <label for="lastName"></label>
                    <input type="text" id="lastName" class="input" name="lastName"  placeholder="Last name"/>
                </div>
                <div class="form-field">
                    <label for="username"></label>
                    <input type="text" id="username" class="input" name="username" placeholder="Username" required/>
                </div>
                <div class="form-field">
                    <label for="password"></label>
                    <input type="password" id="password"  class="input" name="password" placeholder="Password" required/>
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
                        <button type="button" id="editUserBtn" class="button border-rounding close" value="Save">Create/Edit</button>
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