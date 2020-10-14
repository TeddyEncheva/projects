import { submitLoginForm } from '../../controllers/loginController';

export default function loginPage() {
    return { template: `
    
        <div class="welcome-side">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please</p>
            <p>Sign in with your credentials</p>
        </div>     
        <div class="login-side">
            <h2>Project Management App</h2> 
             <div id="loginContainer">
                <img  src="../images/person-login-image.svg" alt="Person Image">    
                <form onsubmit="return validate()">
                    <div>
                        <div id="error"></div>
                    </div>
                    <div >
                        <label for="username"></label>
                        <input id="username" type="text" class="input" placeholder="Username" name="username" required />
                    </div>
                    <div>
                        <label for="password"></label>
                        <input id="password"  type="password"  class="input" placeholder="Password" name="password" required />
                    </div>
                    <div>
                        <button id="loginBtn" class="button-login border-rounding blue" type="submit" value="Submit" />Sign In</button>
                    </div>
                </form>
            </div>
            <div class="rights">
                <p>© ScaleFocus Academy</p>
            </div>
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