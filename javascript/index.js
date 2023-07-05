'use strict';

let n;

n = +prompt('줄수 : ');

// 2자릿수 정렬

for (let i = 1, v = 1; i <= n; i++) {
    for (let j = 1; j <= i + n - 1; j++) {
        if (j < n - i + 1) {
            document.write('&nbsp; &nbsp;');
        } else {
            document.write(`${String(v).length >= 2 ? '' : '&nbsp;'}${v++} `);
        }
    }
    document.write('<br/>');
}