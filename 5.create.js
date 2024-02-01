// const apple = {
//     name: 'apple',
//     display: function(){
//         console.log(`${this.name}: o`);
//     },
// };

// const orange = {
//     name: 'orange',
//     display: function(){
//         console.log(`${this.name}: or`);
//     },
// };

//생성자 함수
function Fruit(name, emoji) { //대문자 시작
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`)
    };
    return this; //생략가능(자동 return)
}

const apple = new Fruit('apple', 'o');
const orange = new Fruit('orange', 'or');

console.log(apple);
console.lot(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();


