const flag = true;

if (!flag) {
  console.log("satisfied");
} else {
  console.log("not satisfied");
}

let i = 0;
while (i > 10) {
  i++;
  console.log(i);
}

do {
  i++;
} while (i > 10);
console.log(i);

for (let k = 0; k < 10; k++) {
  console.log(k);
}

let required = true;
while (required) {
  console.log(required);
  required = false;
}

console.log("*************************************");

// 2 and 5
// from 1 to 10, list common multiple of 2 and 5
let n = 0
for (let j = 1; j <=100 ; j++) {
    
    if (j%2 == 0 && j%5 == 0) {
        n++
        console.log(j);
        if (n == 3) {
            break
        }

    }
}
