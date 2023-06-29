// 콘솔에 출력 (구두점 세미콜론(;)은 생략 가능) - 자바스크립트, 웹 브라우저 모두 허용
console.log(123);

// 브라우저 화면에 출력 - 웹 브라우저만 허용
document.write(123);

// 바로 실행시키지 않고 개행하여 코드를 나열할 때에는 shift + enter
console.log(456);
document.write(456 + '<br/>');

// 자바스크립트에서는 문자열 표기 구두점을 더블 쿼트(""), 싱글 쿼트('') 모두 인정
console.log("출력테스트1\n\n");
console.log('출력테스트2');

// 웹 브라우저만 허용
document.write("출력테스트1" + '<br/>')
document.write('출력테스트2')