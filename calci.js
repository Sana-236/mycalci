
	buttons = document.querySelectorAll('button');
	let screen = document.getElementById('screen');
	screen.readOnly = true;
	let inputs = '';

	for (item of buttons) {
		item.addEventListener('click', (event) => {
			inputValue = event.target.innerText;
			switch (inputValue) {
				case 'C':
					inputs = '';
					screen.value = inputs;
					break;
				case '⌫':
					inputs = inputs.slice(0, -1);
					screen.value = inputs;
					break;
				case 'π':
					inputs += '*3.1416';
					screen.value = inputs;
					break;
				case '%':
					inputs += '%';
					screen.value = inputs;
					break;
				case '^':
					inputs += '**';
					screen.value = inputs;
					break;
				case '÷':
					inputs += '/';
					screen.value = inputs;
					break;
				case '×':
					inputs += '*';
					screen.value = inputs;
					break;
				case '=':
					screen.value = eval(inputs);
					inputs = screen.value;
					break;
				default:
					inputs += inputValue;
					screen.value = inputs;
					break;
			}
		})
	}

	window.onerror = function () {
		inputs = '';
		screen.value = 'INVALID OPERATION';
	}
