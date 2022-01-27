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

numbers.forEach(number => {

    number.addEventListener('click', ()=> {
        currentValue.innerHTML += number.textContent;
        firstNum += number.textContent;
        
        if(operand == ''){
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
        currentValue.innerHTML += operator.innerHTML;
        operand = operator.innerHTML;
    });
});

clearAll.addEventListener('click', ()=> {
    previousValue.innerHTML = '';
    currentValue.innerHTML = '';
});

equalsBtn.addEventListener('click', ()=> {
    firstNum = currentValue.innerHTML;
    previousValue.innerHTML = '';
});

const getFirstVal = function(...args){
    console.log(args);
}

const getSecondVal = function(...args){
    console.log(args);
}


// const calculate = function(){
    
//     switch(){
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return a / b;
//     }
// }