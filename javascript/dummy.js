'use strict';

// do {
//     반복실행블럭
// } while (조건식(반복));

// 35 ~ 71
let i = 34;

do {
    i++;
    console.log(i);
} while (i < 71);

// 86 ~ 117
let i = 86;

do {
    console.log(i);
    i++;
} while (i <= 117);

// 61 ~ 99
let i = 60;

do {
    i++;
    if (i>=100) break;
    console.log(i);
} while (1);
