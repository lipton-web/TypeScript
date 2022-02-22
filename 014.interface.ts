// object 타입 지정 시 interface써도 가능
// interface 장정: extends로 복사 가능
// extends쓸 때 중복속성 발생하면 에러로 잡아줌

// type Square = {color:string, width:number} 는 아래와 동일하다
interface Square {color:string, width:number}

let 네모: Square = { color:"red", width : 100 }

interface Student {
	name: string
}
interface Teacher extends Student {
	// name: string,
	age: number
}

let 학생: Student = {name:"kim"}
let 선생: Teacher = {name:"kim", age:20}


// type으로 extends처럼 타입확장하기
// &기호(intersection type)
// 두 타입을 전부 만족하는 타입이라는 뜻
// interface도 &기호로 교차 타입 만들 수 있음
// & 쓸 때 중복속성 발생하면? 미리 에러 안나서 주의
type Animal2 = {name: string}
type Cat = {age:number} & Animal2


// type vs interface
// interface는 중복선언 가능
// type은 중복선언 불가능
// 외부 라이브러리같은 경우 interface 많이 씀 -> 추후에 타입에 더 추가하는게 쉬움
// 다른 사람이 이용많이 할 것 같으면 object 타입정할 때 interface쓴다.

interface Student2 {
	name: string
}
interface Student2 {
	score: number
}


interface Teacher extends Student {
	age : number
}