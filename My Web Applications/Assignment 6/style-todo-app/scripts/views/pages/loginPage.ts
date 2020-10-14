import { submitLoginForm } from '../../controllers/loginController';

export default function loginPage() {
    return { template: `
        <div class="form-container shadow center">
            <h2 class="login-heading">TODO APP</h2>
            <p>Welcome back! Please login to your account.</p>
            <div id="loginContainer">
                <form>
                    <div>
                        <div id="error" class='normalize-font-size'></div>
                    </div>
                    <div class="underline">
                        <label for="username"></label>
                        <input id="username" type="text" placeholder="Username" name="username" required />
                    </div>
                    <div class="underline">
                        <label for="password"></label>
                        <input id="password" type="password" placeholder="Password" name="password" required />
                    </div>
                    <div>
                        <input id="loginBtn" type="button" class="blue-button" value="Login" /></td>
                    </div>
                </form>
            </div>
        </div>
    <div class="rights">
        <p>© ScaleFocus Academy</p>
    </div>`,
        listeners: [
            {
                targetId: 'loginBtn',
                eventType: 'click',
                callback: submitLoginForm
            }
        ]
    };
}