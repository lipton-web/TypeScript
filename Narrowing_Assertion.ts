// 애매한 타입은 Narrowing을 쓴다.
function 내함수1(x: number|string) {
	if(typeof x === "number") {
		return x + 1
	} else {
		return x + "1"
	}
}

console.log(내함수1(123));


function 내함수2(x: number|string) {
	let arr: number[] = [];
	if(typeof x === "number") {
		arr[0] = x;
	}
	console.log(arr)
}

내함수2(123);


// 
// assertion문법(타입 덮어쓰기)
// 여러개의 타입을 하나로 하고 싶을 때 사용
// 타입을 다른걸로 변경하는 것은 안됨
// 무슨 타입이 들어올지 100% 확실할 때(다른 타입을 넣으면 에러를 띄우지 못함)
function 내함수3(x: number|string) {
	let arr: number[] = [];

	arr[0] = x as number; // 변수를 number로 덮어 씌우기, number타입 됨

}

내함수3(123);



// Q1
function cleaning(x :(number|string)[]){

  let finish :number[] = [];

  x.forEach((x)=>{
    if (typeof x === 'string') {
      finish.push(parseFloat(x))
    } else {
      finish.push(x)
    }
  })

  return finish
}

console.log( cleaning([123,'3']) )

// Q2
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }
let 희준쌤 = { subject : ['english', 'art'] }
let 민수 = { hello : "hi" }

function teacher(x:{subject: string | string[]}) {

		if (typeof x.subject === "string") {
			return x.subject;
	} else if (Array.isArray(x.subject)) {
			return x.subject[x.subject.length - 1];
	} else {
			return console.error();
	}
}

console.log(teacher(희준쌤))