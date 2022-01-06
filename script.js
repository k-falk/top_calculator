

let displayValue = "";
let currentValue = "";
let memoryValue = "";
let currentOperator = "";


function add(a,b){
    return a + b;
}


function subtract(a,b){
    return a-b;
}


function multiply(a,b){
    return a*b;
}


function divide(a,b){
    return a/b;
}

function operate(operator, a , b){
    switch(operator) {
        case "+":
          return add(a,b);
          break;
        case "-":
          return subtract(a,b);
          break;

        case "/":
          if(b == "0"){
            return a;
          }
          return divide(a,b);
          break;
        
        case "*":
          return multiply(a,b);
          break;
        
        default:
          return "NA";
      } 
}

function checkDivide(){
  if(currentOperator == "/" && displayValue == "0")
    return true;
}

function updateDisplay(){
  document.querySelector(".display-text").textContent = displayValue;
}


function clearDisplay() {
  displayValue = "";
}

function calculate(){

  if(checkDivide())
    document.querySelector(".display-text").textContent = "Nice Math mate";
  else{
    displayValue = operate(currentOperator, Number(memoryValue), Number(displayValue));
    if(displayValue.toString().includes(".")){
      displayValue = Number(displayValue).toFixed(4);
    }
    updateDisplay();
    currentOperator = "";
  }
}


// EVENT LISTENER LOGIC 

// NUMBER Buttons
const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {

      if(currentOperator == ""){
        clearDisplay();
      }

      displayValue += button.textContent;
      updateDisplay();      
    });
  });

//CLEAR Button
const clearButton = document.querySelector("#clear-button")
clearButton.addEventListener('click', () => {
    clearDisplay();
    memoryValue = "";
    currentOperator = "";
    document.querySelector(".display-text").textContent = "0";

})

//OPERATOR Buttons

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {

      if(currentOperator != "")
        calculate();
      currentOperator = button.textContent;
      memoryValue = displayValue;
      clearDisplay();
    

    
  })


});

//EQUAL Button

const equalButton = document.querySelector("#equal-button")
equalButton.addEventListener('click', () => {
    if(displayValue == "" || currentOperator == ""){
      document.querySelector(".display-text").textContent = "Error!";
    }else{
    calculate();
    }
  });


//CHANGE SIGN button

const changeSignButton = document.querySelector("#change-sign-button")
changeSignButton.addEventListener('click', () => {
  if(displayValue.toString()[0] == "-"){
    displayValue = displayValue.toString().substring(1);
    updateDisplay();
    
  }else{
    displayValue = "-" + displayValue;
    updateDisplay();
  }
});




