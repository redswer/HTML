'use strict';

let a = [];

/* 
a[0] = 1;
a[1] = 2;
a[2] = 3;
a[3] = 4;
a[4] = 5;
*/

for (let i = 0; i < 5; i++) {
    a[i] = i + 1;
}


/* 배열은 값을 저장하기 위한 목적이지, 값을 출력하는 목적으로 사용하지 않기 때문에 출력은 따로 입력 */
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}