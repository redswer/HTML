'use strict';

for (let i = 1, v = 1; i <= 5; i++) {
    for (let j = 1; j <= 6 - i; j++) {
        document.write(`${String(v).length >= 2 ? '' : '&nbsp;'}${v++} `);
    }
    document.write('<br/>');
}