// var hello = "hello";
// let hello2 = "hello2";

// // 1초 후에 이행이 되거나 거절이 되거나
// let timeoutPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("1 sec");
// 	}, 1000);
// })

// timeoutPromise.then(console.log);

// 함수 import 불러와서 쓰기
import add from "./util"

const value = add(1, 2);
console.log(value);