'use strict';

// 구구단

for (let i = 1; i < 10; i++) {
    // if (i >= 6) break;
    for (let j = 1, result; j < 10; j++) {
        // if (j >= 6) break;
        result = i * j;
        
        // 정렬
        document.write(`${i} X ${j} =${result / 10 >= 1 ? '' : '&nbsp;'}${result} &nbsp; &nbsp;`);
        // = document.write(`${i} X ${j} =${String(result).length >= 2 ? '' :'&nbsp;'}${result} `);
    }
    // 줄바꿈
    document.write('<br/>');
    if (i >= 6) break;
// 빠져나오기 전에 이미 위에서 6단까지 반복됬으므로 6단까지 출력됨
}