// array
let marks = Array(6)
marks = new Array(10, 20, 30, 40, 50, 60)

var mark = [10, 20, 30, 40, 50, 60]
submark = mark.slice(2,5)
console.log(submark);

console.log(mark[2]);
mark[3] = 14
console.log(mark[3]);
console.log(mark.length);
console.log(mark);
mark.push(65)
console.log(mark);
mark.pop()
console.log(mark);
mark.unshift(0)
console.log(mark);
console.log(mark.indexOf(50));
// 120 in array or not
console.log(mark.includes(120))

console.log("***************************")
var sum = 0
for (let i = 0; i < mark.length; i++) {
    sum = sum + mark[i]
}
 console.log(sum);

// reduce filter map

// reduce 
// where we accumulate values
// addition and multiplication
let total = mark.reduce((sum, markUpdate) => sum + markUpdate,0)
console.log(total);

// filter
// where filter out on condition
var scores = [12, 13,14, 16]
// create a new array with even numbers of scores array [12,14,16]
var evenScores = []
for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i])
    }
}
console.log(evenScores);

let newFilterEvenScores =scores.filter(score=>score%2==0)
console.log(newFilterEvenScores);

// map
// modify each and very value of array to a new value
// create a new array with even numbers of scores array [12,14,16] and multiply it with 3
// [12,14,16] => [36,42,48]
let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray);

let totalval = mappedArray.reduce((sum,value)=> sum + value, 0)
console.log(totalval);

// chaining
var scores1 = [12, 13,14, 16]
let finalValue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,value)=> sum + value, 0)
console.log(finalValue);
