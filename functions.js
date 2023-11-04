const buttonClicked = document.querySelectorAll(".calcuBtnNumber");
const calcuScreen = document.getElementById("calcuScreen");

const clearBtn = document.getElementById("clear");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");

const binaryBtn = document.getElementById("binaryConverter");

const equalBtn = document.getElementById("equal");

const memPlusBtn = document.getElementById("memoryPlus");
const memMinusBtn = document.getElementById("memoryMinus");
const memClearBtn = document.getElementById("memoryClear");

var firstNumberInput = false;
var secondNumberInput = false;

var calculated = false;

var decimalNumber = "0";

var additionEvent = false;
var subtractionEvent = false;
var multiplicationEvent = false;
var divisionEvent = false;

var decimalPoint = false;

var calcuMemory = "0";

var binaryMode = false;
var decimalMode = true;

var firstMultiplier = 1;
var secondMultiplier = 1;

var firstOp = 0;
var secondOp = 0;

calcuScreen.value = 0;

Array.from(buttonClicked).forEach(btn => {
    btn.addEventListener("click", (event) => {
        if((calcuScreen.value).length < 8){
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
        }
    })
});

binaryBtn.addEventListener("click", () => {
    console.log("Binary: " + binaryMode + " Decimal: " + decimalMode);
    console.log(decimalNumber);
    if(binaryMode == false && decimalMode == true){
        decimalNumber = calcuScreen.value;
        var binaryNumber = parseFloat(decimalNumber);
        var result = binaryNumber.toString(2);
        calcuScreen.value = limitCutter(result);
        binaryMode = true;
        decimalMode = false;
        console.log("Binary: " + binaryMode + " Decimal: " + decimalMode);
    }
    else if(binaryMode == true && decimalMode == false){
        console.log(decimalNumber);
        calcuScreen.value = decimalNumber;
        binaryMode = false;
        decimalMode = true;
        console.log("Binary: " + binaryMode + " Decimal: " + decimalMode);
    }
})

memPlusBtn.addEventListener("click", () => {
    if(calcuMemory == "0") {
        if(calcuScreen.value !== "0"){
            calcuMemory = calcuScreen.value
            alert("Memory captured: " + calcuMemory);
            calcuScreen.value = "0";
            decimalPoint = false;
            firstNumberInput = true;
        }
        else{}     
    }
    else if(calcuScreen.value !== null){
        if(decimalPoint == true){
            var calcuMemMultiplier = numberTraversal(calcuMemory);
            var calcuScreenMultiplier = numberTraversal(calcuScreen.value);
            if(calcuMemMultiplier == undefined){
                calcuMemMultiplier = "1";
            }
            if(calcuScreenMultiplier == undefined){
                calcuScreenMultiplier = "1";
            }
            if(calcuMemMultiplier > calcuScreenMultiplier){
                var calcuMemInt = (parseFloat(calcuMemory)) * parseInt(calcuMemMultiplier);
                var calcuScreenInt = (parseFloat(calcuScreen.value)) * parseInt(calcuMemMultiplier);
                var calculation = calcuScreenInt + calcuMemInt;
                calculation /= parseInt(calcuMemMultiplier);
                calcuScreen.value = calculation;
                calculated = true;
                decimalPoint = false;
            }
            else if(calcuMemMultiplier < calcuScreenMultiplier){
                var calcuMemInt = (parseFloat(calcuMemory)) * parseInt(calcuScreenMultiplier);
                var calcuScreenInt = (parseFloat(calcuScreen.value)) * parseInt(calcuScreenMultiplier);
                var calculation = calcuScreenInt + calcuMemInt;
                calculation /= parseInt(calcuScreenMultiplier);
                calcuScreen.value = calculation;
                calculated = true;
                decimalPoint = false;
            }
            else{
                var calcuMemInt = (parseFloat(calcuMemory)) * parseInt(calcuMemMultiplier);
                var calcuScreenInt = (parseFloat(calcuScreen.value)) * parseInt(calcuMemMultiplier);
                var calculation = calcuScreenInt + calcuMemInt;
                calculation /= parseInt(calcuMemMultiplier);
                calcuScreen.value = calculation;
                calculated = true;
                decimalPoint = false;
            }    
        }
        else{
            console.log(calcuScreenMultiplier);
            var calcuMemMultiplier = numberTraversal(calcuMemory);
            var calcuScreenMultiplier = numberTraversal(calcuScreen.value);
            if(calcuMemMultiplier == undefined){
                calcuMemMultiplier = "1";
            }
            if(calcuScreenMultiplier == undefined){
                calcuScreenMultiplier = "1";
            }
            var calcuMemInt = (parseFloat(calcuMemory)) * parseInt(calcuMemMultiplier);
            var calcuScreenInt = (parseFloat(calcuScreen.value)) * parseInt(calcuMemMultiplier);
            var calculation = calcuScreenInt + calcuMemInt;
            calculation /= parseInt(calcuMemMultiplier);
            calcuScreen.value = calculation;
            calculated = true;
            decimalPoint = false;
        }
    }
});

memMinusBtn.addEventListener("click", () => {
    if(calcuScreen.value !== null){
        if(decimalPoint == true){
            var calcuMemMultiplier = numberTraversal(calcuMemory);
            var calcuScreenMultiplier = numberTraversal(calcuScreen.value);
            if(calcuMemMultiplier == undefined){
                calcuMemMultiplier = "1";
            }
            if(calcuScreenMultiplier == undefined){
                calcuScreenMultiplier = "1";
            }
            if(calcuMemMultiplier > calcuScreenMultiplier){
                var calcuMemInt = (parseFloat(calcuMemory)) * parseInt(calcuMemMultiplier);
                var calcuScreenInt = (parseFloat(calcuScreen.value)) * parseInt(calcuMemMultiplier);
                var calculation = calcuScreenInt - calcuMemInt;
                calculation /= parseInt(calcuMemMultiplier);
                calcuScreen.value = calculation;
                calculated = true;
                decimalPoint = false;
            }
            else if(calcuMemMultiplier < calcuScreenMultiplier){
                var calcuMemInt = (parseFloat(calcuMemory)) * parseInt(calcuScreenMultiplier);
                var calcuScreenInt = (parseFloat(calcuScreen.value)) * parseInt(calcuScreenMultiplier);
                var calculation = calcuScreenInt - calcuMemInt;
                calculation /= parseInt(calcuScreenMultiplier);
                calcuScreen.value = calculation;
                calculated = true;
                decimalPoint = false;
            }
            else{
                var calcuMemInt = (parseFloat(calcuMemory)) * parseInt(calcuMemMultiplier);
                var calcuScreenInt = (parseFloat(calcuScreen.value)) * parseInt(calcuMemMultiplier);
                var calculation = calcuScreenInt - calcuMemInt;
                calculation /= parseInt(calcuMemMultiplier);
                calcuScreen.value = calculation;
                calculated = true;
                decimalPoint = false;
            }    
        }
        else{
            var calcuMemMultiplier = numberTraversal(calcuMemory);
            var calcuScreenMultiplier = numberTraversal(calcuScreen.value);
            if(calcuMemMultiplier == undefined){
                calcuMemMultiplier = "1";
            }
            if(calcuScreenMultiplier == undefined){
                calcuScreenMultiplier = "1";
            }
            var calcuMemInt = (parseFloat(calcuMemory)) * parseInt(calcuMemMultiplier);
            var calcuScreenInt = (parseFloat(calcuScreen.value)) * parseInt(calcuMemMultiplier);
            var calculation = calcuScreenInt - calcuMemInt;
            calculation /= parseInt(calcuMemMultiplier);
            calcuScreen.value = calculation;
            calculated = true;
            decimalPoint = false;
        }
    }
});

memClearBtn.addEventListener("click", () => {
    if(calcuMemory == "0"){
        alert("No memory stored");
    }
    else{
        alert("Memory Cleared");
        calcuMemory = "0";
    }
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
    firstMultiplier = 1;
    secondMultiplier = 1;
    subtractionEvent = true;
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
                var calculation = firstOp - secondOp;
                calculation /= firstMultiplier;
                calcuScreen.value = calculation;
                secondNumberInput = false;
            }
            else if(secondMultiplier > firstMultiplier){
                firstMultiplier = secondMultiplier;
                firstOp *= firstMultiplier;
                secondOp *= firstMultiplier;
                var calculation = firstOp - secondOp;
                calculation /= firstMultiplier;
                calcuScreen.value = calculation;
                secondNumberInput = false;
            }
            else{
                firstOp *= firstMultiplier;
                secondOp *= firstMultiplier;
                var calculation = firstOp - secondOp;
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
                var calculation = firstOp - secondOp;
                calculation /= firstMultiplier;
                calcuScreen.value = calculation;
                secondNumberInput = false;
            }
            else if(secondMultiplier > firstMultiplier){
                firstMultiplier = secondMultiplier;
                firstOp *= firstMultiplier;
                secondOp *= firstMultiplier;
                var calculation = firstOp - secondOp;
                calculation /= firstMultiplier;
                calcuScreen.value = calculation;
                secondNumberInput = false;
            }
            else{
                firstOp *= firstMultiplier;
                secondOp *= firstMultiplier;
                var calculation = firstOp - secondOp;
                calculation /= firstMultiplier;
                calcuScreen.value = calculation;
                secondNumberInput = false;
            }
        }
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
            var finalMultiplier = firstMultiplier * secondMultiplier;
            firstOp *= firstMultiplier;
            secondOp *= secondMultiplier;
            var calculation = firstOp * secondOp;
            calculation /= finalMultiplier;
            calcuScreen.value = calculation;
            secondNumberInput = false;
        }
        else{
            secondOp = parseFloat(calcuScreen.value);
            var finalMultiplier = firstMultiplier * secondMultiplier;
            firstOp *= firstMultiplier;
            secondOp *= secondMultiplier;
            var calculation = firstOp * secondOp;
            calculation /= finalMultiplier;
            calcuScreen.value = calculation;
            secondNumberInput = false;
        }
    }
})

equalBtn.addEventListener("click", () => {
    if(firstNumberInput == true && secondNumberInput == true){
        secondOp = parseFloat(calcuScreen.value);
        if(additionEvent == true){
            if(decimalPoint == true){
                secondMultiplier = numberTraversal(calcuScreen.value);
                secondOp = parseFloat(calcuScreen.value);
                if(firstMultiplier > secondMultiplier){
                    secondMultiplier = firstMultiplier;
                    firstOp *= firstMultiplier;
                    secondOp *= firstMultiplier;
                    var calculation = firstOp + secondOp;
                    calculation /= firstMultiplier;
                    var calculatedFinal = parseFloat(limitCutter(calculation));
                    calcuScreen.value = calculatedFinal;
                    secondNumberInput = false;

                    calculated = true;
                    firstNumberInput = false;
                    additionEvent = false;
                    decimalPoint = false;
                }
                else if(secondMultiplier > firstMultiplier){
                    firstMultiplier = secondMultiplier;
                    firstOp *= firstMultiplier;
                    secondOp *= firstMultiplier;
                    var calculation = firstOp + secondOp;
                    calculation /= firstMultiplier;
                    var calculatedFinal = parseFloat(limitCutter(calculation));
                    calcuScreen.value = calculatedFinal;
                    secondNumberInput = false;

                    calculated = true;
                    firstNumberInput = false;
                    additionEvent = false;
                    decimalPoint = false;
                }
                else{
                    firstOp *= firstMultiplier;
                    secondOp *= firstMultiplier;
                    var calculation = firstOp + secondOp;
                    calculation /= firstMultiplier;
                    var calculatedFinal = parseFloat(limitCutter(calculation));
                    calcuScreen.value = calculatedFinal;
                    secondNumberInput = false;

                    calculated = true;
                    firstNumberInput = false;
                    additionEvent = false;
                    decimalPoint = false;
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
                    var calculatedFinal = parseFloat(limitCutter(calculation));
                    calcuScreen.value = calculatedFinal;
                    secondNumberInput = false;

                    calculated = true;
                    firstNumberInput = false;
                    additionEvent = false;
                    decimalPoint = false;
                }
                else if(secondMultiplier > firstMultiplier){
                    firstMultiplier = secondMultiplier;
                    firstOp *= firstMultiplier;
                    secondOp *= firstMultiplier;
                    var calculation = firstOp + secondOp;
                    calculation /= firstMultiplier;
                    var calculatedFinal = parseFloat(limitCutter(calculation));
                    calcuScreen.value = calculatedFinal;
                    secondNumberInput = false;

                    calculated = true;
                    firstNumberInput = false;
                    additionEvent = false;
                    decimalPoint = false;
                }
                else{
                    firstOp *= firstMultiplier;
                    secondOp *= firstMultiplier;
                    var calculation = firstOp + secondOp;
                    calculation /= firstMultiplier;
                    var calculatedFinal = parseFloat(limitCutter(calculation));
                    calcuScreen.value = calculatedFinal;
                    secondNumberInput = false;

                    calculated = true;
                    firstNumberInput = false;
                    additionEvent = false;
                    decimalPoint = false;
                }
            }
        }
        else if(subtractionEvent == true){
            if(decimalPoint == true){
                secondMultiplier = numberTraversal(calcuScreen.value);
                secondOp = parseFloat(calcuScreen.value);
                if(firstMultiplier > secondMultiplier){
                    secondMultiplier = firstMultiplier;
                    firstOp *= firstMultiplier;
                    secondOp *= firstMultiplier;
                    var calculation = firstOp - secondOp;
                    calculation /= firstMultiplier;
                    var calculatedFinal = parseFloat(limitCutter(calculation));
                    calcuScreen.value = calculatedFinal;
                    secondNumberInput = false;

                    calculated = true;
                    firstNumberInput = false;
                    subtractionEvent = false;
                    decimalPoint = false;
                }
                else if(secondMultiplier > firstMultiplier){
                    firstMultiplier = secondMultiplier;
                    firstOp *= firstMultiplier;
                    secondOp *= firstMultiplier;
                    var calculation = firstOp - secondOp;
                    calculation /= firstMultiplier;
                    var calculatedFinal = parseFloat(limitCutter(calculation));
                    calcuScreen.value = calculatedFinal;
                    secondNumberInput = false;

                    calculated = true;
                    firstNumberInput = false;
                    subtractionEvent = false;
                    decimalPoint = false;
                }
                else{
                    firstOp *= firstMultiplier;
                    secondOp *= firstMultiplier;
                    var calculation = firstOp - secondOp;
                    calculation /= firstMultiplier;
                    var calculatedFinal = parseFloat(limitCutter(calculation));
                    calcuScreen.value = calculatedFinal;
                    secondNumberInput = false;

                    calculated = true;
                    firstNumberInput = false;
                    subtractionEvent = false;
                    decimalPoint = false;
                }
            }
            else{
                secondOp = parseFloat(calcuScreen.value);
                if(firstMultiplier > secondMultiplier){
                    secondMultiplier = firstMultiplier;
                    firstOp *= firstMultiplier;
                    secondOp *= firstMultiplier;
                    var calculation = firstOp - secondOp;
                    calculation /= firstMultiplier;
                    var calculatedFinal = parseFloat(limitCutter(calculation));
                    calcuScreen.value = calculatedFinal;
                    secondNumberInput = false;

                    calculated = true;
                    firstNumberInput = false;
                    subtractionEvent = false;
                    decimalPoint = false;
                }
                else if(secondMultiplier > firstMultiplier){
                    firstMultiplier = secondMultiplier;
                    firstOp *= firstMultiplier;
                    secondOp *= firstMultiplier;
                    var calculation = firstOp - secondOp;
                    calculation /= firstMultiplier;
                    var calculatedFinal = parseFloat(limitCutter(calculation));
                    calcuScreen.value = calculatedFinal;
                    secondNumberInput = false;

                    calculated = true;
                    firstNumberInput = false;
                    subtractionEvent = false;
                    decimalPoint = false;
                }
                else{
                    firstOp *= firstMultiplier;
                    secondOp *= firstMultiplier;
                    var calculation = firstOp - secondOp;
                    calculation /= firstMultiplier;
                    var calculatedFinal = parseFloat(limitCutter(calculation));
                    calcuScreen.value = calculatedFinal;
                    secondNumberInput = false;

                    calculated = true;
                    firstNumberInput = false;
                    subtractionEvent = false;
                    decimalPoint = false;
                }
            }
        }
        else if(divisionEvent == true){
            var calculation = firstOp / secondOp;
            var calculatedFinal = parseFloat(limitCutter(calculation));
            calcuScreen.value = calculatedFinal;
            calculated = true;
            firstNumberInput = false;
            secondNumberInput = false;
            divisionEvent = false;
            decimalPoint = false;
        }
        else if(multiplicationEvent == true) {
            if(decimalPoint == true){
                secondMultiplier = numberTraversal(calcuScreen.value);
                secondOp = parseFloat(calcuScreen.value);
                var finalMultiplier = firstMultiplier * secondMultiplier;
                firstOp *= firstMultiplier;
                secondOp *= secondMultiplier;
                var calculation = firstOp * secondOp;
                calculation /= finalMultiplier;
                var calculatedFinal = parseFloat(limitCutter(calculation));
                calcuScreen.value = calculatedFinal;
                secondNumberInput = false;

                calculated = true;
                firstNumberInput = false;
                multiplicationEvent = false;
                decimalPoint = false;
            }
            else{
                secondOp = parseFloat(calcuScreen.value);
                var finalMultiplier = firstMultiplier * secondMultiplier;
                firstOp *= firstMultiplier;
                secondOp *= secondMultiplier;
                var calculation = firstOp * secondOp;
                calculation /= finalMultiplier;
                var calculatedFinal = parseFloat(limitCutter(calculation));
                calcuScreen.value = calculatedFinal;
                secondNumberInput = false;

                calculated = true;
                firstNumberInput = false;
                multiplicationEvent = false;
                decimalPoint = false;
            }
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
        }
    }
    console.log(multiplier);
    return multiplier;
}

const limitCutter = (numberValue) => {
    var result = "";
    var number = String(numberValue);
    for(let i = 0; i < 8; i++){
        if(number[i] === undefined){
            break
        }
        console.log(number)
        console.log(number[i]);
        result += number[i];
    }
    console.log(result);
    return result;
}