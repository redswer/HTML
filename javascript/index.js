'use strict';

let under, over,
    n = 1;

while (1) {
    under = +prompt('밑수 : ');
    if (under >= 0) {
        over = +prompt('지수 : ');
        if (over >= 0) break;
    }
    alert('음수가 입력되었습니다. 재입력 바랍니다.');
}

for (let i = 0; i < over; i++) {
    n = n * under;
}

alert(`${under}의 ${over}승은 ${n}입니다.`);