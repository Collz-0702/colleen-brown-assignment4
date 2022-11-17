

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get welcomenote() {
        return $('div[class= "panel header"] span[class="logged-in"]');
    }
}

module.exports = new SecurePage();
