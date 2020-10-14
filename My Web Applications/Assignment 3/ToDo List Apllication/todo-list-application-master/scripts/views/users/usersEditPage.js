function usersEditPage() {
    return `<input type="hidden" id="id" name="id" />
    <fieldset>
        <legend class='normalize-font-size'>User</legend>
        <table>
            <tr>
                <td class="table-field">Username:</td>
                <td class="table-field"><input type="text" id="username" name="username" /></td>
            </tr>
            <tr>
                <td class="table-field">Password:</td>
                <td class="table-field"><input type="password" id="password" name="password" /></td>
            </tr>
            <tr>
                <td class="table-field">First Name:</td>
                <td class="table-field"><input type="text" id="firstName" name="firstName" /></td>
            </tr>
            <tr>
                <td class="table-field">Last Name:</td>
                <td class="table-field"><input type="text" id="lastName" name="lastName" /></td>
            </tr>
            <tr>
                <td class="table-field">Admin Privilages:</td>
                <td class="table-field"><input type="checkbox" id="isAdmin" name="isAdmin" />Yes</td>
            </tr>
            <tr>
                <td colspan="2"><input type="button" class="save-button" onclick="usersEditForm_Submit()" value="Save" /></td>
            </tr>
        </table>
    </fieldset>`;
}