let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let inputValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        switch(buttonText) {
            case 'C':
                inputValue = "";
                screen.value = inputValue;
                break;
            case 'X':
                buttonText = '*';
                inputValue += buttonText;
                screen.value = inputValue;
                break;
            case '=':
                screen.value = eval(inputValue);
                break;
            default:
                inputValue += buttonText;
                screen.value = inputValue;
                break;
        }

    })
}

