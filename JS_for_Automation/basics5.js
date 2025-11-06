// strings
let day = 'tuesday '
console.log(day.length);
console.log(day.slice(0,4));
console.log(day[1]);

// tue    day
let splitDay = day.split("s")
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

// string to num
let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff);
diff.toString()

// concatinate two strings
let newQuote = day+ "is Funday"
console.log(newQuote);
let val = newQuote.indexOf("day", 5)
console.log(val);

let count = 0
let value =newQuote.indexOf("day")
while (value!== -1) {
    count++
     value =newQuote.indexOf("day", value + 1)
}
console.log(count);

