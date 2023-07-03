'user strict';

/* 
정수1 : 1
정수2 : 10

1부터 10 까지 누적합 : 55

정수1 : 100
정수2 : 1

1부터 100까지 누적합 : 5050
*/

let tot = 0,
    n1, n2,
    min, max;

n1 = +prompt('정수1 : ');
n2 = +prompt('정수2 : ');

if (n1 < n2) {
    min = n1, max = n2;    
} else {
    min = n2, max = n1;
}

/* for (let i = min; i < max + 1; i++) {
    tot = tot + i;
} */

for (let i = min; i <= max; i++) {
    tot += i;
}

alert(`${min} 부터 ${max} 까지 누적합 : ${tot}`);