const addToCart = require('../pageobjects/cart.page');

describe.skip('Add to Shopping Cart', () => {
    it('should add a Purple Radiant Tee item to shopping cart', async () => {
        await browser.url('https://magento.softwaretestingboard.com/');
        await addToCart.addItemToCart();
        await expect(addToCart.addcartnote).toHaveTextContaining(
            'You added Radiant Tee to your shopping cart.');
    });
});