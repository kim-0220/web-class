document.addEventListener("DOMContentLoaded",function(){
    // 문서 끝까지(body태그 끝까지) 읽고 난 뒤 1번 실행되는 소스코드
    const btnClosePopup = document.querySelector(".btn-close-popup")
    const popup = document.querySelector(".popup")
    btnClosePopup.addEventListener("click", ()=>{
        popup.classList.add("hide")
    })
    // 닫기 버튼과 팝업 자체를 js변수에 저장한 후 닫기 버튼을 클릭했을 때 popup클래스에 hide 클래스가 추가되어 팝업창이 숨겨지도록(보이지 않도록) 한다.
})