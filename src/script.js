import { formatNumber, computeMonthlyPayment } from "./utils.js";

const form = document.querySelector("form");
const computeResult = document.querySelector(".computeResult");

document.querySelector(".computeButton").addEventListener("click", (event) => {
	event.preventDefault();
	event.stopPropagation();
	const formData = new FormData(form);
	let amount = formData.get("amount").toString();
	let rate = formData.get("rate").toString();
	let duration = formData.get("duration").toString();
	amount = formatNumber(amount);
	if (amount != 0 && rate != 0 && duration != 0) {
		let monthlyPayment = computeMonthlyPayment(amount, rate, duration);
		const formattedPayment = monthlyPayment.toLocaleString("de-DE", {
			style: "currency",
			currency: "EUR",
		});
		computeResult.innerText = formattedPayment;
	} else {
		computeResult.innerText = "0,00 €";
	}
});

document.querySelector(".clearButton").addEventListener("click", (event) => {
	event.preventDefault();
	event.stopPropagation();
	form.reset();
	computeResult.innerText = "0,00 €";
});

/*
Pour avoir un résultat décimal, tester avec les valeurs suivantes :
amount -> 1115
rate -> 3.02
duration -> 15
*/
