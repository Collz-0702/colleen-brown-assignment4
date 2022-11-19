
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputfirstname() {
        return $('input[type=text]#firstname');
    }

    get inputlastname() {
        return $('input[type=text]#lastname');
    }

    get checkbox() {
        return $('input[type="checkbox"]#is_subscribed');
    }


    get inputemail() {
        return $('input[type=email]#email_address');
    }

    get inputpassword() {
        return $('input[type=password]#password');
    }

    get inputconfirmpassword() {
        return $('input[type=password]#password-confirmation');
    }

    get btncreate() {
        return $('button[title="Create an Account"] span');
    }

    get errormsg() {
        return $('#password-error');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async signup(firstname, lastname, checkbox, email, password, confirmpassword) {
        await this.inputfirstname.setValue(firstname);
        await this.inputlastname.setValue(lastname);
        await this.checkbox.click();
        await this.inputemail.setValue(email);
        await this.inputpassword.setValue(password);
        await this.inputconfirmpassword.setValue(confirmpassword);
        await this.btncreate.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('signup');
    }
}

module.exports = new SignupPage();
