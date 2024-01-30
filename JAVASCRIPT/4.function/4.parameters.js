// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a=1, b=1
function add(a, b){ // add(a =1, b=1) -> 기본값(외부 값이 있을경우 안씀)
    console.log(a);
    console.log(b);
    console.log(arguments);
    console.log(arguments[0]);
    return a + b
}
add(1, 2, 3);

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers){ // 몇개의 배열을 받을지 모를때 
    console.log(a); //1
    console.log(b); //2
    console.log(numbers); // 3, 4, 5, 6, 7, 8
}
sum(1, 2, 3, 4, 5, 6, 7, 8);