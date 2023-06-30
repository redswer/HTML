'use strict';

let name;
let ko, en, math;
let grade;
let score;

name = prompt('이름 :');

ko = +prompt('국어 점수 :');
en = +prompt('영어 점수 :');
math = +prompt('수학 점수');

score = (ko + en + math) / 3;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else {
    grade = 'F';
}

alert(`< 성적 > \n 학생명 : ${name}, 학점 : ${grade}, 평균 : ${score}`);