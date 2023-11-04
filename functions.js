const buttonClicked = document.querySelectorAll(".calcuBtnNumber");
const calcuScreen = document.getElementById("calcuScreen");

const clearBtn = document.getElementById("clear");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");

const equalBtn = document.getElementById("equal");

var firstNumberInput = false;
var secondNumberInput = false;

var calculated = false;

var additionEvent = false;
var subtractionEvent = false;
var multiplicationEvent = false;
var divisionEvent = false;

var firstOp = 0;
var secondOp = 0;

calcuScreen.value = 0;

Array.from(buttonClicked).forEach(btn => {
    btn.addEventListener("click", (event) => {
        if(calculated == true){
            calcuScreen.value = "0";
            calculated = false;
            calcuScreen.value = event.target.value;
        }
        else{
            if(calcuScreen.value == "0"){
                calcuScreen.value = event.target.value;
            }
            else{
                calcuScreen.value += event.target.value;
            }
        }
    })
});

clearBtn.addEventListener("click", () => {
    calcuScreen.value = "0";
});

plusBtn.addEventListener("click", (event) => {
    additionEvent = true;
    firstNumberInput = true;
    if(firstNumberInput == true && secondNumberInput == false){
        firstOp = parseFloat(calcuScreen.value);
        calcuScreen.value = "";
        secondNumberInput = true;
    }
    else if(firstNumberInput == true && secondNumberInput == true){
        secondOp = parseFloat(calcuScreen.value);
        calcuScreen.value = firstOp + secondOp;
        secondNumberInput = false;
    }
})

minusBtn.addEventListener("click", (event) => {
    subtractionEvent = true;
    firstNumberInput = true;
    if(firstNumberInput == true && secondNumberInput == false){
        firstOp = parseFloat(calcuScreen.value);
        calcuScreen.value = "";
        secondNumberInput = true;
    }
    else if(firstNumberInput == true && secondNumberInput == true){
        secondOp = parseFloat(calcuScreen.value);
        calcuScreen.value = firstOp - secondOp;
        secondNumberInput = false;
    }
})

divideBtn.addEventListener("click", (event) => {
    divisionEvent = true;
    firstNumberInput = true;
    if(firstNumberInput == true && secondNumberInput == false){
        firstOp = parseFloat(calcuScreen.value);
        calcuScreen.value = "";
        secondNumberInput = true;
    }
    else if(firstNumberInput == true && secondNumberInput == true){
        secondOp = parseFloat(calcuScreen.value);
        calcuScreen.value = firstOp / secondOp;
        secondNumberInput = false;
    }
})

multiplyBtn.addEventListener("click", (event) => {
    multiplicationEvent = true;
    firstNumberInput = true;
    if(firstNumberInput == true && secondNumberInput == false){
        firstOp = parseFloat(calcuScreen.value);
        calcuScreen.value = "";
        secondNumberInput = true;
    }
    else if(firstNumberInput == true && secondNumberInput == true){
        secondOp = parseFloat(calcuScreen.value);
        calcuScreen.value = firstOp / secondOp;
        secondNumberInput = false;
    }
})

equalBtn.addEventListener("click", () => {
    if(firstNumberInput == true && secondNumberInput == true){
        secondOp = parseFloat(calcuScreen.value);
        if(additionEvent == true){
            calcuScreen.value = firstOp + secondOp;
            calculated = true;
            firstNumberInput = false;
            secondNumberInput = false;
            additionEvent = false;
        }
        else if(subtractionEvent == true){
            calcuScreen.value = firstOp - secondOp;
            calculated = true;
            firstNumberInput = false;
            secondNumberInput = false;
            subtractionEvent = false;
        }
        else if(divisionEvent == true){
            calcuScreen.value = firstOp / secondOp;
            calculated = true;
            firstNumberInput = false;
            secondNumberInput = false;
            divisionEvent = false;
        }
        else if(multiplicationEvent == true) {
            calcuScreen.value = firstOp * secondOp;
            calculated = true;
            firstNumberInput = false;
            secondNumberInput = false;
            multiplicationEvent = false;
        }
    }
})