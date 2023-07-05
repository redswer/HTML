'use strict';

for (let i = 1, v = 1, st, ed; i <= 5; i++) {

// let st = (i <= 2 ? i : 6 - i),
//     ed = (i <= 2 ? 6 - i : i);

if (i < 3) {
    st = i, ed = 6 - i;
} else {
    st = 6 - i, ed = i;
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