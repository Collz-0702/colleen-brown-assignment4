const { faker } = require('@faker-js/faker');
const signUpPage = require('../pageobjects/signup.page');
const securePage = require('../pageobjects/secure.page');

describe('My Data Driven Test', () => {
    it('should sign up with faker credentials', async () => {
        await signUpPage.open();
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email(undefined, undefined, 'gmail.com');
        // await signUpPage.inputEmail.scrollIntoView();
        await signUpPage.signUp(firstName, lastName, "true", email, "AUTOcamp2022!", "AUTOcamp2022!");
        await expect(securePage.welcomeNote).toHaveTextContaining('Thank you for registering with Fake Online Clothing Store.');
    });
});