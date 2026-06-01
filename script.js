let value = 0;

const result = document.getElementById("result");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const message = document.getElementById("message");

function updateUI() {
    result.textContent = value;

    if (value > 0) {
        result.style.backgroundColor = "yellow";
    } else if (value < 0) {
        result.style.backgroundColor = "green";
    } else {
        result.style.backgroundColor = "red";
    }

    plusBtn.disabled = value >= 10;
    minusBtn.disabled = value <= -10;

    if (value === 10 || value === -10) {
        message.textContent = "Вы достигли экстремального значения";
    } else {
        message.textContent = "";
    }
    
}

plusBtn.addEventListener("click", () => {
    value++;
    updateUI();
});

minusBtn.addEventListener("click", () => {
    value--;
    updateUI();
});

updateUI();