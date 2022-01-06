

let displayValue = "";


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
          return multiply(a,b);
          break;
        
        case "*":
          return divide(a,b);
          break;
        
        default:
          return "NA";
      } 
}


// EVENT LISTENER LOGIC 

const numberButtons = document.querySelectorAll(".number-button");


numberButtons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      displayValue += button.textContent;
      updateDisplay();      
    });
  });


const clearButton = document.querySelector("#clear-button")

clearButton.addEventListener('click', () => {
    displayValue = "";
    document.querySelector(".display-text").textContent = 0;

})

function updateDisplay(){
  document.querySelector(".display-text").textContent = displayValue;
}