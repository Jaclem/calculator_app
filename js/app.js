const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
console.log(operators);

let int = [];

// Helper Functions

// Joins the array strings together and then converts to integer
const joinInt = function(arr) {
    let intJoined = arr.join('');
    let intParsed = parseInt(intJoined, 10);
    
    addToInputScreen(intParsed);
}

// Adds the numbers in the array when clicked to the calculator screen
const addToInputScreen = function(inputNum) {
    document.getElementById('input').value = `${inputNum}`;

}

// Adds each value clicked to an array // checks if array has numbers in it, if so it sends value to joinInt function
const addToInt = function(value) {
    int.push(value);

    if(int.length > 0){
        joinInt(int);
    }
}

// Event Listeners

numbers.forEach(button => {
    button.addEventListener('click', (e)=> {
        let btnClicked = e.target.value;
        addToInt(btnClicked);
    });
});

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        opType = e.target.value;
    })
})

