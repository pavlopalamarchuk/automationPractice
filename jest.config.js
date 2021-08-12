module.exports = {
  globalSetup: './setup.js',
  globalTeardown: './teardown.js',
  testEnvironment: './puppeteer_environment.js',
  setupFilesAfterEnv: ["jest-expect-message"],
 // setupFilesAfterEnv: ['jest-allure/dist/setup'],
  //reporters: ["default", "jest-allure"]
}
