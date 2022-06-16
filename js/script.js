const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');
const result = document.querySelector('#result-box');
const btnPlus = document.querySelector('#btn-plus');
const btnTimes = document.querySelector('#btn-times');
const btnClear = document.querySelector('#btn-clear');
const inputError = document.querySelector('.input-error');

btnPlus.addEventListener('click', handleBtnPlusClick);
btnTimes.addEventListener('click', handleBtnTimesClick);
btnClear.addEventListener('click', handleBtnClearClick);
inputError.classList.remove('input-error');

input1.addEventListener('change', (event) => {
	if (isNaN(Number(input1.value))) {
		input1.classList.add('input-error');
	} else {
		input1.classList.remove('input-error');
	}
});

input2.addEventListener('change', (event) => {
	if (isNaN(Number(input2.value))) {
		input2.classList.add('input-error');
	} else {
		input2.classList.remove('input-error');
	}
});

function handleBtnPlusClick(event) {
	event.preventDefault();
	const plus = Number(input1.value) + Number(input2.value);
	result.innerHTML = plus;
	const resultPlus = result.innerHTML;

	if (isNaN(resultPlus)) {
		result.innerHTML = 0;
	}
}

function handleBtnTimesClick(event) {
	event.preventDefault();
	const times = Number(input1.value) * Number(input2.value);
	result.innerHTML = times;
	const resultTimes = result.innerHTML;
	if (isNaN(resultTimes)) {
		result.innerHTML = 0;
	}
}

function handleBtnClearClick(event) {
	input1.value = ' ';
	input2.value = ' ';
	result.innerHTML = 0;
	input1.classList.remove('input-error');
	input2.classList.remove('input-error');
}
