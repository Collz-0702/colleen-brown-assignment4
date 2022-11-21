const signUpPage = require('../pageobjects/signup.page');
const securePage = require('../pageobjects/secure.page');
const { faker } = require('@faker-js/faker');
const { default: debug } = require('webdriverio/build/commands/browser/debug');



describe('My SignUp application', () => {
    it('should sign up with valid credentials', async () => {
        await signUpPage.open();
        const email = faker.internet.email(undefined, undefined, 'gmail.com');
        await signUpPage.signUp('Colleen', 'Brown', "true", email, 'AUTOcamp2022!', 'AUTOcamp2022!');
        await expect(securePage.welcomeNote).toHaveTextContaining('Thank you for registering with Fake Online Clothing Store.');
    });

    it('should not sign up with a password < 8 characters', async () => {
        await browser.reloadSession();
        await signUpPage.open();
        await signUpPage.signUp('Colleen', 'Brown', "true", 'colleen.williams1905@gmail.com', 'AUTO2!', 'AUTO2!');
        await expect(signUpPage.errorMsg).toHaveTextContaining(
            'Minimum length of this field must be equal or greater than 8 symbols');

    });
});



