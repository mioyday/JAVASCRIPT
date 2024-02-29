// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원


class Employee{
    constructor(name, department, hourspPerMonth, payRate){
        this.name = neme;
        this.department = department;
        this.hourspPerMonth = hourspPerMonth;
        this.payRate = payRate;
    }
    calculatePay(){
        return this.hourspPerMonth * this.payRate;
    }    
}

class FullTimeEmployee extends Employee {
    static #PAY_RATE = 1000;
    constructor(name, department, hourspPerMonth){
        super(name, department, hourspPerMontherMonth, FullTimeEmployee.#PAY_RATE)
    }

}
class partTimeEmplyee extends Employee {
    static #PAY_RATE = 8000;
    constructor(name, department, hourspPerMonth){
        super(name, department, hourspPerMontherMonth, partTimeEmplyee.#PAY_RATE)
    }
}

const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const bob = new partTimeEmplyee('밥', 's/w', 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());