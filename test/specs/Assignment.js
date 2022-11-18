const SignupPage = require('../pageobjects/signup.page');
const SecurePage = require('../pageobjects/secure.page');
const Addtocart = require('../pageobjects/cart.page');
const PurchaseProducts = require('../pageobjects/purchaseproduct');
const { default: $ } = require('webdriverio/build/commands/browser/$');



describe('My SignUp application', () => {
    it.skip('should sign up with valid credentials', async () => {
        await SignupPage.open();
        await SignupPage.signup('Colleen', 'Brown', "true", 'colleen+4@gmail.com', 'AUTOcamp2022!', 'AUTOcamp2022!');
        await expect(SecurePage.welcomenote).toHaveTextContaining('Welcome, Colleen Brown!');
    });

    it.skip('should not sign up with a password < 8 characters', async () => {
        await SignupPage.open();
        await SignupPage.signup('Colleen', 'Brown', "true", 'colleen.williams1905@gmail.com', 'AUTO2!', 'AUTO2!');
        await expect(SignupPage.errormsg).toHaveTextContaining(
            'Minimum length of this field must be equal or greater than 8 symbols');

    });
});


describe('Add to Shopping Cart', () => {
    it.only('should add a Purple Radiant Tee item to shopping cart', async () => {
        await browser.url('https://magento.softwaretestingboard.com/');
        //await Addtocart.open();
        //await $('img[alt="Radiant Tee"]').click();
        await $('.page-wrapper').waitForDisplayed();
        await expect(Addtocart.btnaddsize).click();
        await expect(Addtocart.btnaddcolor).click();
        //     await expect(Addtocart.btnaddcolor).toHaveAttr('color');
        await expect(Addtocart.btnaddcart).click();
        await expect(AddtoCart.addcartnote).toHaveTextContaining(
            'Added to Cart');
    });
});
describe('My Purchased Item', () => {
    it.skip('should allow items in cart to be purchased', async () => {
        await PurchaseProducts.open();
        await browser.url('https://magento.softwaretestingboard.com/');
        const cartbtn = PurchaseProducts.btncartinfo;
        await cartbtn.click();
        await expect(cartbtn).toBeGreaterThanOrEqual(1);
        await $('#top-cart-btn-checkout').click();
        await browser.url('https://magento.softwaretestingboard.com/checkout/#shipping');
        await PurchaseProducts.orderitem("colleen+1@gmail.com", 'Colleen', 'Brown', "Ensom City", 'Spanish Town', '00000', 'Jamaica', '8764455544');

    });
});
