// 클래스 특징

class Parent {

	// 접근제한자(외부 접근을 허용하는가? public만 외부 접근 가능.)
	// 타입스크립트만 가능
	public one  // 외부 접근 가능
	protected two // 내부나 외부에서 상속받았을 때 가능
	private three // 내부에서만 가능

	constructor() {
		this.one
		this.two
		this.three
	}
}

let p = new Parent();

class Child extends Parent {

	constructor(){
		super();
		this.one
		this.two
		// this.three 안됨
	}
}

interface Person {
	name: string
	age: number
}

let kim: Person




class Car {

	// constructor(public age: number)를 하면 age를 따로 지정하지 않아도 됨
	// age

	constructor(public age: number) {
		this.age = age;
	}
}

let car = new Car(10);

car.age




function Component(constructorFn?: Function) {

	// 클래스를 꾸며주는 로직 
	// component html, css
	// 컴포넌트를 만들어 주는 로직

	return constructorFn
}


@Component()
class AppComponent{

	// @Input() height: number;

	constructor(){

	}
}


// 앵귤러 타입스크립트

let a = 10;

@NgModule()
class App extends Parent {

	@Output() eventEmitter: any;
	
	constructor(private http: httpClient) {

	}
}