'use strict';

/* switch 문 */

// if : 연속적이면서 넓은 범위 측정
// switch : 비연속적이거나 좁은 범위 측정

/* switch (평가할 값(변수, 상수) ) {
    // 변수, 상수(숫자, 문자열), 식
    case 선택값1:
    실행문;
    break;

    case 선택값2:
    실행문;
    break;

    case 선택값3:
    break;

    // default 는 생략 가능
    default:
    실행문;
    break;
} */

/* 선택문 */

let rank;
let grade;

rank = +prompt('등수 : ');

switch (rank) {
    case 1:
        grade = 'A'
        break;
    case 2:
        grade = 'B'
        break;
    case 3:
        grade = 'C'
        break
    default:
        grade = 'F'
        break;
}

switch (rank) {
    case 1:
    case 2:
        grade = 'A'
        break;
    case 3:
    case 4:
        grade = 'B'
        break;
    case 5:
    case 6:
        grade = 'C'
        break;
    default:
        grade = 'F'
        break;
}