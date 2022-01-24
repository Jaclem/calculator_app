const numbers = document.querySelectorAll('#num');
const switches = document.querySelectorAll('#switches');
const output = document.getElementById('output');


const add = function(nums){
    const sum = nums.reduce((total, current) => {
        return total + current;
    }, 0);
    return sum;
}

const subtract = function(nums){
    const sum = nums.reduce((total, current) => {
        return current - total;
    }, 0);
    return sum;
}

const multiply = function(nums){
    const sum = nums.reduce((total, current) => {
        return total * current;
    }, 1);
    return sum;
}

const divide = function(nums){
    const sum = nums.reduce((total, current) => {
        return total / current;
    });
    return sum;
}

const operate = function(operator, ...nums){

    // switch checks operator to see if it matches any of the value strings
    // if it's a match it calls one of the functions that performs that calculation 
    switch(operator){
        case '+':
            let added = add(nums);
            return added;
        case '-':
            let subtracted = subtract(nums);
            return subtracted;
        case '*':
            let multiplied = multiply(nums);
            return multiplied;
        case '/':
            let divided = divide(nums);
            return divided;
    }
}

const getVal = function(){
    let numberVal = Number(output.value);
    return numberVal;
}

const getOp = function(op){
    let operatorVal = op;
    return operatorVal;
}

const arrayFunc = function(){
    let value;
    numbers.forEach(number => {
        number.addEventListener('click', () =>{
            value = number.innerHTML;
            output.value += `${value}`;
            getVal();
        });
    });  
}
arrayFunc();

const operators = function(){
    let value;
    switches.forEach(operator => {
        operator.addEventListener('click', () =>{
            value = operator.innerHTML;
            output.value += `${value}`;
            getOp(value);
        });
    });
}
operators();

const evaluate = function(){
    console.log(getVal());
    console.log(getOp());
}
evaluate();