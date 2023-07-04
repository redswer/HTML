'use strict';

// 구구단

//  for (초기식; 조건식; 증감식)

// 레이블 (out) 을 밖에다 걸면 안쪽 for문 안의 break 의 적용 대상이 바깥쪽 for문으로 바뀜 따라서 1단의 *5 까지만 출력됨
// 변수처럼 활용 가능 (반드시 out 일 필요 없음)

out:
for (let i = 1; i < 10; i++) {

    for (let j = 1, result; j < 10; j++) {
        if (j >= 6) break out;
        result = i * j;

        // 정렬
        document.write(`${i} X ${j} =${result / 10 >= 1 ? '' : '&nbsp;'}${result} &nbsp; &nbsp;`);
    }
    // 줄바꿈
    document.write('<br/>');
}