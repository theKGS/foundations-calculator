const buttons = document.querySelectorAll(".btn");
const textfield = document.querySelector("textarea");
const result = document.querySelector(".result");

let value1 = 0;
let value2 = 0;
let operator = '+';
let valstring = "";
let seendot = false;

for (btn of buttons) {
    console.log(btn);
    btn.addEventListener('click', (e) => {
        let str = e.target.textContent;
        if (isOperator(str)) {
            if (valstring.length > 0) {
                value2 = parseInt(valstring);
                valstring = "";
            }

            textfield.textContent = str;

            applyOperator();
            operator = str;
            return;
        }

        if (isEquals(str)) {
            if (valstring.length > 0) {
                value2 = parseInt(valstring);
                valstring = "";
            }

            applyOperator();
            return;
        }

        if (isDelete(str)) {
            valstring = valstring.slice(0, -1);
            textfield.textContent = valstring;
        }

        // Input is a clear command
        if (isClear(str)) {
            valstring = "";
            operator = '+'
            value1 = 0;
            value2 = 0;
            textfield.textContent = "";
        }

        // Input is a number
        if (!(isEquals(str) || isOperator(str) || isDot(str) || isClear(str) || isDelete(str))) {
            valstring += str;
            textfield.textContent = valstring;
            return;
        }
    });
}

function isEquals(str) {
    return (str == '=');
}

function isOperator(str) {
    return (str == '+') || (str == '-') || (str == '*') || (str == '/');
}

function isDot(str) {
    return (str == '.');
}

function isClear(str) {
    return (str == 'cc');
}

function isDelete(str) {
    return (str == 'c');
}

function applyOperator() {
    value1 = parseInt(value1);

    if (operator == '+') {
        value1 += value2;
    }

    if (operator == '-') {
        value1 -= value2;
    }

    if (operator == '*') {
        value1 *= value2;
    }

    textfield.textContent = value1;

    if (operator == '/') {
        if (value2 != 0) {
            value1 /= value2;
            textfield.textContent = value1;
        } else {
            textfield.textContent = "Division by zero";
        }
    }
}