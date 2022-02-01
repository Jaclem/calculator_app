const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operation]');
const clearAll = document.querySelector('[data-clear]');
const equalsBtn = document.querySelector('[data-equals]');
let previousValue = document.querySelector('[data-previous]');
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
        else if(operand != ''){
            secondNum += number.textContent;
            getSecondVal(secondNum);
        }  
    });
});


operators.forEach(operator => {
    operator.addEventListener('click', ()=> {
        operand = operator.textContent;
        currentValue.innerHTML += operand;

        // if(secondNum != ''){
        //     calculate();
        // }
    });
});

clearAll.addEventListener('click', ()=> {
    previousValue.innerHTML = '';
    currentValue.innerHTML = '';
});

equalsBtn.addEventListener('click', ()=> {
    previousValue.innerHTML = '';
    calculate();
});

const getFirstVal = function(...args){
    firstNum = parseInt(args);
    console.log(firstNum);
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

