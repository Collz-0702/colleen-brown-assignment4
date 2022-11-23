# Under the test folder, the various files for page objects for the different test cases can be seen under the folder 'page objects'

# Under the test folder, the test files for each objective can be found under the specs folder

# Ensure wen test are being run a "const debug{}" is not 'defined' at the top of any page objects or test case file

# Ensure webdriverio is installed

<!-- For sign up test -->
- We called the function 'signup' from the signUpPage page objects
-We then used a faker email to automate test as specifying an email would result in an error as the email would be considered already used on the next test run. Thus a faker email was used to elimate this
-We asserted that the sign up was successful by using the success message and URL

<!-- Unhappy Path -->

-The unhappy path was created by using the sign up function and using a password of <8 characters
-The user should not be able to sign up with a password less than 8 characters
-This was asserted by using the error message that resulted from attempting to do so



<!-- For adding an item to the cart: -->
The test was automated to navigate to the webpage(line 5)
Afterwhich, the function 'addItemToCart' was called which allowed the various steps written in the page object-"cart.page.js" to be done allowing for the a Purple Radiant Tee object to be added to the cart. This was asserted using the success message

<!-- For Purchasing an item to the cart: -->
-The test was automated by recalling the sign in page function -->
-Then recalling the add to cart function
-However, before we could recall the add to cart function, a particular button had to to be added or click before, which can be seen on line 16
-Because we are signed in, we cannot just naviagte to the products page as we did in the add to cart, -Therefore, we are clicking the women's section to navigate to the women's products to add the item to the cart  (line 17)
-After the item is added, we will then navigate to the cart button, after it is clickable(it is clickable when an item is added to the cart), then click on the proceed to checkout.
-The purchaseProducts function was called from the page objects and the form filled out and the item purchased
-We then asserted that the item was purchased using the success message and the url

<!-- For verifying a purchase -->
-Inorder to verify a purchase, one must be either signed in to their account or sign up then order
-For this test case, we will be signing in, then adding the item to the cart, then purchasing the item then verifying it was purchased
-After calling the functions named above, we will need to the verify the item was purchased
-This can be done by navigating to the order history by clicking the order number then asserting the item ordered is seen in the order history


<!-- For Data driven -->
-We recall the sign up function for our Data Driven test cases
-For our first test case we created multiple sign ups using faker data.
-For the second test case, we attempted to sign up using an already registered email
-Both test were asserted using success or error messages

<!-- For CrossBrowswer -->
This can be done by naviagting to the wdio.conf.js
Changine "chrome" on line 59 to "firefox"

<!-- Allure Results-->
-Run the following install:
npm install @wdio/allure-reporter --save-dev
npm install -g allure-commandline --save-dev

-Then run the following command after to view results:
allure serve allure-results && allure open
