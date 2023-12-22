// 두 수의 차
// 정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.

function solution(num1, num2) {
    return num1 - num2
}

//----------------------------------------------------------------------
// 두 수의 곱
// 정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 
// 하도록 solution 함수를 완성해주세요.

function solution(num1, num2) {
    return num1 * num2;
}
//----------------------------------------------------------------------
// 몫 구하기
// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 
// solution 함수를 완성해주세요.
function solution(num1, num2) {
    let answer = Math.floor(num1 / num2);
    return answer;
}
//----------------------------------------------------------------------
// 숫자 비교하기
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록
// solution 함수를 완성해주세요.
function solution(num1, num2) {
    if (num1 < num2) {
        return -1
    } else if (num1 > num2) {
        return -1
    } else {
        return 1
    }
}
// 수정 한 값.
function solution(num1, num2) {
    let answer = num1 === num2 ? 1 : -1;
    return answer;
}
//----------------------------------------------------------------------
// 두 수의 합
function solution(num1, num2) {
    var answer = num1 + num2;
    return answer;
}
//----------------------------------------------------------------------
// 두 수의 나눗셈
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 
//  soltuion 함수를 완성해주세요.
function solution(num1, num2) {
    var answer = Math.floor((num1 / num2)*1000);
    return answer;
}
//----------------------------------------------------------------------
// 각도기
function solution(angle) {
    // var answer = 0;
    if (angle < 90 ) {
        return 1
    } else if (angle === 90) {
        return 2
    } else if (angle < 180 ) {
        return 3
    } else {
        return 4
    }
    // return answer;
    console.log(angle)
}
//----------------------------------------------------------------------
// 짝수의 합.
//정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
function solution(n) {
let answer = 0;
for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) answer += i;
}
    // console.log(answer)
return answer;
}
//----------------------------------------------------------------------
