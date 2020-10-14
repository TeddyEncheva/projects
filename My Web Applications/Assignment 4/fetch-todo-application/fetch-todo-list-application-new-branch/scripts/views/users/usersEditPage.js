function usersEditPage() {
    return `<input type="hidden" id="id" name="id" />
    <fieldset>
    <div class="sign">
    <h2>User</h2>
    </div>
        <table>
            <tr>
                <td class="table-field">Username:</td>
                <td class="table-field"><input type="text" id="username" name="username" placeholder="Username" /></td>
            </tr>
            <tr>
                <td class="table-field">Password:</td>
                <td class="table-field"><input type="password" id="password" name="password" placeholder="Do NOT Leave Empty"/></td>
            </tr>
            <tr>
                <td class="table-field">First Name:</td>
                <td class="table-field"><input type="text" id="firstName" name="firstName" placeholder="First Name" /></td>
            </tr>
            <tr>
                <td class="table-field">Last Name:</td>
                <td class="table-field"><input type="text" id="lastName" name="lastName"  placeholder="Last Name"/></td>
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