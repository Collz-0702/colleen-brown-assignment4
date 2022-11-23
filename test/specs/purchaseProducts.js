
const purchaseProducts = require('../pageobjects/purchaseproduct');
const addToCart = require('../pageobjects/cart.page');
const { faker } = require('@faker-js/faker');
const signUpPage = require('../pageobjects/signup.page');
const securePage = require('../pageobjects/secure.page');


describe('My Purchased Item', () => {
    it('should allow items in cart to be purchased', async () => {
        // await browser.url('https://magento.softwaretestingboard.com/');
        await signUpPage.open();
        const email = faker.internet.email(undefined, undefined, 'gmail.com');
        await signUpPage.signUp('Colleen', 'Brown', "true", email, 'AUTOcamp2022!', 'AUTOcamp2022!');
        await expect(securePage.welcomeNote).toHaveTextContaining('Thank you for registering with Fake Online Clothing Store.');
        await $('#ui-id-4').click();
        await addToCart.addItemToCart();
        await purchaseProducts.counterNumber.waitForClickable();
        await purchaseProducts.btnCartInfo.click();
        await purchaseProducts.btnCheckOut.click();
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/#shipping');
        await purchaseProducts.orderItem('Colleen', 'Brown', "Mount Rainier", 'Seattle', 'Washington', '00000', 'United States', '8764455544');
        await browser.url('https://magento.softwaretestingboard.com/checkout/#payment');
        await purchaseProducts.placeOrder.waitForDisplayed();
        await purchaseProducts.placeOrder.click();
        await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/onepage/success/');
        await expect(purchaseProducts.sucessPage).toHaveText('Thank you for your purchase!');
        // await browser.debug();
    });
});
