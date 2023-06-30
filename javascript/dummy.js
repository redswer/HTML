'use strict';

// for (초기식부분; 조건식부분(반복); 증감식부분){   // 초기식 > 조건식 > 반복실행블럭 > 증감식
//     반복실행블럭;                         //        > 조건식 > 반복실행블럭 > 증감식
// }

// 67 ~ 92
for (let i = 66; i < 92;) {
    i++;
    console.log(i);             // 구하는식(현재)
}

// 17 ~ 68
for (let i = 17; i <= 68;) {
    console.log(i);             // 구하는식(현재)
    i++;
}

// 26 ~ -3
for (let i = 27; i > -3;) {
    i--;
    console.log(i);             // 구하는식(현재)
}

// 114 ~ 152
for (let i = 114; ;) {
    if (i >= 153) break;
    console.log(i);             // 구하는식(현재)
    i++;
}

// 91 ~ 63
for (let i = 92; ;) {
    i--;
    if (i <= 62 ) break;
    console.log(i);             // 구하는식(현재)
}

// 96 ~ 115
for (let i = 95; ;) {
    if (i >= 115 ) break;
    i++;
    console.log(i);             // 구하는식(현재)
}

// 47 ~ 61
for (let i = 46; ;) {
    i++;
    console.log(i);             // 구하는식(현재)
    if (i >= 61 ) break;
}