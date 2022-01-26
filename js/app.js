const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operation]');
const clearAll = document.querySelector('[data-clear]');
const equalsBtn = document.querySelector('[data-equals]');
let previousValue = document.querySelector('[data-previous]');
let currentValue = document.querySelector('[data-current]');
let holdNum = '';
let firstNum = '';
let secondNum = '';
let operand = '';

const add = function(a, b){
    return a + b;
}

const subtract = function(a, b){
    return a - b;
}

const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    return a / b;
}

const calculate = function(){
    a = Number(firstNum);
    o = operand;
    b = Number(secondNum);
    let value;

    if(b != 0){
        switch(o){
            case '+':
                value = add(a, b);
                previousValue.innerHTML = value;
                break;
            case '-':
                value = subtract(a, b);
                previousValue.innerHTML = value;
                break;
            case '*':
                value = multiply(a, b);
                previousValue.innerHTML = value;
                break;
            case '/':
                value = divide(a, b);
                previousValue.innerHTML = value;
                break;
        }
    }
}

numbers.forEach(number => {
    number.addEventListener('click', ()=> {
        currentValue.innerHTML += number.innerHTML;
        holdNum += number.innerHTML;

        if(operand != ''){
            secondNum += number.innerHTML;
        }

        calculate();
    });
});


operators.forEach(operator => {
    operator.addEventListener('click', ()=> {
        currentValue.innerHTML += operator.innerHTML;  
        firstNum = holdNum;
        operand = operator.innerHTML;
        holdNum = '';
        calculate();
    });
});

clearAll.addEventListener('click', ()=> {
    previousValue.innerHTML = '';
    currentValue.innerHTML = '';
});

equalsBtn.addEventListener('click', ()=> {
    currentValue.innerHTML = previousValue.innerHTML;
    previousValue.innerHTML = '';
})