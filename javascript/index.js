'use strict';

let number1, number2;


/* 문자열 '1' 과 숫자 1 을 더하면 문자열 11이 출력됨
   따라서 문자열 '1' 을 숫자로 변환하려면 *1 을 해줘야 함 = prompt 앞에 +를 붙이는 것과 같은 효과 */
number1 = +prompt('첫번째 정수 입력 : ');

number2 = +prompt('두번째 정수 입력 : ');

// alert(number1 > number2 ? '큰 수는 ' + number1 :  number1 < number2 ?  '큰 수는 ' + number2 : '같음');

alert(number1 == number2 ? '같음' : `큰 수는 ${number1 < number2 ? number2 : number1}`);
/* alert(number1 == number2 ? '같음 : '큰 수는' + number1 < number2 ? number2 :number1); 에서는
    '큰 수는'과 number1 < number2 ? 이 먼저 결합하므로 + 다음을 ()로 묶어줘야 함
    따라서 alert(number1 == number2 ? '같음 : '큰 수는' + (number1 < number2 ? number2 :number1)); 가 됨 */