'use strict';

/* 
정수 : 1
정수 : 2
정수 : 3
정수 : 4
정수 : 5
정수 : 0

누적합 : 15
*/

let tot = 0,
    n1;

// do {
//     n1 = +prompt('정수 : ');
//     tot = tot + n1;
// } while (n1 != 0);

// while (1) {
//     n1 = +prompt('정수 : ');
//     if (n1 === 0) break;
//     tot = tot + n1;
// }

for (; ;) {
    n1 = +prompt('정수 : ');
    if (n === 0) break;
    tot += n1;
}

alert(`누적합 : ${tot}`);