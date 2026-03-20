document.addEventListener("DOMContentLoaded",function(){

    const btnPopup = document.querySelector("#btn-popup")
    const popup = document.querySelector(".popup")
    const modal = document.querySelector(".modal")
    const btnClose = document.querySelector("#btn-close")

    btnPopup.addEventListener("click",()=>{
        modal.classList.add("on")
        popup.classList.add("on")
    })

    btnClose.addEventListener("click",()=>{
        modal.classList.remove("on")
        popup.classList.remove("on")
    })

    const train = document.querySelector(".train")
    let count = 0

    setInterval(()=>{
        count++
        train.style.transition = `all 0.7s ease 0s`
        train.style.transform = `translateY(${-25*count}%)`
        if(count==3){
            setTimeout(()=>{
                count = 0
                train.style.transition = `none`
                train.style.transform = `translateY(0%)`
            },800)
        }
    },2500)
})