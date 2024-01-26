// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 : 거짓인경우

let fruit = 'apple';
if (fruit === 'apple') {
    console.log('사과');
} else {
    console.log('smile');
}
fruit == 'apple' ? console.log('apple') : console.log('smile');

let emoji = fruit === 'apple' ? 'apple' : 'smile';
console.log(emoji);