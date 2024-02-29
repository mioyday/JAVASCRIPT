// 퀴즈!
let num = 2;
//num의 숫자가 짝수이면 o, 홀수면 x을 출력하도록
//if
// ternary

if(num % 2 ==0){
    console.log('o');
}else{
    console.log('x');
}

let emoji = num % 2 == 0 ? 'o' : 'x';
console.log(emoji);