// Literal Types
// 더 엄격한 타입지정 가능
// 변수에 뭐가 들어올지 더 엄격하게 관리가능
// 에디터 자동완성
let str: "kim" | "park";
let num: 123;

function 함수(a: "가위"|"바위"|"보"): "(가위"|"바위"|"보")[] {
	return ["가위"]
}
함수("가위")

// const 변수의 한계
// literal type은 const 변수와 유사하게 사용가능
var 자료 = {name : "kim"} as const

function 내함수(a: "kim"){

}
내함수("kim")

