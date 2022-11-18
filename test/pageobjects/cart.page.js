

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
        return $('#option-label-size-143-item-167');
    }

    get btnaddcolor() {
        return $('#option-label-color-93-item-57');
    }
    get btnaddcart() {
        return $('button[id="product-addtocart-button"] span');
    }

    get addcartnote() {
        return $('div[data-bind= "html: $parent.prepareMessageForHtml(message.text)"]');
    }

}
module.exports = new Addtocart();
