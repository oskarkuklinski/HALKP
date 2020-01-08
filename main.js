class Calculator {
  constructor(currentOpperationTextElement) {
    this.currentOpperationTextElement = currentOpperationTextElement;
    this.clearAll();
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
  clearAll() {
    this.currentOperand = "";
    this.operation = undefined;
  }
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;

    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  compute() {
    let computation;
    prevOperation = parseFloat(prevOperation);
    let currentOperation = parseFloat(this.currentOperand);
    if (isNaN(prevOperation) || isNaN(currentOperation)) return;
    switch (this.operation) {
      case "+":
        computation = prevOperation + currentOperation;
        break;
      case "-":
        computation = prevOperation - currentOperation;
        break;
      case "*":
        computation = prevOperation * currentOperation;
        break;
      case "/":
        computation = prevOperation / currentOperation;
        break;
      case "^":
        computation = Math.pow(prevOperation, currentOperation);
        break;
      case "PIERW":
        computation = Math.pow(prevOperation, 1 / currentOperation);
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
  }
  //Kiedy zmienie this.currentOperand w taki sposób this.currentOperant = `${prevOperation} ${operation} to wtedy działa, ale działania wychhodza przyjebane w pierwiastkach`
  chooseOpearation(operation) {
    if (this.currentOperand === "") return;
    prevOperation = this.currentOperand;
    this.operation = operation;
    this.currentOperand = "";
  }

  updateDisplay() {
    this.currentOpperationTextElement.innerText = this.currentOperand;
  }
}

let prevOperation;
const numberButtons = [...document.querySelectorAll("[data-number]")];
const operationButtons = [...document.querySelectorAll("[data-operation]")];
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const allClearButton = document.querySelector("[data-clearAll]");
const currentOperand = document.querySelector("[data-currentOperand]");

const calculator = new Calculator(currentOperand);

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOpearation(button.innerText);
    calculator.updateDisplay();
  });
});
equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
allClearButton.addEventListener("click", () => {
  calculator.clearAll();
  calculator.updateDisplay();
});
clearButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
