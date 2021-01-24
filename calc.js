const calcResult = document.getElementById('calc-result');
const buttonConsole = document.getElementById('buttons');
const buttons = buttonConsole.querySelectorAll('.buttons input');
const clearButtons = document.querySelectorAll('.clear input');

const onButtonClick = (e) => {
	if (e.target.value === '=') {
		const divide = '÷';
		const multiple = 'X';
		let result = calcResult.value.replace(divide, '/').replace(multiple, '*');

		try {
			if (isFinite(eval(result))) {
				calcResult.value = eval(result);
			} else {
				calcResult.value = 'Ошибка';
				buttonConsole.classList.add('close');
			}
		} catch (err) {
			calcResult.value = 'Ошибка';
			buttonConsole.classList.add('close');
			console.log('Было введено неверное значение. Обнулите калькулятор');
		}
	} else if (calcResult.innerHTML === '0') {
		calcResult.value = e.target.value;
	} else {
		calcResult.value += e.target.value;
	}
};

const onClearClick = (e) => {
	if (e.target.value === 'ce' || (calcResult.value === 'Ошибка' && e.target.value === 'c')){
		calcResult.value = '';
		buttonConsole.classList.remove('close');
	} else {
		calcResult.value = calcResult.value.slice(0, -1);
	}
};

buttons.forEach((button) => {
	button.addEventListener('click', onButtonClick);
});

clearButtons.forEach((clear) => {
	clear.addEventListener('click', onClearClick);
});
