'use strict';

/* 거듭제곱 연산자 : 밑수 ** 지수 */
console.log(2 ** 4);                            // 16

/* 나머지 연산자 : 피제수 % 제수 */
console.log(5 % 3);                             // 2
console.log();

/* '+' 연산자의 피연산자 중 하나가 문자열일 경우 다른 피연산자도 자동으로 문자열로 형변환되어 결합 연산 진행 */
console.log('String' + ' operator');            // String operator
console.log('String' + 3);                      // String3
console.log('6' + '4');                         // 64
console.log('6' + 3);                           // 63
console.log();

/* '+' 연산자 외 다른 연산자는 숫자 형태의 문자나 문자열에 대하여 숫자 타입으로 수렴(형 변환) 연산 */
console.log('6' * 3);                           // 18
console.log('65' / '3');                        // 21.666666666666668
console.log(8 - '3');                           // 5

console.log('6' * 1 + '4');                     // 64
console.log('6' * 1 + '4' * 1);                 // 10
/* 숫자형태의 문자나 문자열에 대하여 덧셈 연산을 하기 위해 둘 중 하나의 값만 숫자 타입으로 변형을 하면, 다른 하나는
      그대로 문자열이므로 숫자 타입으로 변환을 한 값이 다시 문자열로 변환되어 문자열 결합 연산됨
   따라서 둘 다 숫자 타입으로 변환을 한 후 연산(+)을 진행해야만 정상적인 덧셈 연산 가능 */
console.log();

/* 단항(+, -)부호 연산자를 활용하면 보다 더 간결한 표현이 가능 */
console.log(+'6' + +'4');                       // 10
console.log(-'6' + -'4');                       // -10
console.log();


console.log('a' * 3);                           // NaN
/* 숫자형태가 아닌 문자형태의 문자나 문자열에 '+' 연산자가 아닌 다른 연산을 진행하면 'NaN' 값 반환
   NaN 은 Not-a-Number 의 약어로써 연산 결과가 숫자 타입이 아님을 의미
   NaN 은 어떤 추가 연산을 해도 결국 NaN 이 반환되는 성질을 가짐 */
console.log(isNaN(5));                          // false
console.log(isNaN('a'));                        // true
console.log(isNaN('a' * 3));                    // true
console.log(isNaN('6'));                        // false
/* isNaN(인수) : 내장함수로써 인수값이 숫자가 아니면 true, 숫자면 false 반환
                 단, 숫자 형태의 문자나 문자열도 숫자로 인식하여 false 가 반환되며 NaN 과 undefined 를 제외한
                 falsy 값 특성을 갖는 빈 문자열(''), 공백 (' '), null, false 등에 대해서는 내부적으로
                 0 으로 변환하여 평가 */
console.log();