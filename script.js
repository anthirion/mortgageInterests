const form = document.querySelector("form");
const computeResult = document.querySelector(".computeResult");

/**
 * Récupère une valeur écrite au format allemand (point comme séparateur
 * des milliers et virgules comme séparateur décimal) et le formate de telle
 * sorte que le JS puisse le traiter
 * @param {string} inputValue
 * @returns {Number}
 */
function formatNumber(inputValue) {
	let formatedValue = inputValue
		.replace(".", "") // Enlève les points
		.replace(",", "."); // Remplace la virgule par un point

	// Convertir en floattant
	formatedValue = parseFloat(formatedValue);
	return formatedValue;
}

document.querySelector(".computeButton").addEventListener("click", (event) => {
	event.preventDefault();
	event.stopPropagation();
	const formData = new FormData(form);
	let amount = formData.get("amount").toString();
	let rate = formData.get("rate").toString();
	let duration = formData.get("duration").toString();
	amount = formatNumber(amount);
	if (amount != 0 && rate != 0 && duration != 0) {
		let interests = amount * (rate / 100) * duration;
		const formattedInterests = interests.toLocaleString("de-DE", {
			style: "currency",
			currency: "EUR",
		});
		computeResult.innerText = formattedInterests;
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
