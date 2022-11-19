const SignupPage = require('../pageobjects/signup.page');
const SecurePage = require('../pageobjects/secure.page');
const { faker } = require('@faker-js/faker');



describe.skip('My SignUp application', () => {
    it('should sign up with valid credentials', async () => {
        await SignupPage.open();
        const email = faker.internet.email(undefined, undefined, 'gmail.com');
        await SignupPage.signup('Colleen', 'Brown', "true", email, 'AUTOcamp2022!', 'AUTOcamp2022!');
        await expect(SecurePage.welcomenote).toHaveTextContaining('Welcome, Colleen Brown!');
    });

    it('should not sign up with a password < 8 characters', async () => {
        await SignupPage.open();
        await SignupPage.signup('Colleen', 'Brown', "true", 'colleen.williams1905@gmail.com', 'AUTO2!', 'AUTO2!');
        await expect(SignupPage.errormsg).toHaveTextContaining(
            'Minimum length of this field must be equal or greater than 8 symbols');

    });
});



