

/**
 * sub page containing specific selectors and methods for a specific page
 */
class addToCart {
    /**
     * define selectors using getter methods
     */
    get itemImage() {
        return $('img[alt="Radiant Tee"]')
    }
    get btnAddSize() {
        return $('#option-label-size-143-item-167');
    }

    get btnAddColor() {
        return $('#option-label-color-93-item-57');
    }
    get btnAddCart() {
        return $('button[id="product-addtocart-button"] span');
    }

    get addCartNote() {
        return $('div[data-bind= "html: $parent.prepareMessageForHtml(message.text)"]');
    }
    async addItemToCart() {
        await this.itemImage.click();
        await this.btnAddSize.click();
        await this.btnAddColor.click();
        await this.btnAddCart.click();
    }
}
module.exports = new addToCart();
