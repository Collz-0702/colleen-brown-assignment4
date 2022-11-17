

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Addtocart {
    /**
     * define selectors using getter methods
     */
    get itemimage() {
        return $('img[alt="Radiant Tee"]')
    }
    get btnaddsize() {
        return $('div[class="swatch-opt-1556"] div[class= "swatch-attribute size"]');
    }

    get btnaddcolor() {
        return $('div[class="swatch-opt-1556"] div[class="swatch-attribute color"]');
    }
    get btnaddcart() {
        return $('button[title= "Add to Cart"]');
    }

    get addcartnote() {
        return $('button[title= "Add to Cart"]');
    }

    async addacart() {
        await this.itemimage.click();
        await this.btnaddsize.click();
        await this.btnaddsize.isSelected();
        await this.btnaddcolor.click();
        await this.btnaddcolor.isSelected();
        await this.btnaddcart.click();
    }
    open() {
        return browser.url(`https://magento.softwaretestingboard.com/`);
    }
}
module.exports = new Addtocart();
