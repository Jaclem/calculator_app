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

console.log(operate('*',5,2,3))
