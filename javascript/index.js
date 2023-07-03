'use strict';

/* 

1, 3, 5, 7, 9 ~ 20번째 항까지의 합

 */

let tot = 0,
    n = -1;

for (let i = 0; i < 20; i++) {
    n = n + 2;
    tot = tot + n;
}

alert(`20번째 항까지의 합 : ${tot}`);