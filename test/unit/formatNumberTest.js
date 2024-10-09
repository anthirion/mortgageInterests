import { expect } from "chai";
import { formatNumber } from "../../src/utils.js";

describe("formatNumber", () => {
	// Tests pour les nombres positifs
	it("should convert a German-formatted number to a JS number", () => {
		expect(formatNumber("32.000,54")).to.equal(32000.54);
	});

	it("should handle numbers without thousands separator", () => {
		expect(formatNumber("123,45")).to.equal(123.45);
	});

	it("should handle numbers with only thousands separator", () => {
		expect(formatNumber("1.000")).to.equal(1000);
	});

	it("should handle whole numbers without decimals", () => {
		expect(formatNumber("500")).to.equal(500);
	});

	it("should handle edge case with no input", () => {
		expect(formatNumber("")).to.be.NaN;
	});

	// Tests pour les nombres négatifs
	it("should convert a negative German-formatted number to a JS number", () => {
		expect(formatNumber("-1.234,56")).to.equal(-1234.56);
	});

	it("should handle negative numbers without thousands separator", () => {
		expect(formatNumber("-123,45")).to.equal(-123.45);
	});

	it("should handle negative whole numbers without decimals", () => {
		expect(formatNumber("-500")).to.equal(-500);
	});

	it("should handle negative numbers with only thousands separator", () => {
		expect(formatNumber("-10.000")).to.equal(-10000);
	});
});
