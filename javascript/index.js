'use strict';

/* v = 1; */

// 하나의 로직이 끝나고 나서도 사용되면 전역변수로 선언
let v = 1;

// 하나의 로직 안에서만 사용하면 지역변수로 선언
for (let i = 1, v = 1; i <= 5; i++) {       // i = 행
    // 안쪽의 중첩문에는 사용 x
    for (let j = 1; j <= 5; j++) {          // j = 열
        document.write(`${String(v).length >= 2 ? '' : '&nbsp;'}${v++} `);
    }
    document.write('<br/>');
}