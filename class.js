var Personal = /** @class */ (function () {
    // class의 return 타입은 항상 object라서 타입지정할 이유 없음
    function Personal(a) {
        this.name = a;
    }
    // 프로토타입 만들기
    // Personal.prototype.함수 = function(){}
    Personal.prototype.함수 = function (a) {
        console.log("안녕" + a);
    };
    return Personal;
}());
// 프로토타입
// Personal.prototype.함수 = function(){}
var 사람1 = new Personal("kim");
var 사람2 = new Personal("park");
console.log(사람2);
사람1.함수("하이");
// Q1
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
//Q2
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var nums = [];
        var strs = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                strs.push(i);
            }
            else {
                nums.push(i);
            }
        });
        this.num = nums;
        this.str = strs;
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park'] 
