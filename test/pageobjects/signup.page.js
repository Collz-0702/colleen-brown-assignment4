
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class signUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName() {
        return $('input[type=text]#firstname');
    }

    get inputLastName() {
        return $('input[type=text]#lastname');
    }

    get checkBox() {
        return $('input[type="checkbox"]#is_subscribed');
    }


    get inputEmail() {
        return $('input[type=email]#email_address');
    }

    get inputPassword() {
        return $('input[type=password]#password');
    }

    get inputConfirmPassword() {
        return $('input[type=password]#password-confirmation');
    }

    get btnCreate() {
        return $('button[title="Create an Account"] span');
    }

    get errorMsg() {
        return $('#password-error');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signUp(firstname, lastname, checkBox, email, password, confirmpassword) {
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.checkBox.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.setValue(confirmpassword);
        await this.btnCreate.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('signUp');
    }
}

module.exports = new signUpPage();
