import { By, Builder, Browser } from "selenium-webdriver";
import assert from "assert";

(async function testFormCompletion() {
	let driver = await new Builder().forBrowser(Browser.CHROME).build();
	await driver.get("https://anthirion.github.io/mortgage_interests/");
	await driver.manage().setTimeouts({ implicit: 500 });
	let amountInput = await driver.findElement(By.name("amount"));
	await amountInput.sendKeys("Selenium");
	await driver.quit();
})();
