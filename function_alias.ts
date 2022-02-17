// 함수와 methods에 type alias 지정하는 법
// type alias에 함수 type 저장해서 쓰는 법
// 화살표 함수를 사용한다. () => {}
// 함수 표현식(변수 만들어 함수 사용)에만 type alias 사용가능
type 함수타입 = (a: string) => number;

let func: 함수타입 = function (a){
	return 10
}

// object 안에 함수만들수있음
// object 안의 함수 타입지정 하는 방법

// Q1.
type Member = {
	name : string,
  age : number,
	plusOne : (x: number) => number,
  changeName : () => void
}

let 회원정보: Member = {
  name : 'kim',
  age : 30,
  plusOne (x){
    return x + 1
  },
  changeName : () => {
    console.log('안녕')
  }
}
회원정보.plusOne(1);
회원정보.changeName();

// 콜백함수(함수 안의 함수)
function 함수1(a) {
	a() // 1. 함수1 내부 코드 a() 실행 됨
			// 2. 근데 파라미터를 a자리에 집어넣어서 함수2() 실행 됨
}
function 함수2() {

}
함수1(함수2)


// Q2, 
type CutType = (x:string) => string ;
const cutZero: CutType = function(x) {
	let result = x.replace(/^0+/, "");
	return result
}

type Remove = (x:string) => number;
const removeDash: Remove = function(x) {
	let result = x.replace(/-/g, "")
	return parseFloat(result)
}



// Q3
type 함수타입1 = (a:string) => string;
type 함수타입2 = (a:string) => number;


function 만들함수(a:string, func1: 함수타입1, func2: 함수타입2) {
	let result = func1(a);
	let result2 = func2(result);
	console.log(result2)
}
만들함수("010-1111-2222", cutZero, removeDash)

