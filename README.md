# sft-evaluation-blinking-lights

## Instructions:
.Navigate to /automation folder with cd command
.Use command "npx playwright test" in terminal to execute all tests.
.Press on the "Testing" button on the left and navigate to a specific test or a test group that you want to execute if you do not want to execute everything

## Value of tests:
1. Login test: important to make sure that users can login to the system with correct data
2. Navigation tests: to ensure that users can go into different pages of the website in order to interact with them.

"Užsakymų istorija user navigation successful" and "Užsakymų istorija admin navigation successful" do not pass because the button is named in correctly - it's a bug. should be "Užsakymų Istorija", not "Užsakymų istorija" (capital 'i')