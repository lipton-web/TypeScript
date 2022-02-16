// union type
var members = [1, "2", 3];
var object = { a: "123", };
// any 모든 타입 허용(많이 사용하면 타입스크립트 쓰는 의미 없음)
var id;
id = 123;
id = [];
// unknown 모든 자료형 허용해줌(any보다 안전하다)
// unknown은 숫자를 넣어도 number타입이 아님(연산 불가능)
var named;
named = 123;
// named = {};
// named는 오브젝트인데 변수1은 string이라 에러 발동
// let 변수1: string = named;
// let age: string | number;
// age = 5
// let a = age - 1
// console.log(a)
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
var bb = { a: 1, b: 2 };
// let aaa = bb -1
console.log(bb.a);
