'use strict';

// '예제(행, 열)' 엑셀문서 참고

let v = 1;

for (let i = 1, v = 1, ed = 1; i <= 5; i++) {   // 열종료변수 ed 는 1부터 시작 ==>  let ed = 1;
    for (let j = 1; j <= ed; j++) {     // 1행일때 ed = 1, 2행일때 2, ... 5행일때 5 ==> j <= ed;
        document.write(`${String(v).length >= 2 ? '' : '&nbsp;'}${v++} `);
    }
    document.write('<br/>');
    ed++;
}