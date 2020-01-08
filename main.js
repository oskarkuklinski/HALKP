// class Calculator {
//   constructor(currentOpperationTextElement) {
//     this.currentOpperationTextElement = currentOpperationTextElement;
//     this.fullInputString = '';
//     this.clearAll();
//   }
//   delete() {
//     this.currentOperand = this.currentOperand.toString().slice(0, -1);
//   }
//   clearAll() {
//     this.currentOperand = "";
//     this.operation = undefined;
//   }
//   appendNumber(number) {
//     if (number === "." && this.currentOperand.includes(".")) return;

//     this.currentOperand = this.currentOperand.toString() + number.toString();
//   }
//   appendToFullDisplay(symbol) {
//     if (symbol !== '=') {
//       this.fullInputString += symbol.toString();
//       this.updateDisplay(this.fullInputString);
//     } else {
//       this.fullInputString = this.currentOperand;
//       this.updateDisplay(this.currentOperand);
//     }
//   }

//   compute() {
//     let computation;
//     prevOperation = parseFloat(prevOperation);
//     let currentOperation = parseFloat(this.currentOperand);
//     if (isNaN(prevOperation) || isNaN(currentOperation)) return;
//     switch (this.operation) {
//       case "+":
//         computation = prevOperation + currentOperation;
//         break;
//       case "-":
//         computation = prevOperation - currentOperation;
//         break;
//       case "*":
//         computation = prevOperation * currentOperation;
//         break;
//       case "/":
//         computation = prevOperation / currentOperation;
//         break;
//       case "^":
//         computation = Math.pow(prevOperation, currentOperation);
//         break;
//       case "PIERW":
//         computation = Math.pow(prevOperation, 1 / currentOperation);
//         break;
//       default:
//         return;
//     }
//     this.currentOperand = computation;
//     this.operation = undefined;
//   }
//   chooseOpearation(operation) {
//     if (this.currentOperand === "") return;
//     prevOperation = this.currentOperand;
//     this.operation = operation;
//     this.currentOperand = "";
//   }

//   updateDisplay(fullInput) {
//     this.currentOpperationTextElement.innerText = fullInput;
//   }
// }

let prevOperation;
const numberButtons = [...document.querySelectorAll("[data-number]")];
const operationButtons = [...document.querySelectorAll("[data-operation]")];
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const allClearButton = document.querySelector("[data-clearAll]");
const currentOperand = document.querySelector("[data-currentOperand]");

// const calculator = new Calculator(currentOperand);

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    // calculator.appendNumber(button.innerText);
    // calculator.updateDisplay();
    // calculator.appendToFullDisplay(button.innerText);
    calc.appendNumber(button.innerText);
  });
});
operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    // calculator.chooseOpearation(button.innerText);
    // calculator.appendToFullDisplay(button.innerText);
    calc.appendOperator(button.innerText);
  });
});
equalsButton.addEventListener("click", () => {
  // calculator.compute();
  // calculator.appendToFullDisplay('=');
  calc.calculate();
});
allClearButton.addEventListener("click", () => {
  // calculator.clearAll();
  // calculator.updateDisplay();
});
clearButton.addEventListener("click", () => {
  // calculator.delete();
  // calculator.updateDisplay();
});


// CALC alternative

class Calc {
  constructor() {
    this.currentNumber = '';
    this.fullInputString = '';
    this.calcResult = 0;
  }
  appendNumber(symbol) {
    this.inputNumber += symbol;
    this.fullInputString += symbol;
    currentOperand.textContent = this.fullInputString;
  }
  appendOperator(operator) {
    this.fullInputString += ` ${operator} `;
    currentOperand.textContent = this.fullInputString;
  }
  calculate() {
    let arr = this.fullInputString.split(' ');
    // calc pow
    if (arr.indexOf('^') > -1) {
      let num = arr[arr.indexOf('^') - 1];
      let a = arr[arr.indexOf('^') + 1];
      let res = Math.pow(num, a).toString();
      arr.splice(arr.indexOf('^') - 1, arr.indexOf('^') + 2, res);
    }
    // display result
    this.calcResult = eval(arr.join(' '));
    currentOperand.textContent = this.calcResult;
    this.fullInputString = currentOperand.textContent;
  }
}

const calc = new Calc();