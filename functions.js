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

var decimalPoint = false;

var firstMultiplier = 1;
var secondMultiplier = 1;

var firstOp = 0;
var secondOp = 0;

calcuScreen.value = 0;

Array.from(buttonClicked).forEach(btn => {
    btn.addEventListener("click", (event) => {
        var valueClicked = event.target.value;
        if(calculated == true){
            calcuScreen.value = "0";
            calculated = false;
            calcuScreen.value = valueClicked;
        }
        else{
            if(calcuScreen.value == "0"){
                if(valueClicked == "."){
                    if(decimalPoint == false){
                        calcuScreen.value += valueClicked;
                        decimalPoint = true;
                    }
                }
                else{
                    calcuScreen.value = valueClicked;
                }
            }
            else{
                if(valueClicked == "."){
                    if(decimalPoint == false){
                        calcuScreen.value += valueClicked;
                        decimalPoint = true;
                    }
                }
                else{
                    calcuScreen.value += valueClicked;
                }
            }
        }
    })
});

clearBtn.addEventListener("click", () => {
    calcuScreen.value = "0";
    decimalPoint = false;
});

plusBtn.addEventListener("click", (event) => {
    firstMultiplier = 1;
    secondMultiplier = 1;
    additionEvent = true;
    firstNumberInput = true;
    if(firstNumberInput == true && secondNumberInput == false){
        if(decimalPoint == true){
            firstMultiplier = numberTraversal(calcuScreen.value);
            firstOp = parseFloat(calcuScreen.value);
            calcuScreen.value = "0";
            decimalPoint = false;
            secondNumberInput = true;
        }
        else{
            firstOp = parseFloat(calcuScreen.value);
            calcuScreen.value = "0";
            decimalPoint = false;
            secondNumberInput = true;
        }
    }
    else if(firstNumberInput == true && secondNumberInput == true){
        if(decimalPoint == true){
            secondMultiplier = numberTraversal(calcuScreen.value);
            secondOp = parseFloat(calcuScreen.value);
            if(firstMultiplier > secondMultiplier){
                secondMultiplier = firstMultiplier;
                firstOp *= firstMultiplier;
                secondOp *= firstMultiplier;
                var calculation = firstOp + secondOp;
                calculation /= firstMultiplier;
                calcuScreen.value = calculation;
                secondNumberInput = false;
            }
            else if(secondMultiplier > firstMultiplier){
                firstMultiplier = secondMultiplier;
                firstOp *= firstMultiplier;
                secondOp *= firstMultiplier;
                var calculation = firstOp + secondOp;
                calculation /= firstMultiplier;
                calcuScreen.value = calculation;
                secondNumberInput = false;
            }
            else{
                firstOp *= firstMultiplier;
                secondOp *= firstMultiplier;
                var calculation = firstOp + secondOp;
                calculation /= firstMultiplier;
                calcuScreen.value = calculation;
                secondNumberInput = false;
            }
        }
        else{
            secondOp = parseFloat(calcuScreen.value);
            if(firstMultiplier > secondMultiplier){
                secondMultiplier = firstMultiplier;
                firstOp *= firstMultiplier;
                secondOp *= firstMultiplier;
                var calculation = firstOp + secondOp;
                calculation /= firstMultiplier;
                calcuScreen.value = calculation;
                secondNumberInput = false;
            }
            else if(secondMultiplier > firstMultiplier){
                firstMultiplier = secondMultiplier;
                firstOp *= firstMultiplier;
                secondOp *= firstMultiplier;
                var calculation = firstOp + secondOp;
                calculation /= firstMultiplier;
                calcuScreen.value = calculation;
                secondNumberInput = false;
            }
            else{
                firstOp *= firstMultiplier;
                secondOp *= firstMultiplier;
                var calculation = firstOp + secondOp;
                calculation /= firstMultiplier;
                calcuScreen.value = calculation;
                secondNumberInput = false;
            }
        }
    }
})

minusBtn.addEventListener("click", (event) => {
    subtractionEvent = true;
    firstNumberInput = true;
    if(firstNumberInput == true && secondNumberInput == false){
        firstOp = parseFloat(calcuScreen.value);
        calcuScreen.value = "0";
        decimalPoint = false;
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
        calcuScreen.value = "0";
        decimalPoint = false;
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
        decimalPoint = false;
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
            decimalPoint = false;
        }
        else if(subtractionEvent == true){
            calcuScreen.value = firstOp - secondOp;
            calculated = true;
            firstNumberInput = false;
            secondNumberInput = false;
            subtractionEvent = false;
            decimalPoint = false;
        }
        else if(divisionEvent == true){
            calcuScreen.value = firstOp / secondOp;
            calculated = true;
            firstNumberInput = false;
            secondNumberInput = false;
            divisionEvent = false;
            decimalPoint = false;
        }
        else if(multiplicationEvent == true) {
            calcuScreen.value = firstOp * secondOp;
            calculated = true;
            firstNumberInput = false;
            secondNumberInput = false;
            multiplicationEvent = false;
            decimalPoint = false;
        }
    }
})

const numberTraversal = (numberValue) => {
    for(let i = 0; i < numberValue.length; i++) {
        if(numberValue[i] == "."){
            var multiplier = "1";
            var multiplierNumber = 0;
            var lengthOfNumber = numberValue.length - (i+1);
            for(let i = 0; i < lengthOfNumber; i++){
                multiplier += "0";
                multiplierNumber = parseInt(multiplier);
            }
            numberValue *= multiplierNumber;
            alert(numberValue);
            // var wholeNumbers = (numberValue).slice(0, i);
            // var decimalNumbers = (numberValue).slice(i+1, numberValue.length);
            // alert("Whole numbers: " + wholeNumbers + " Decimal Numbers: " + decimalNumbers);
        }
    }
    console.log(multiplier);
    return multiplier;
}