"use strict";
const container = document.querySelector(".container");
const inputPret = document.querySelector(".input--pret");
const inputNrNopti = document.querySelector(".input--nr--nopti");
const newDivLabel = document.querySelector(".newLabel");
const newDivMassage = document.querySelector(".newMassage");
const btnCalc = document.querySelector("button");

// Functions ////////////////
const inputCreate = function (nr) {
	for (let i = nr; i > 0; i--) {
		const html = `<label for="">
    <br />
    Nr. pers. noaptea ${i}:
    <input
        class="input--nr--persoane"
        type="number"
        placeholder="Scrie nr. persoane"
    />
    </label>`;
		newDivLabel.insertAdjacentHTML("afterend", html);
	}
};
inputNrNopti.onchange = function () {
	inputCreate(inputNrNopti.value);
};
btnCalc.addEventListener("click", function () {
	const inputs = document.querySelectorAll(".input--nr--persoane");
	const arr = [];
	inputs.forEach((elem) => arr.push(elem.value));
	const rezultatPeNoapte =
		inputPret.value / arr.reduce((acc, elem) => acc + Number(elem), 0);
	const rezultatT =
		(inputPret.value / arr.reduce((acc, elem) => acc + Number(elem), 0)) *
		inputNrNopti.value;
	const html = `
    <div class="raspuns">Pret de persoana pe noapte: ${Math.round(
			rezultatPeNoapte
		)} lei</div>
    <div class="raspuns">Pret de persoana pe intregul sejur: ${Math.round(
			rezultatT
		)} lei</div>`;
	newDivMassage.insertAdjacentHTML("afterend", html);
});
