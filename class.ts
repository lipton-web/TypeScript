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