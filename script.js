let result = document.getElementById("result");

function appendSymbol(symbol) {
  result.value += symbol;
}

function clearDisplay() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (err) {
    result.value = "Erro";
  }
}