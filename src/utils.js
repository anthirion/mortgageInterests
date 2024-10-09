/**
 * Calcule le montant des mensualités selon la formule suivante :
 * m = (amount * rate / 12) / (1 - (1 + rate / 12) ^ (-12*duration))
 * Source : https://selectra.info/finance/credit-immo/calcul
 * @param {Number} amount
 * @param {Number} rate
 * @param {Number} duration
 * @returns {Number}
 */
export function computeMonthlyPayment(amount, rate, duration) {
	const tmp = rate / (12 * 100);
	const numerator = amount * tmp;
	const denominator = 1 - Math.pow(1 + tmp, -12 * duration);
	return numerator / denominator;
}

/**
 * Récupère une valeur écrite au format allemand (point comme séparateur
 * des milliers et virgules comme séparateur décimal) et le formate de telle
 * sorte que le JS puisse le traiter
 * @param {string} inputValue
 * @returns {Number}
 */
export function formatNumber(inputValue) {
	let formatedValue = inputValue
		.replace(".", "") // Enlève les points
		.replace(",", "."); // Remplace la virgule par un point

	// Convertir en floattant
	formatedValue = parseFloat(formatedValue);
	return formatedValue;
}
