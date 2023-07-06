'use strict';

let str = '@ Javascript &';

for (let i = 0; i < str.length; i++) {
    // 문자열에 대한 배열 인덱싱 제공.
    console.log(str[i]);
    // 공백을 포함한 문자 하나하나가 출력됨 : @, 공백, J, a, v, a ..... 공백, &

}
console.log('--------')

// 문자열 자체에 대한 배열 인덱싱도 가능.

console.log('@ Javascript &'[0]);
// 0번째 문자가 출력됨 : @ 

// str.lenght - 1 = 배열 크기 - 1 = 인덱스 종료값

console.log('@ Javascript &'[str.length - 1]);
// 마지막 문자가 출력됨 : &

//  = 
console.log(str[str.length - 1]);