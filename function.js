function 내함수(x) {
    return x * 2;
}
// 내함수(2)
function sayHi(x) {
    if (x) {
        console.log('안녕하세요 ' + x);
    }
    else {
        console.log('왜입력안함');
    }
}
function 자릿수세기(x) {
    return x.toString().length;
}
function marry(pay, home, karma) {
    var homeScore = 0;
    var karmaScore = 0;
    if (home) {
        homeScore = 500;
    }
    if (karma === "상") {
        karmaScore = 100;
    }
    if (pay + homeScore + karmaScore >= 600) {
        return "결혼가능";
    }
}
marry(700, false, '중');
