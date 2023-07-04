'use strict';

// '예제(행, 열) 2' 엑셀문서 참고

let v = 1;

// 열종료변수는 행과 같으므로 변수 ed 를 사용해 표현하는 대신 행 값인 i 를 넣어주면 끝

for (let i = 1, v = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(`${String(v).length >= 2 ? '' : '&nbsp;'}${v++} `);
    }
    document.write('<br/>');
}