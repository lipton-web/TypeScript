// union type
let members: (number | string)[] = [1,"2",3]
let object: {a : string | number} = { a: "123",} 

// any 모든 타입 허용(많이 사용하면 타입스크립트 쓰는 의미 없음)
let id: any;
id = 123;
id = [];

// unknown 모든 자료형 허용해줌(any보다 안전하다)
// unknown은 숫자를 넣어도 number타입이 아님(연산 불가능)
let named: unknown;
named = 123;
// named = {};

// named는 오브젝트인데 변수1은 string이라 에러 발동
// let 변수1: string = named;

// let age: string | number;
// age = 5
// let a = age - 1
// console.log(a)



let user: string = 'kim';
let age: number | undefined = undefined;
let married: boolean = false; 
let 철수: (string|number|undefined|boolean)[] = [user, age, married];

let 학교: {
	score:(number|boolean)[],
	teacher:string,
	friend:string|string[]
} = {
	score : [100, 97, 84],
	teacher : 'Phil',
	friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

let bb: unknown = {a:1, b:2}
