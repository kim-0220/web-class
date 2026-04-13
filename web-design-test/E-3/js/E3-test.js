document.addEventListener("DOMContentLoaded",()=>{
    
    // popup
    const popup = document.querySelector(".popup")
    const btnPopup = document.querySelector("#btn-popup")
    const btnClose = document.querySelector("#btn-close")

    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    // slide
    const train = document.querySelector(".train")
    let count = 0

    setInterval(()=>{
        count++
        if(count>2){count=0}
        train.style.transform = `translateY(${-33.333*count}%)`
        // translateY는 슬라이드가 세로방향으로 이동. (+는 아래로, -는 위로) 
        // 1칸을 이동해야하는데 100%/3 = 33.333% 이기 때문에 해당 %만큼 이동하는것이고, - 인 이유는 위로 이동하기 때문이다.
    },2500)

})