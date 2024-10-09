const { By, Builder, Browser } = require("selenium-webdriver");
const assert = require("assert");

(async function formTest() {
	driver = await new Builder().forBrowser(Browser.FIREFOX).build();
	await driver.get("https://www.selenium.dev/selenium/web/web-form.html");
	await driver.quit();
})();
