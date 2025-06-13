let display = document.getElementById("display");

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    if (!isFinite(result)) {
      throw new Error("Math Error");
    }
    display.value = result;
  } catch (err) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const allowedKeys = "0123456789+-*/.=EnterBackspace";
  if (allowedKeys.includes(event.key)) {
    if (event.key === "Enter") {
      calculate();
    } else if (event.key === "Backspace") {
      deleteLast();
    } else {
      appendValue(event.key);
    }
  }
});
