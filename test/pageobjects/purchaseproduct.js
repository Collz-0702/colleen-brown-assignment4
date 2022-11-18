

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PurchaseProducts {
    /**
     * define selectors using getter methods
     */
    get btncartinfo() {
        return $('.action.showcart');
    }
    get btncheckout() {
        return $('#top-cart-btn-checkout');
    }
    get firstname() {
        return $('input[type="text"]#HFSPNHW');
    }
    get lastname() {
        return $('input[type="text"]#MLLJ8IY');
    }
    get streetname() {
        return $('input[type="text"]#SON2A53');
    }
    get city() {
        return $('input[type="text"]#XPB80S9');
    }
    get zipcode() {
        return $('input[type="text"]#O9YE60U');
    }
    get country() {
        return $('[name="country_id"]#YH69V6O');
    }
    get phonenumber() {
        return $('input[type="text"]#IV14UTC');
    }
    get btnshiprate() {
        return $('input[value="flatrate_flatrate"]');
    }
    get btnnext() {
        return $('.button.action.continue.primary');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async orderitem(email, firstname, lastname, streetname, city, zipcode, country, phonenumber) {
        await this.email.setValue(email);
        await this.inputfirstname.setValue(firstname);
        await this.inputlastname.setValue(lastname);
        await this.inputstreetname.setValue(streetname);
        await this.inputcity.setValue(city);
        await this.zipcode.setValue(zipcode);
        await this.country.setValue(country);
        await this.phonenumber.setValue(phonenumber);
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

module.exports = new PurchaseProducts();
