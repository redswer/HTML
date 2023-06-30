'use strict'

let tot = 0;
let i = 0;

while (i < 100) {
    i = i + 1;
    tot = tot + i;
}

console.log(tot);

/* 
최초가상과거누적합 = 0;
과거대상값 = 0;

while (현재대상값 < 100) {
    현재대상값 = 과거대상값 + 1;
    현재누적합 = 과거누적합 + 현재대상값;
}

console.log(현재누적합);
*/