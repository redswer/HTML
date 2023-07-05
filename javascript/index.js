'use strict';

let n = +prompt('줄수 : ');
let m = (n + 1) / 2

for (let i = 1, v = 1, st, ed; i <= n; i++) {

    // let st = (i <= 2 ? i : 6 - i),
    //     ed = (i <= 2 ? 6 - i : i);

    if (i <= m) {
        st = i, ed = n + 1 - i;
    } else {
        st = m * 2 - i, ed = i;
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