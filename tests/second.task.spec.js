const { test, expect } = require("@playwright/test");
const selectors = require("./selectors/homepage.json");

test.describe("Second smoke test", () => {
  test("should load homepage and toggle a11y toolbar options", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(
      "Knowledge Management System - KMS Lighthouse",
    );

    await test.step("open a11y toolbar button", async () => {
      await page.click(selectors.ids["a11y-button-open"]);
      await expect(
        page.locator(selectors.ids["a11y-button-close"]),
      ).toBeVisible();
    });

    // this is good test to run with loop from our test-data that we have in the selectors and we are also provided with data-name from the kms team :)
    await test.step("iterate thorugh all data-names and toggle", async () => {
      const toggles = selectors["data-name"];
      for (const toggleName of Object.keys(toggles)) {
        const toggleSelector = toggles[toggleName];
        const toggleLabel = page.locator(toggleSelector);
        await expect(toggleLabel).toBeVisible();
        const checkbox = toggleLabel.locator("input[type=checkbox]");
        await expect(checkbox).toHaveCount(1);
        const initialState = await checkbox.isChecked();
        await toggleLabel.click();
        const newState = await checkbox.isChecked();
        expect(newState).not.toBe(initialState);
        await toggleLabel.click();
        const revertedState = await checkbox.isChecked();
        expect(revertedState).toBe(initialState);
      }
    });

    await test.step("close a11y toolbar button", async () => {
      await page.click(selectors.ids["a11y-button-close"]);
      await expect(
        page.locator(selectors.ids["a11y-button-close"]),
      ).toBeHidden();
    });
  });
});
