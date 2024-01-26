// 논리연산자 Logical operator
// && 그리고
// || 또는
// ! 부정(단한연산자에서 온것)
// !! 불리언값으로 변환 (단항연산자 응용버전)
let num = 8;
if(num >= 0 && num < 9){
    console.log('o');
}
if(num != 8 ){
    console.log('x');
}

console.log(true && true); //true
console.log(true && false); //false

console.log(true || true); //true
console.log(true || false); //true

console.log(!'text'); //false
console.log(!!'text'); //true
