'use strict'

/* if (조건식) {
    참 실행 블럭;
} else {
    거짓 실행 블럭;
    } */

/* if (조건식) {
    참 실행 블럭;
} */

/* if (조건식) {
    참 실행 블럭;
} else if (조건식) {
    거짓 실행 블럭;
} else if (조건식) {
    거짓 실행 블럭;
} else {
} */

let score;
let grade;

score = +prompt('점수 : ');

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    /* 단순히 score가 80 이상이 아니라 위의 score >= 90 의 반대인 score < 90 이 같이 해석되어서
    score < 90 && score >= 80 으로 해석해야 함 */
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'E';
}

alert(`학점은 ${grade}`);

/*
if (score >= 90) {
    if (grade == 'A') {
    }
}

 = if (score >= 90 && grade == 'A');
 */

//  =======================================

/* 
if (score >= 90) {
    console.log('이 바보들아');
}
if (score == 'A'){
    console.log('이 바보들아');
}

= if (score >= 90 || grade == 'A') {
    console.log('이 바보들아');
}
 */

// =====================================
console.log(!true)
// ! = not --> false