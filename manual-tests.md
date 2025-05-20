# Manual test number 1 and 2 in BDD syntax

@smoke
**Feature:** Smoke Test for KMSLH Website

**Background:**
Given the user has a web browser open
And the browser is navigated to "https://kmslh.com/"

---

**Scenario:** Verify the homepage loads successfully
When the user accesses the homepage
Then the page title should contain "KMS Lighthouse"
And the page should load without errors
And the main navigation bar should be visible
And the footer should be visible

---

**Scenario:** Verify navigation to Learn More page from Call Center section with slug
When the user scrolls to the call center section  
 And the user clicks the "Learn More" button in the call center section
Then the user should be navigated to the Learn More page
And the Learn More page should load without errors
And the page content should include information about call center solutions
And the page URL should match the expected slug:

| Section     | Slug                 |
| ----------- | -------------------- |
| Call Center | solution-call-center |

# Manual test number 2 in test step syntax

Test case Id: tc_smoke_kmslh_001_apply_for_possition
Test case title: verify contact form for call center
Precondition: browser open, internect connection, kmslh.com is up

## Test Steps and Expected Results

| Step # | Test Step Description                        | Expected Result                           |
| ------ | -------------------------------------------- | ----------------------------------------- |
| 1      | open browser                                 | Browser opens sucessfully.                |
| 2      | naviagte to https://kmslh.com/               | Homepage loads with no erros.             |
| 3      | scroll to call center section                | Call center section visble.               |
| 4      | click "Learn More" button                    | Naviagtes to Learn More page.             |
| 5      | check Learn More page loads                  | Page loads sucessfully, content visble.   |
| 6      | scroll down to contact form                  | Form visble with all fields.              |
| 7      | enter "Srdja" in First Name                  | Field accepts "Srdja" no erros.           |
| 8      | enter "Dzogaz" in Last Name                  | Field accepts "Dzogaz" no erros.          |
| 9      | enter "srdjadzo@gmail.com" in Email          | Field accepts email no erros.             |
| 10     | enter "[Redacted]" in Phone Number           | Field accepts phone no erros.             |
| 11     | enter "Senior Automation QA" in Job Title    | Field accepts job title no erros.         |
| 12     | enter "Serbia" in Country                    | Field accepts country no erros.           |
| 13     | enter "Europe" in Region                     | Field accepts region no erros.            |
| 14     | enter "I am doing automated test" in Message | Field accepts message no erros.           |
| 15     | check form accepts all data                  | All fields keep values, no erro messages. |

## Test Data

| Field        | Value                     |
| ------------ | ------------------------- |
| First Name   | Srdja                     |
| Last Name    | Dzogaz                    |
| Email        | srdjadzo@gmail.com        |
| Phone Number | [Redacted]                |
| Job Title    | Senior Automation QA      |
| Country      | Serbia                    |
| Region       | Europe                    |
| Message      | I am doing automated test |
