const { defineConfig } = require("@playwright/test");
require("dotenv").config();

if (!process.env.BASE_URL) {
  throw new Error(
    "BASE_URL is not defined in .env, please reference .env-example file or readme file",
  );
}

module.exports = defineConfig({
  use: {
    baseURL: process.env.BASE_URL,
    viewport: { width: 1280, height: 720 },
    testDir: "./tests",
    testMatch: "**/*.spec.js",
  },
  projects: [
    {
      name: "headless",
      use: {
        headless: true,
      },
    },
    {
      name: "headed",
      use: {
        headless: false,
      },
    },
  ],
  reporter: [["list"], ["allure-playwright"]],
});
