document.addEventListener("DOMContentLoaded",()=>{

    // popup
    const btnPopup = document.querySelector("#btn-popup")
    const popup = document.querySelector(".popup")
    const btnClose = document.querySelector("#btn-close")
    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    // slide
    // 3초마다 .train>li 태그 3개가 on클래스가 지워지고 순번에 맞는 li태그한테 on클래스가 들어가면 됨
    const slides = document.querySelectorAll(".train>li")
    let count = 0
    setInterval(()=>{
        count++
        if(count>2){count=0}
        slides.forEach(slide=>{slide.classList.remove("on")})
        // 3개의 li태그에 on클래스를 지운다.
        slides[count].classList.add("on")
    },2500)

    // 탭메뉴
    const tabs = document.querySelectorAll(".tabs>span")
    const tabDescs = document.querySelectorAll(".tab-desc>div")

    tabs.forEach((tab,i)=>{
        tab.addEventListener("click",()=>{
            //2개의 탭내용에 on클래스를 다 지워
            tabDescs.forEach(div=>{div.classList.remove("on")})
            tabDescs[i].classList.add("on")
            tabs.forEach(span=>{span.classList.remove("on")})
            tab.classList.add("on")
        })
    })

})

// <!-- 다시 공부 필요 쌤꺼 복사함 ㅎㅋ -->
