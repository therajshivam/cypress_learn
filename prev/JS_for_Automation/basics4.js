// functions
// block of code can be execute together by wrapping them in a function


// add two numbers
function add(a,b) {
    return a+b
}

let sum = add(2,3)
console.log(sum);

// anonymous function - do not have name -- function expressions
let sumOfIntegers = function (c,d) {
    return c + d
}
let sumOfNums = (c,d) => c+d
console.log(sumOfNums(2,3));
