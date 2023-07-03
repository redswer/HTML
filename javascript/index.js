'user strict';

/* 
작은 수 : 1
큰 수 : 10

1부터 10 까지 누적합 : 55
*/

let tot = 0,
    min, max;

min = +prompt('작은 수 : ');
max = +prompt('큰 수 : ');

/* for (let i = min; i < max + 1; i++) {
    tot = tot + i;
} */

for (let i = min; i <= max; i++) {
    tot += i;
}

alert(`${min} 부터 ${max} 까지 누적합 : ${tot}`)