const { faker } = require('@faker-js/faker');
const SignupPage = require('../pageobjects/signup.page');
const SecurePage = require('../pageobjects/secure.page');

describe.skip('My Data Driven Test', () => {
    it('should sign up with faker credentials', async () => {
        await SignupPage.open();
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email(undefined, undefined, 'gmail.com');
        const passWord = faker.internet.password();
        const confrimPassWord = faker.internet.password();
        await SignupPage.inputemail.scrollIntoView();
        await SignupPage.signup(firstName, lastName, "true", email, passWord, confrimPassWord);

        //await expect(SecurePage.welcomenote).toHaveTextContaining(undefined);
    });
});