'use strict';

/* 삼항조건 연산자 */

/* 형식 : 조건식 ? 참실행 : 거짓실행 */

// javascript 에서는 false를 0, true 를 0이 아닌 다른 값으로 표현할 수 있음 / java 에서는 불가능
// true(1) 면 남성/남자, false(0) 면 여성/여자
let gender = 1;

console.log(`당신의 성별은 ${gender ? '남성' : '여성'}입니다.`);

let genderText;

// javascript 에서는 좌변에 조건식을 쓸 수 있음 / java 에서는 불가능
gender ? genderText = '남자' : genderText = '여자';

console.log(genderText);

// javascript 에서만 다중 조건식가능
// 조건식1 ? 참 : 조건식 ? 참 : 거짓;