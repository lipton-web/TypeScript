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
