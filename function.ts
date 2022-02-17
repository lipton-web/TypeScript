function 내함수(x? :number) :number { 
  return x * 2 
}  

// 내함수(2)

function sayHi(x? :string ){
  if (x) {
    console.log('안녕하세요 ' + x)
  } else {
    console.log('왜입력안함')
  }
} 

function 자릿수세기(x :number | string) :number {
  return x.toString().length
} 

function marry(pay: number, home:boolean, karma:string) : string {
	let homeScore = 0
	let karmaScore = 0
	if(home) {
		homeScore = 500
	}
	if(karma === "상") {
		karmaScore = 100
	}
	if(pay + homeScore + karmaScore >= 600) {
		return "결혼가능"
	} else {
		return null
	}
}

console.log(marry(300, false, '중'))