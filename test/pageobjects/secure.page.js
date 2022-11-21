

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class securePage extends Page {
    /**
     * define selectors using getter methods
     */
    get welcomeNote() {
        return $('.message-success.success.message');
    }
}

module.exports = new securePage();
