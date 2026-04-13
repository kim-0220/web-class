document.addEventListener("DOMContentLoaded",()=>{

    // slide
    const slides = document.querySelectorAll(".train>li")
    let count = 0

    setInterval(()=>{
        count++
        if(count>2){count=0}
        slides.forEach(li=>{li.classList.remove("on")})
        slides[count].classList.add("on")
    },2500)

    // popup
    const modal = document.querySelector(".modal")
    const popup = document.querySelector(".popup")
    const btnPopup = document.querySelector("#btn-popup")
    const btnClose = document.querySelector("#btn-close")

    btnPopup.addEventListener("click",()=>{
        modal.classList.add("on")
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        modal.classList.remove("on")
        popup.classList.remove("on")
    })
    
})