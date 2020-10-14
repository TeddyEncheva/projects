function loginPage() {
    return `<fieldset>
    <div class="sign">
    <h2>Login</h2>
    </div>
    <div id="loginContainer">
    <form>
        <div>
            <div id="error" class='normalize-font-size'></div>
        </div>
        <div class="row">
            <label class="table-field" for="username">Username:</label>
            <input id="username" type="text" placeholder="Enter Username" name="username" />
        </div>
        <div class="row">
            <label class="table-field" for="password">Password:</label>
            <input id="password" type="password" placeholder="Enter Password" name="password" />
        </div>
        <div>
            <input id="loginBtn" type="button" class="save-button" onclick="loginForm_Submit()" value="Login" /></td>
        </div>
    </form>
    </div>
</fieldset>`;
}