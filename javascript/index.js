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
    min, max;

min = +prompt('정수1 : ');
max = +prompt('정수2 : ');

/* '교환(swapping)' excel 파일 참고 */
if (max < min) {
    let t = min;

    min = max, max = t;
}

/* for (let i = min; i < max + 1; i++) {
    tot = tot + i;
} */

for (let i = min; i <= max; i++) {
    tot += i;
}

alert(`${min} 부터 ${max} 까지 누적합 : ${tot}`);