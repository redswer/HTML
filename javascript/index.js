'use strict';

console.log(n1);
// 변수가 선언되지 않았으므로 컴파일 에러

let n1 = 5;
let n1 = 5;
// var과 같이 중복 선언 불가.

console.log(n1);
console.log();


function letTest() {
    let n2 = 10;
// 함수 안에서 선언되었으므로 지역변수
}
console.log(n2);
// let 이 지역변수이므로 n2에 대한 변수가 존재하지 않음 따라서 컴파일 에러


{
    let n3 = 15;
// 블럭 안에서 선언되었으므로 지역변수
}
console.log(n3);
// let 이 지역변수이므로 n3에 대한 변수가 존재하지 않음 따라서 컴파일 에러
console.log();


const n4 = 8;
n4 = 9;
// const : 변수에 대한 값부 변경 불가(immutable)하므로 컴파일 에러

const n5;
// const 선언이 지정된 변수는 반드시 선언과 동시에 초기화가 강제되고 선언 이후에 지연 초기화도 불가