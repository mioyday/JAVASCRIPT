//조건문 Conditional Statement
//switch
//if else if else if else if ... else
//정해진 범위안의 값에 대해 특정한 일을 해아하는 경우
let dqy = 6; //0:월요일, 1: 화요일 ... 6: 일요일
if(day === 0){
    dayName = '월요일';
}else if(day == 1){
    dayName = '화요일';
}else if(day == 2){
    dayName = '수요일';
}

switch(day) {
    case 0:
        dayName = '월요일';
        break;
    case 1:
        dayName = '화요일';
        break;
    case 2:
        dayName = '수요일';
        break;
}
console.log(dayName);

let condition = 'okay'; // okay, good -> 좋음!, bad -> 나쁨
let text;
switch (condition) {
    case 'okay':
    case 'good':
        text = '좋음!';
        break;
    case 'bad':
        text = '나쁨!';
        break;
    default:
        console.log('해당하는 요일이 없음');
}
console.log(text);
