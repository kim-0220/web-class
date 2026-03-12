document.addEventListener("DOMContentLoaded",function(){
    
    const btnPopup = document.querySelector("#btn-popup")
    const popup = document.querySelector(".popup")
    const modal = document.querySelector(".modal")
    const btnClose = document.querySelector("#btn-close")

    btnPopup.addEventListener("click", ()=>{
        popup.classList.add("on")
        modal.classList.add("on")
    })

    btnClose.addEventListener("click", ()=>{
        popup.classList.remove("on")
        modal.classList.remove("on")
    })

    const train= document.querySelector(".train")
    let count = 0

    setInterval(()=>{
        count++
        train.style.transition = `all 0.7s ease 0s`
        train.style.transform = `translateX(${-25*count}%)`
        if(count==3){
            setTimeout(()=>{
                train.style.transition = `none`
                train.style.transform = `translateX(0%)`
                count = 0
            },800)
        }
    },2500)
})