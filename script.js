let string = "";
let decimalCount = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', e => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }

        else if (e.target.innerHTML == 'π') {
            string = "3.14159265359";
            document.querySelector('input').value = string;
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

        else if(!isNaN(e.target.innerHTML) || e.target.innerHTML == '.'){
            if(e.target.innerHTML == '.'){
                if(decimalCount >= 1){
                    alert("Invalid input : Many decimal points");
                    return;
                }
                else{
                    decimalCount++;
                }
            }
            else{
                decimalCount = 0;
            }
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }

        else {
            console.log(e.target);
            string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})


// Adding decimal feature into it
