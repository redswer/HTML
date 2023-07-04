'use strict';

// 구구단

for (let i = 1; i < 10; i++) {
    if (i >= 6) break;
// 6 이상일때 빠져나오므로 5단까지만 출력됨
    for (let j = 1, result; j < 10; j++) {
        // if (j >= 6) break;
        result = i * j;
        
        // 정렬
        document.write(`${i} X ${j} =${result / 10 >= 1 ? '' : '&nbsp;'}${result} &nbsp; &nbsp;`);
        // = document.write(`${i} X ${j} =${String(result).length >= 2 ? '' :'&nbsp;'}${result} `);
    }
    // 줄바꿈
    document.write('<br/>');
    // if (i >= 6) break;
}