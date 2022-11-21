const { faker } = require('@faker-js/faker');
const SignupPage = require('../pageobjects/signup.page');
const SecurePage = require('../pageobjects/secure.page');

describe.skip('My Data Driven Test', () => {
    it('should sign up with faker credentials', async () => {
        await SignupPage.open();
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email(undefined, undefined, 'gmail.com');
        await SignupPage.inputemail.scrollIntoView();
        await SignupPage.signup(firstName, lastName, "true", email, "AUTOcamp2022!", "AUTOcamp2022!");
        await expect(SecurePage.welcomenote).toHaveTextContaining('Thank you for registering with Fake Online Clothing Store.');
    });
});