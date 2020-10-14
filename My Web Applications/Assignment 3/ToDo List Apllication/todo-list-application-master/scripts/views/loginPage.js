function loginPage() {
    return `<fieldset>
    <legend class='normalize-font-size'>Login</legend>
    <table>
        <tr>
            <td id="error" class='normalize-font-size'></td>
        </tr>
        <tr>
            <td class="table-field">Username:</td>
            <td class="table-field"><input id="username" type="text" name="username" /></td>
        </tr>
        <tr>
            <td class="table-field">Password:</td>
            <td class="table-field"><input id="password" type="password" name="password" /></td>
        </tr>
        <tr>
            <td colspan="2"><input id="loginBtn" type="button" class="save-button" onclick="loginForm_Submit()" value="Login" /></td>
        </tr>
    </table>
</fieldset>`;
}