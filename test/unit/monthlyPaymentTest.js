import { expect } from "chai"; // Import de l'assertion Chai
import { computeMonthlyPayment } from "../../src/api.js"; // Import de la fonction à tester

describe("computeMonthlyPayment", () => {
	it("should calculate the monthly payment for a typical loan", () => {
		expect(computeMonthlyPayment(200000, 3.5, 30)).to.be.closeTo(898.09, 0.01);
	});

	it("should calculate the monthly payment for a short-term loan", () => {
		expect(computeMonthlyPayment(50000, 5, 5)).to.be.closeTo(943.56, 0.01);
	});

	it("should return NaN for invalid input", () => {
		expect(computeMonthlyPayment("invalid", 5, 10)).to.be.NaN;
	});

	it("should calculate the monthly payment for edge case of zero amount", () => {
		expect(computeMonthlyPayment(0, 5, 10)).to.equal(0);
	});

	it("should calculate the monthly payment for a very high interest rate", () => {
		expect(computeMonthlyPayment(10000, 99.99, 1)).to.be.closeTo(1350, 0.2);
	});
});
