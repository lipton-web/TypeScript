# typeScript 컴파일러 설치 
`sudo npm install -g typescript`  
(window sudo 제외) 

또는  
`yarn init -y` package.json 생성  
`yarn add typescript ts-node`  타입스크립트생성과 노드환경에서(콘솔에서) 실행할 수 있음  
`yarn run tsc --init`  tsconfig.json 타입스크립트 설정 파일 생성

`yarn run tsc` 자바스크립트로 컴파일  

컴파일 하지 않고 TS로 실행하는 법  
`yarn run ts-node ./src/practice.ts`

`tsc -w` 입력하면 js로 자동변환

---

타입스크립트 컴파일러 실행  
타입스크립트 hello.ts 파일 js파일로 컴파일  
`tsc hello.ts`  
이렇게 컴파일 하면 구형 브라우저에서도 돌아갈 수 있게 es5 형식으로 바뀐다. 

es6 형식으로 바꾸기  
`tsc hello.ts --target es6`   
promise 사용하기  
`tsc hello.ts --lib es5,es2015.promise,es2015.iterable,dom`



`tsc hello.ts --target es6 --lib es2015,dom --module commonjs --showConfig`
--target es6로 컴파일 하면 노드에서는 돌아가지 않음.  
--module commonjs 로 컴파일해야 노드에서도 돌아 감.  
--showConfig 하면 json 형식으로 컴파일 옵션 볼 수 있음.  

# 컴파일 옵션 설정
`tsconfig.json` 파일 만들기  또는 `yarn run tsc --init`  
`tsc` 명령어만 입력하면 자동으로 변환