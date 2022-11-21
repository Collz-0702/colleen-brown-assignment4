const { default: $ } = require("webdriverio/build/commands/browser/$");





/**
 * sub page containing specific selectors and methods for a specific page
 */
class purchaseProducts {
    /**
     * define selectors using getter methods
     */
    get btncartinfo() {
        return $('.action.showcart');
    }
    get btncheckout() {
        return $('#top-cart-btn-checkout');
    }
    get email() {
        return $('#customer-email');
    }
    get firstname() {
        return $('[name="firstname"]');
    }
    get lastname() {
        return $('[name="lastname"]');
    }
    get streetname() {
        return $('[name="street[0]"]');
    }
    get city() {
        return $('[name="city"]');
    }
    get zipcode() {
        return $('[name="postcode"]');
    }
    get country() {
        return $('[name="country_id"]');
    }
    get state() {
        return $('[name="region_id"]')
    }
    get phonenumber() {
        return $('[name="telephone"]');
    }
    get btnshiprate() {
        return $('[name="ko_unique_4"]');
    }
    get btnnext() {
        return $('.button.action.continue.primary');
    }
    get counterNumber() {
        return $('.counter-number');
    }
    get placeorder() {
        return $('[title="Place Order"]>span')
    }
    get sucesspage() {
        return $('h1.page-title>span')
    }
    get hiddenItemList() {
        return $('.counter-label span')
    }
    get shoppingCartInfo() {
        return $('div[data-bind=html: $parent.prepareMessageForHtml(message.text)] a')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async orderitem(email, firstname, lastname, streetname, city, state, zipcode, country, phonenumber) {
        await this.email.setValue(email);
        await this.firstname.setValue(firstname);
        await this.phonenumber.scrollIntoView();
        await this.lastname.setValue(lastname);
        await this.streetname.setValue(streetname);
        await this.city.setValue(city);
        await this.state.selectByAttribute("data-title", state);
        await this.zipcode.setValue(zipcode);
        await this.country.selectByAttribute("data-title", country);
        await this.phonenumber.scrollIntoView();
        await this.phonenumber.setValue(phonenumber);
        await this.btnnext.scrollIntoView();
        await this.btnshiprate.waitForDisplayed();
        await this.btnshiprate.click();
        await this.btnnext.click();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('orderitem');
    }
}

module.exports = new purchaseProducts();
