var func = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
// 콜백함수(함수 안의 함수)
function 함수1(a) {
    a(); // 1. 함수1 내부 코드 a() 실행 됨
    // 2. 근데 파라미터를 a자리에 집어넣어서 함수2() 실행 됨
}
function 함수2() {
}
함수1(함수2);
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
};
function 만들함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
만들함수("010-1111-2222", cutZero, removeDash);
