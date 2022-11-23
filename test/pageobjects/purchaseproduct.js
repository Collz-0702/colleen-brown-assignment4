

/**
 * sub page containing specific selectors and methods for a specific page
 */
class purchaseProducts {
    /**
     * define selectors using getter methods
     */
    get btnCartInfo() {
        return $('.action.showcart');
    }
    get btnCheckOut() {
        return $('#top-cart-btn-checkout');
    }
    // get email() {
    // return $('#customer-email');
    // }
    get firstName() {
        return $('[name="firstname"]');
    }
    get lastName() {
        return $('[name="lastname"]');
    }
    get streetName() {
        return $('[name="street[0]"]');
    }
    get city() {
        return $('[name="city"]');
    }
    get zipCode() {
        return $('[name="postcode"]');
    }
    get country() {
        return $('[name="country_id"]');
    }
    get state() {
        return $('[name="region_id"]')
    }
    get phoneNumber() {
        return $('[name="telephone"]');
    }
    get btnShipRate() {
        return $('[name="ko_unique_4"]');
    }
    get btnNext() {
        return $('.button.action.continue.primary');
    }
    get counterNumber() {
        return $('.counter-number');
    }
    get placeOrder() {
        return $('[title="Place Order"]>span')
    }
    get sucessPage() {
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
    async orderItem(firstName, lastName, streetName, city, state, zipCode, country, phoneNumber) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.streetName.setValue(streetName);
        await this.city.setValue(city);
        await this.state.selectByAttribute("data-title", state);
        await this.zipCode.setValue(zipCode);
        await this.country.selectByAttribute("data-title", country);
        await this.phoneNumber.scrollIntoView();
        await this.phoneNumber.setValue(phoneNumber);
        await this.btnNext.scrollIntoView();
        await this.btnShipRate.waitForDisplayed();
        await this.btnShipRate.click();
        await this.btnNext.click();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('orderItem');
    }
}

module.exports = new purchaseProducts();
