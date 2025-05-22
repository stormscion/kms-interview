const { test, expect } = require("@playwright/test");
const { faker } = require("@faker-js/faker"); // added to not have to create more test data
const selectors = require("./selectors/homepage.json");
const selectorsDemoForm = require("./selectors/book-a-demo.json");
const routes = require("./routes/internal-routes.json");

test.describe("first smoke test ", () => {
  test("should load the homepage", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(
      "Knowledge Management System - KMS Lighthouse",
    ); // correctly we would have data file load here and not hardcode but for test this is enough
  });

  test("should find book demo button and navigate", async ({
    page,
  }, testInfo) => {
    const baseURL = testInfo.project.use.baseURL;

    await test.step("should navigate homepage and click 'Book a Demo' link", async () => {
      await page.goto("/");
      const link = page
        .getByRole("link", {
          name: selectors.text.bookDemoLink,
          exact: true,
        })
        .first();

      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute(
        "href",
        `${baseURL}${routes["book-a-demo"]}`,
      );

      await link.click();

      await expect(page).toHaveURL(`${baseURL}${routes["book-a-demo"]}`, {
        message: "failed to navigate",
      });
    });

    /* we can do this one with for each loop to make it simpler to maintain codewise
    and more elegant, but more difficult to read for none-technical person, usual
    tradeoff in automated tests. I will leave it here like this as it looks better
    */
    await test.step("should have form fields visible and interactable", async () => {
      await page
        .locator(selectorsDemoForm.formFields.firstNameInput)
        .fill(faker.name.firstName());
      await page
        .locator(selectorsDemoForm.formFields.lastname)
        .fill(faker.name.lastName());
      await page
        .locator(selectorsDemoForm.formFields.email)
        .fill(faker.internet.email());
      await page
        .locator(selectorsDemoForm.formFields.phone)
        .fill(faker.phone.number("+1-###-###-####"));
      await page
        .locator(selectorsDemoForm.formFields.jobtitle)
        .fill(faker.name.jobTitle());

      const countrySelect = page.locator(selectorsDemoForm.formFields.country);
      await expect(countrySelect).toBeVisible();
      await expect(countrySelect).toBeEnabled();
      await countrySelect.selectOption({ index: 1 });
    });
  });
});
