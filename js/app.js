const add = function(nums){
    nums.reduce((total, current) => {
        return total + current;
    }, 0);
}

const subtract = function(nums){
    nums.reduce((total, current) => {
        return current - total;
    }, 0);
}

