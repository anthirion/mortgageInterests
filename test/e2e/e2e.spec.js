import { By, Builder, Browser } from "selenium-webdriver";
import { formatNumber } from "../../src/utils.js";
import assert from "assert";

(async function testFormCompletion() {
	let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
	try {
		await driver.get("https://anthirion.github.io/mortgageInterests/");
		await driver.manage().setTimeouts({ implicit: 500 });
		// Compléter les champs du formulaire
		const amountInput = await driver.findElement(By.name("amount"));
		await amountInput.sendKeys("200.000");
		const rateInput = await driver.findElement(By.name("rate"));
		await rateInput.sendKeys("1.6");
		const durationInput = await driver.findElement(By.name("duration"));
		await durationInput.sendKeys("15");
		// Cliquer sur le bouton de calcul
		const computeButton = await driver.findElement(
			By.className("computeButton")
		);
		await computeButton.click();
		// Récupérer le résultat et vérifier qu'il est correct
		let result = await driver
			.findElement(By.className("computeResult"))
			.getText();
		result = parseFloat(formatNumber(result));
		assert.ok(result > 1250 && result < 1251);
		// Afficher un message de succès en vert
		console.log("\x1b[32m%s\x1b[0m", "Test passed !");
	} catch (err) {
		console.error("Test failed:", err);
	} finally {
		await driver.quit();
	}
})();
