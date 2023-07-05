'use strict';

let n;
let numCnt;

n = +prompt('줄수 : ');

// 4자릿수까지 정렬

numCnt = String(n * n).length;

for (let i = 1, v = 1; i <= n; i++) {
    for (let j = 1; j <= i + n - 1; j++) {
        if (j < n + 1 - i) {
            for (let i = 0; i <= numCnt; i++) {
                document.write('&nbsp;');
            }
        } else {
            for (let i = 0; i < numCnt - String(v).length; i++) {
                document.write('&nbsp;');
            }
            document.write(`${v++} `);
        }
    }
    document.write('<br/>');
}