const calcResult = document.getElementById('calc-result');

const onButtonClick = (e) => {
	if (e.target.value === '=') {
		const divide = '÷';
		const multiple = 'X';
		let result = calcResult.value.replace(divide, '/').replace(multiple, '*');
		
		calcResult.value = eval(result);
	} else if (calcResult.innerHTML === '0') {
		calcResult.value = e.target.value;
	} else {
		calcResult.value += e.target.value;
	}
};

document.querySelectorAll('.buttons input').forEach((button) => {
	button.addEventListener('click', onButtonClick);
});
