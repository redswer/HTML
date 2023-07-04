'use strict';

// 구구단

for (let i = 1; i < 10; i++) {
    for (let j = 1, result; j < 10; j++) {
        result = i * j;

        // 정렬
        document.write(`${i} X ${j} =${result / 10 >= 1 ? '' : '&nbsp;'}${result} `);
        // = document.write(`${i} X ${j} =${String(result).length >= 2 ? '' :'&nbsp;'}${result} `);
    }
    // 줄바꿈
    document.write('<br/>');
}