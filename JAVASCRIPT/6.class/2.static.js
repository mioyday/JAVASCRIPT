//static 정적 프로퍼티, 메서드
class Fruit {
    // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수 
    static MAX_FRUITS = 4;
    constructor(name, emoji) { 
        this.name = name;
        this.emoji = emoji;
    }
    //클래스 레벨의 메서드
    static makeRandomFruit(){
        //클래스 레벨의 메서드에서는 this를 참조할 수 없음 
        return new Fruit('banana', 'o');

    }
    //인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}: ${this.emoji}`)
    };
}
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

Math.pow();
Number.isFinite(1);

