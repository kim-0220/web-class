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
        if(count>2){count=0}
        train.style.transform = `translateX(${-25*count}%)`
    },3000)
})


// ???무한 슬라이드 졸려서 못들었음 ㅜㅜ