'use strict'

let tot = 0;
let i = 1;

do {
    tot += i;           // tot = tot + i;
    i++;                // i = i + 1;
} while (i < 101)

console.log(tot)

/* 
최초가상과거누적합 = 0;
과거대상값 = 1;

do {
    현재누적합 = 과거누적합 + 현재대상값;
    현재대상값 = 과거대상값 + 1;
} while (i < 101);

console.log(현재누적합);
*/