document.addEventListener("DOMContentLoaded",function(){
    
    const btnPopup = document.querySelector("#btn-popup")
    const popup = document.querySelector(".popup")
    const modal = document.querySelector(".modal")
    const btnClose = document.querySelector("#btn-close")

    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
        modal.classList.add("on")
    })

    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
        modal.classList.remove("on")
    })

    const train = document.querySelector(".train")
    let count = 0

    setInterval(()=>{
        count++
        train.style.transition = `all 0.7s ease 0s`
        train.style.transform = `translateX(${-25*count}%)`
        if(count==3){
            setTimeout(()=>{
                train.style.transition = `none`
                // 애니메이션 없이 즉시 이동
                train.style.transform = `translateX(0%)`
                // 처음으로 순간이동
                count = 0
                // 다시 처음부터 시작
            },800)
            // 0.8초인 이유는 transition이 0.7초라서, 즉 애니메이션이 끝나고 리셋하기 위함이다.
        }
    },2500)
    // 정리하자면 2.5초마다 슬라이드가 이동하고, 0,1,2,3 순서로 이동하다가 3에서 멈춘 후 애니메이션 없이 0으로 순간 이동하며 다시 반복되는 구조다.
    // 이 js가 없으면 마지막에서 첫번째 슬라이드로 다시 돌아갈때 튀는 애니메이션이 발생하며, 위처럼 했을 때 사용자 입장에서 무한 슬라이드처럼 자연스럽게 보인다.
})