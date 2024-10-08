const form = document.querySelector("form");
const computeResult = document.querySelector(".computeResult");

document.querySelector(".computeButton").addEventListener("click", (event) => {
	event.preventDefault();
	event.stopPropagation();
	const formData = new FormData(form);
	const amount = formData.get("amount");
	const rate = formData.get("rate");
	const duration = formData.get("duration");
	if (amount != 0 && rate != 0 && duration != 0) {
		let interests = amount * (rate / 100) * duration;
		// Arrondir la valeur des intérêts à 2 chiffres après la virgule
		const roundedInterests = interests.toFixed(2);
		computeResult.innerText = roundedInterests;
	} else {
		computeResult.innerText = "0.00";
	}
});

document.querySelector(".clearButton").addEventListener("click", (event) => {
	event.preventDefault();
	event.stopPropagation();
	form.reset();
	computeResult.innerText = "0.00";
});

/*
Pour avoir un nombre décimal, tester avec les valeurs suivantes :
amount -> 1115
rate -> 3.02
duration -> 15
*/
