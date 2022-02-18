var 제목 = document.querySelector("#title");
제목.innerHTML = "반가워요";
// -> Element | null 타입이다.(타입스크립트는 정확한걸 좋아해서 빨간줄 표시)
// HTML 조작 시 narrowing 하는 방법 5개
// narrowing 하는 법
// 1
if (제목 != null) {
    제목.innerHTML = "반가워요";
}
// 2. instanceof 연산자(가장 많이 씀)
if (제목 instanceof Element) { // 제목이 Element의 자식이냐
    제목.innerHTML = "반가워요";
}
// 3. as 사용
제목 = document.querySelector("#title"); // document.querySelector("#title")을 element로 간주한다.
제목.innerHTML = "반가워요";
// 4. 오브젝트에 붙이는 ?
// 제목에 innerHTML이 있으면 출력, 없으면 undefined
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
    제목.innerHTML = "반가워요";
}
// 5. tsconfig.json에서	"strictNullChecks": false로 바꾼다.
// a태그의 href 링크 바꾸기
// Q2
var 링크 = document.querySelectorAll(".link");
링크.forEach(function (link) {
    if (link instanceof HTMLAnchorElement) {
        link.href = "https://kakao.com";
    }
});
// 타입스크립트의 상세타입, 태그마다 다름
// <a>태크
HTMLAnchorElement;
// <h1>
HTMLHeadingElement;
// <button>
HTMLButtonElement;
// 이벤트리스너
var 버튼 = document.querySelector("#button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
});
// Q1
var 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "https://vignette.wikia.nocookie.net/parody/images/a/ad/Pikachu_Waving.png/revision/latest/scale-to-width-down/185?cb=20161107031732";
}
// Q2
