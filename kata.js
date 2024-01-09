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
// 배열의 평균값
// 넘버스의 원소의 평균값 retrun
function solution(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    let answer = sum / numbers.length;
    return answer
    console.log(answer)
}
//----------------------------------------------------------------------
//짝수와 홀수
// 정수 넘 짝수면 이븐, 홀수 오드 -> retrun
function solution(num) {
    var answer = '';
    if (num % 2 === 0) {
        return answer = "Even"
    } else {
        return answer = "Odd"
    }
    return answer;
}
//----------------------------------------------------------------------
// 평균 구허가.
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
function solution(arr) {
    var answer = 0;
    for (let i = 0; i < arr.length; i++){
        answer += arr[i]
    }
    return answer / arr.length;
}
//----------------------------------------------------------------------
// 자릿수 더하기
function solution(n) {
    var answer = 0;
    let str = String(n)
    
    for (let i = 0; i < str.length; i++){
        answer += parseInt(str[i])
    }
    return answer;
}
//----------------------------------------------------------------------
// 약수의 합.
function solution(n) {
    var answer = 0;
    for ( let i = 0; i <= n; i++){
        console.log(i)
        // if( n % i === 0){
        //     answer += i
        // }
    }
    return answer;
}
//----------------------------------------------------------------------
// 나머지가 1이 되는 수 찾기.
function solution(n) {
    // var answer = 0;
    let result = []

    for (let i = 0; i < n; i++){
    if ( n % i === 1) {
       result.push(i)  
    } 
}
    return result[0]
}
//----------------------------------------------------------------------
// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
    var answer = [];
    for(let i = 1; i <= n; i++) {
        answer.push(i * x)
    }
    return answer;
}
//----------------------------------------------------------------------
// 자연수 뒤집어 배열로 만들기.
function solution(n) {
    var arr = n.toString().split('');
    var answer = [];

    for(var i=arr.length-1; i>=0; i--){
        answer.push(Number(arr[i]));
    }

  return answer;
}
//----------------------------------------------------------------------
// 문자열 정수로 바꾸기/
function solution(s) {
    var answer = 0;
    let a = Number(s)
    return answer = a
}
//----------------------------------------------------------------------
//정수 내림차순으로 배치하기.
function solution(n) {
    var answer = 0;
    n=String(n)
    n=n.split('')
    n=n.sort((a,b)=>b-a).join('')
    n=Number(n)
    return n;
}
//----------------------------------------------------------------------
//두 정수 사이의 합
function solution(a, b) {
    var answer = 0;
    if (a >= b){
        for ( let i = b; i <= a; i++){
            answer = answer +=i;
        }
    } else if (a < b){
        for( let i = a; i <= b; i++){
            answer = answer += i
        }
    }
    return answer;
}
//----------------------------------------------------------------------
// 음양 더하기
function solution(absolutes, signs) {
    let answer = 0;
    console.log(absolutes.length)
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer = answer + absolutes[i];
        } else {
            answer = answer - absolutes[i];
        }
    }
    return answer
}
//----------------------------------------------------------------------
// 콜라츠 추측
function solution(num) {
    let answer = 0;
    
    while (num != 1) {
        if (num % 2 == 0){
            num /= 2;
        } else {
            num = (num * 3) + 1;
        }
        answer += 1;
    }
    if (answer >= 500) {
        return -1;
    } else {
        return answer;
    }
}
//----------------------------------------------------------------------
// 하샤드 수
function solution(x) {
    let sum = 0;
    let arr = String(x).split("");

    for(let i = 0; i < arr.length; i++){
        sum += Number(arr[i]);
    }

    return (x % sum == 0) ? true : false;
}
//----------------------------------------------------------------------
// 나누어 떨어지는 숫자,
function solution(arr, divisor) {
    var answer = [];
    for(i=0; i<arr.length; i++) {
      if(arr[i] % divisor == 0) {
        answer.push(arr[i]);
      }
    }
    if(answer.length == 0) {
      answer.push(-1);
    }
    answer.sort((a,b) => a - b);
    return answer;
}
//----------------------------------------------------------------------
// 서울에서 김 서방 찾기.
function solution(seoul) {
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === 'Kim') return `김서방은 ${i}에 있다`
    }
}
//----------------------------------------------------------------------
// 휴대폰 번호 가리기
function solution(phone_number) {
    var answer = '';
    answer = phone_number.slice(0,-4).replace(/[0-9]/g,'*') + phone_number.slice(-4);
return answer;
}
//----------------------------------------------------------------------
//없는 숫자 더하기
function solution(numbers) {
    var answer = 0;
    for(let i=0; i<10; i++){
        if(!numbers.includes(i)) answer += i; // numbers가 i를 포함하지 않는다면, answer에 그 i 값들을 더해라
    } 
    return answer;
}
//----------------------------------------------------------------------
// 제일 작은 수 더하기
function solution(arr) {
    if (arr.length === 1) return [-1];
    
    let i = 0;
    for (let j = 0; j < arr.length; j += 1) {
        if (arr[i] > arr[j]) i = j;
    }
    arr.splice(i, 1);
    return arr;
}
//----------------------------------------------------------------------
// 가운데 글자 가져오기. // 서브스트링 메소드에 대해 좀 더 알아 볼 것.
function solution(s) {
    if(s.length%2 == 0){ 
        return s.substr(s.length/2-1,2)
    }else{ 
        return s.substr(s.length/2,1)
    }   
}
//----------------------------------------------------------------------
// 약수의 개수와 덧셈 // 코드를 제대로 이해하지 못함 다시 볼 것.
function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        let p = 1;
    for (j = 2; j <= i; j++) {
        if (i % j == 0) p++;
    }
        if (p % 2 == 0) answer += i;
        else answer -= i;
    }
        return answer;
}
//----------------------------------------------------------------------
// 수박 수박 수박 수박 
function solution(n) {
    var answer = '';
    for (let i = 1; i <= n; i++) {
        i % 2 === 0 ? answer += '박' : answer += '수'
    }
    return answer;
}
//
//----------------------------------------------------------------------
// 24/01/08 금일 부터 풀이를 적어야 하기에 설명을 추가함.
// 문자열 내림차순으로 배치하기

// s = 'Zbcdefg'

function solution(s) {
    return s.split('').sort().reverse().join('')
}
// split, reverse, join 메소드를 활용한 풀이.
// 1. split 을 통해 문자열을 분리 시킴 '' <- 생략 Z, b, c, d, e, f, g
// 2. sort 메소드를 사용해 정렬 Z,b,c,d,e,f,g
// 3. reverse 메소드를 사용해 리턴해야할 답에 맞게끔 ->  g,f,e,d,c,b,Z
// 4. join 메소드를 사용 -> 'gfedcbZ' 출력

//----------------------------------------------------------------------
// 문자열 다루기 기본.
// 문자열의 길이가 4 혹은 6 숫자로만 구성이 되어있는지.
// s = 'a234' 라면 false.
// '1234' 라면 true.

//----------------------------------------------------------------------
// 이상한 문자 다루기.
// 문자열을 띄어쓰기 기준으로 단어를 끊어서 받은 뒤
// 그 단어를 짝수 번째 문자는 대문자, 홀수는 소문자, 다시 문장으로 리턴.
function solution(s) {
    let answer = '';
    let words = s.split(" "); // s 를 " " 기준으로 split 메소드를 사용해 분리.
    for(let i = 0; i<words.length; i++){ // 반복문을 사용해 words.length 길이 만큼.
        for(let j = 0; j<words[i].length; j++){ // 이중 반복문 사용.. words의[i] 길이.
        if(j % 2 == 0) { // j 를 나누었을때 짝수 라면 ?
        answer += words[i][j].toUpperCase();
        // words 의 [i]번째 배열의 [j] 번째 문자열을 대문자로 변환 후 answer 에 더하기.
        } else {
        answer += words[i][j].toLowerCase()}
        // words 의 [i]번째 배열의 [j] 번째 문자열을 소문자로 뱐환 후 answer 에 더하기.
        }
        // i 는 0 부터 시작, try[0],hello[1],world[2]
        // words.length는 1부터 시작함. try[1],hello[2],world[3] -> try hellow world ->
        // words.length: 3.
        // 조건문을 만들어 공백을 생성하고, 조건에 마지막 i 번째 배열을 조건에서 제외.
        if(!(i==words.length-1)){
            answer+=" ";
    }
}
return answer;
}
// 20분 스스로 고민 하다 구글링을 통해서 조금 더 찾아본 결과 코드에 대해서 완벽히 이해를 하지
// 못했기에 더 공부 해야함.
//----------------------------------------------------------------------