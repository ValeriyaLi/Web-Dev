//1
let i = 3;

while (i) {
alert( i-- );
}
//answer: 1

//2
let j = 0;
while (++j < 5) alert( j );
//Answer: 1-4
let k = 0;
while (k++ < 5) alert( k )
//Answer: 1-5

//3
for (let i = 0; i < 5; ++i) alert( i );

for (let i = 0; i < 5; i++) alert( i );
//Answer: 0-4

//4
for (let i = 2; i <= 10; i++) {
if (i % 2 == 0) {
    alert( i );
}
}

//5
var l = 0;
while (l < 3) {
    alert( `number ${l}!` );
    l++;
}

//6
let num;

do {
num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//7
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
}

alert( i ); 
}