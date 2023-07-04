'use strict';

// '예제(행, 열) 5' 엑셀파일 참고

for (let i = 1, v = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j < 6 - i) {
            document.write('&nbsp; &nbsp;');
        } else {
            document.write(`${String(v).length >= 2 ? '' : '&nbsp;'}${v++} `);
        }
    }
    document.write('<br/>');
}