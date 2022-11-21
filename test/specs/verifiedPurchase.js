//
const purchaseProducts = require('../pageobjects/purchaseproduct');
const addToCart = require('../pageobjects/cart.page');
const { faker } = require('@faker-js/faker');

describe.skip('My verified Purchase', () => {
    it('should show a verified purchase', async () => {
        await browser.url('https://magento.softwaretestingboard.com/');
        await addToCart.addItemToCart();
        await purchaseProducts.counterNumber.waitForClickable();
        await purchaseProducts.btnCartInfo.click();
        await purchaseProducts.btnCheckOut.click();
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/#shipping');
        const email = faker.internet.email(undefined, undefined, 'gmail.com');
        await purchaseProducts.orderItem(email, 'Colleen', 'Brown', "Mount Rainier", 'Seattle', 'Washington', '00000', 'United States', '8764455544');
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/#payment');
        // await purchaseProducts.placeOrder.waitForDisplayed();
        // await purchaseProducts.placeOrder.click();
        // await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/onepage/success/');
        // await expect(purchaseProducts.sucessPage).toHaveText('Thank you for your purchase!');

    });

});
