const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operation]');
const clearAll = document.querySelector('[data-clear]');
const equalsBtn = document.querySelector('[data-equals]');
const decimal = document.querySelector('[data-decimal]');
let currentValue = document.querySelector('[data-current]');
let firstNum = '';
let secondNum = '';
let operand = '';
let content = '';
let total = [];
let sum;

numbers.forEach(number => {

    number.addEventListener('click', ()=> {
        currentValue.innerHTML += number.textContent;
        
        if(operand == ''){
            firstNum += number.textContent;
            getFirstVal(firstNum); 
        }
        else if(operand == '-'){
            firstNum = currentValue.innerHTML;
            getFirstVal(firstNum);
        }
        else if(operand != '' && operand != '-'){
            secondNum += number.textContent;
            getSecondVal(secondNum);
        }  
    });
});


operators.forEach(operator => {
    operator.addEventListener('click', ()=> {
        operand = operator.textContent;
        currentValue.innerHTML += operand;

        if(secondNum != ''){
            calculate();
            currentValue.innerHTML += operand;
        }
    });
});

equalsBtn.addEventListener('click', ()=> {
    calculate();
});

// helper functions
const getFirstVal = function(...args){
    firstNum = parseInt(args);
}

const getSecondVal = function(...args){
    secondNum = parseInt(args);
}



const calculate = function(){
    total = [firstNum, secondNum];
    console.log(total);
    
    switch(operand){
        case '+':
            sum = total.reduce((previous, current) => {
                return previous + current;
            }, 0);

            firstNum = sum;
            secondNum = '';
            total = [];
            currentValue.innerHTML = sum;

            break;

        case '-':
            sum = total.reduce((previous, current) => {
                return previous - current;
            }); 

            firstNum = sum;
            secondNum = '';
            total = [];
            currentValue.innerHTML = sum;

            break;

        case '*':
            sum = total.reduce((previous, current) => {
                return previous * current;
            }, 1);

            firstNum = sum;
            secondNum = '';
            total = [];
            currentValue.innerHTML = sum;

            break;

        case '/':
            sum = total.reduce((previous, current) => {
                return previous / current;
            });

            firstNum = sum;
            secondNum = '';
            total = [];
            currentValue.innerHTML = sum;

            break;
    }
}

clearAll.addEventListener('click', ()=> {
    currentValue.innerHTML = '';
    firstNum = null;
});

