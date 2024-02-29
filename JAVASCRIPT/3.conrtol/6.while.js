// while(조건) {}
// 조건이 false가 될때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0){
    console.log(num);
    num--;
}

let isActive = true;
let i = 0;
while(isActive) { //false인경우 실행함
    console.log('아직살아있다!');
    if (i === 1000) {
        break;
    }
    i++;
}

do {
    console.log('do-while 아직살아있다!'); //처음에 무조건 1번 실행하고 검사함
 } while(isActive);