document.addEventListener("DOMContentLoaded",()=>{

    // 슬라이드 기능
    const slides = document.querySelectorAll('.train>li')
    let count = 0

    setInterval(()=>{
        count++
        if(count>2){count=0}
        slides.forEach(li=>li.classList.remove("on"))
        slides[count].classList.add("on")
    },2500)

    // 팝업 기능
    const btnPopup = document.querySelector("#btn-popup")
    const popup = document.querySelector(".popup")
    const btnClose = document.querySelector("#btn-close")
    const modal = document.querySelector(".modal")

    btnPopup.addEventListener('click',()=>{
        modal.classList.add("on")
        popup.classList.add("on")
    })
    btnClose.addEventListener('click',()=>{
        modal.classList.remove("on")
        popup.classList.remove("on")
    })



})

// 다시 공부 필요 쌤꺼 복사함 ㅎㅋ