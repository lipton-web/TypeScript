class Personal {
	
	// 타입 작성
	name: string;

	// class의 return 타입은 항상 object라서 타입지정할 이유 없음
	constructor(a: string){
		this.name = a;
	}

	// 프로토타입 만들기
	// Personal.prototype.함수 = function(){}
	함수(a: string) {
		console.log("안녕" + a);
	}
}

// 프로토타입
// Personal.prototype.함수 = function(){}

let 사람1 = new Personal("kim");
let 사람2 = new Personal("park");
console.log(사람2)
사람1. 함수("하이")


// Q1
class Car {
	model: string
	price: number
	constructor(a: string, b:number) {
		this.model = a;
		this.price = b;
	}
	tax(): number {
		return this.price/10
	}
}

let car1 = new Car("소나타", 3000)
console.log(car1)
console.log(car1.tax())

//Q2
class Word {
	num;
	str;
	constructor(...param){
		let nums: number[] = [];
		let strs: string[] = [];

		param.forEach((i)=>{
			if(typeof i === "string") {
				strs.push(i)
			} else {
				nums.push(i)
			}
		})

		this.num = nums;
		this.str = strs;
	}
}

let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park'] 