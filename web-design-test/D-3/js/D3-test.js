document.addEventListener("DOMContentLoaded",function(){

    const btnPopup = document.querySelector(".btn-popup")
    const popup = document.querySelector(".popup")
    const btnClose = document.querySelector("#btn-close")

    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    let count = 0
    const slides = document.querySelectorAll(".train>li")

    setInterval(()=>{
        count++
        if(count>2){count=0}
        slides.forEach(litag=>litag.classList.remove("on"))
        slides[count].classList.add("on")
    },2500)

    const tabs = document.querySelectorAll(".tabs>span")
    const tabDesc = document.querySelectorAll(".tab-desc>div")

    tabs.forEach((tab,i)=>{
        tab.addEventListener("click",()=>{
            tabs.forEach(tab=>tab.classList.remove("on"))
            tab.classList.add("on")
            tabDesc.forEach(desc=>desc.classList.remove("on"))
            tabDesc[i].classList.add("on")
        })
    })

})