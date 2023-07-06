'use strict';

for (let i = 1, v = 1, st, ed; i <= 5; i++) {

    if (i <= 2) {
        st = 4 - i, ed = i + 2;
    } else {
        st = i - 2, ed = 8 - i;
    }

    for (let j = 1; j <= ed; j++) {
        if (j < st) {
            document.write('&nbsp; &nbsp;');
        } else {
            document.write(`${String(v).length >= 2 ? '' : '&nbsp;'}${v++} `);
        }
    }
    document.write('<br/>');
}