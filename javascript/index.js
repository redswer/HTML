'use strict';

// 8 참고

for (let i = 1, v = 1; i <= 3; i++) {
    for (let j = 1; j <= 6 - i; j++) {
        if (j <= i - 1) {
            document.write('&nbsp;&nbsp;');
        } else {
            document.write(`${v++} `);
        }
    }
    document.write('<br/>');
}