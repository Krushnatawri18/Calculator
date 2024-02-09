let string = "0"; // Set default value to zero
let decimalCount = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', e => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string = "0"; // Reset to zero when AC button is clicked
            document.querySelector('input').value = string;
            decimalCount = 0; // Reset decimal count when clearing input
        }

        else if (e.target.innerHTML == '√') {
            const number = parseFloat(string);
            if (!isNaN(number) && number >= 0) 
            {
                const sqrtValue = Math.sqrt(number);
                document.querySelector('input').value = sqrtValue;
                string = sqrtValue.toString();
            } 
            else 
            {
                document.querySelector('input').value = "Invalid input";
            }
        }

        else if (!isNaN(e.target.innerHTML) || e.target.innerHTML == '.') {
            if (e.target.innerHTML == '.') {
                if (decimalCount >= 1) {
                    alert("Invalid input: Too many decimal points");
                    return;
                } else {
                    decimalCount++;
                }
            } else {
                decimalCount = 0;
            }
            if (string === "0") {
                string = ""; // Remove leading zero if new input is entered
            }
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }

        else if ('+-*/'.includes(e.target.innerHTML)) {
            const lastChar = string.charAt(string.length - 1);
            if ('+-*/'.includes(lastChar)) {
                alert("Invalid input: Consecutive operators");
                return;
            }
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
});
