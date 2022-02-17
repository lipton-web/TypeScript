// type alias 타입변수는 대문자로 해야 알기 쉬움
type Animal = string | number | undefined;
type AnimalObj = {name: string, age:number}

let animal: Animal;
let animal2: AnimalObj;

// const의 object자료형
// const는 변수 재할당 방지여서 object 변경은 막지 못함.
// 타입스크입트는 방지해서 만들 수 있음
const 출생지역 = {name:"kim"}
출생지역.name = "park"

// readonly는 절대 수정 불가
// 타입스크립트 에러는 에디터&터미널에서만 존재함, 실제 변환된 js파일은 에러없음
type Girlfriend = {readonly name : string}

const 여친: Girlfriend = {name:"엠버"}

// 타입 변수 합치기
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 object타입 합치기(extend 하기)
type PositionX = {x:number};
type PositionY = {y:number};
type NewType = PositionX & PositionY

let position: NewType = { x: 10, y: 20}

// 같은 이름의 type 변수 재정의 불가능


// Q1
type Position1 = {x:number};
type Position2 = {y:number};
type positionType = Position1 & Position2

let position2: positionType = { x: 10, y: 20}

// Q2
type MyType = {
	color? : string,
	size : number,
	readonly position : number[]
}

let test: MyType = {
	size: 123,
	position: [1,2,3]
}

// Q3
// type User = {name:string, phone:number, email:string}

// Q4
type User = {name:string, phone:number, email:string}
type Adult = {adult:boolean}

type NewUser = User & Adult;

let 회원가입정보: NewUser = {
	name: "kim",
	adult:false,
	phone:1234,
	email:"aaa@aaa.com"
}