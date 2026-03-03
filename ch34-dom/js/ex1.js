document.addEventListener("DOMContentLoaded",function(){
    // 문서 끝까지(body태그 끝까지) 읽고 난 뒤 1번 실행되는 소스코드
    const btnClosePopup = document.querySelector(".btn-close-popup")
    const popup = document.querySelector(".popup")
    btnClosePopup.addEventListener("click", ()=>{
        popup.classList.add("hide")
    })
})