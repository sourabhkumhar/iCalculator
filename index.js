let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let onoff = document.getElementById('onoff');
let screenValue = "";

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        screenValue += buttonText;
        screen.value = screenValue;

        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screenValue = screenValue.slice(0, -1)
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'CE') {
            screenValue = screenValue.slice(0, -3)
            screen.value = screenValue;
        }
        else if(buttonText == 'OFF') {
            onoff.innerText = 'ON';

            screenValue = "";
            screen.value = screenValue;

            screen.style.display = "none";
        }
        else if(buttonText == 'ON') {
            onoff.innerText = 'OFF';
            
            screenValue = "";
            screen.value = screenValue;

            screen.style.display = "block";
        }

    })
}