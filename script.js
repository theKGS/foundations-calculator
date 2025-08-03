const buttons = document.querySelectorAll(".btn");
const textfield = document.querySelector("textarea");
const result = document.querySelector(".result");

for (btn of buttons){
    console.log(btn);
    btn.addEventListener('click', (e) => {
        console.log("button pressed!");
        let txt = e.target.textContent;
        if (txt == 'c') {
            textfield.textContent = textfield.textContent.slice(0, -1);
            return;
        }

        if (txt == 'cc') {
            textfield.textContent = '';
            return;
        }

        if (txt == '=') {
            result.textContent = math.evaluate(textfield.textContent);
            return;
        }

        textfield.textContent += txt;
    
    });
}