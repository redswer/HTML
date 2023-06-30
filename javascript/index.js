'use strict';

/* for (초기식 부분; 조건식 부분(반복); 증감식 부분) {초기식 > 조건식 > 반복실행블럭 > 증감식
            반복실행블럭;                                    > 조건식 > 반복실행블럭 > 증감식
} */

// 67 ~ 92
/* i++를 거쳐 console 로 들어가므로 i 의 시작 시간은 과거(67 - 1)가 됨 / 반복실행블럭의 마지막 console 에서
    끝났기 때문에 끝나는 시점은 현재(92)가 됨 / 증가식이기 때문에 i>= 92이지만 for문 안의 조건이기 때문에 i < 92로
    변환 */
for (let i = 66; i < 92;) {
    i++;
    console.log(i)
}

// 17 ~ 68
/* 바로 console 로 들어갔기 때문에 시작 시간은 현재(17)가 됨 / 바로 console로 들어갔기 때문에 끝나는 시점도
    현재(68)가 됨 / 증감식이므로 i >= 68 이지만 for문 안의 조건이므로 i < 68로 변환 */
for (let i = 17; i < 68;) {
    console.log(i);
    i++;
}

// 26 ~ -3
for (let i = 27; i > -3;) {
    i--;
    console.log(i);
}

// 114 ~ 152
/* console 로 바로 들어갔으므로 시작 지점은 현재(114) / 끝 지점은 미래(153) */
for(let i = 114; ;) {
    if(i >= 153) break;
    console.log(i)
    i++;
}

// 91 ~ 63
for (let i = 92; ;) {
    if(i <= 62) break;
    i--;
    console.log(i)
}

// 96 ~ 115 
for (let i = 95; ;) {
    if (i >= 115) break;
    i++;
    console.log(i)
}

// 47 ~ 61
for (let i = 46; ;) {
    i++;
    console.log(i)
    if (i >= 61) break;
}