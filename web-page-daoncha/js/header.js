document.addEventListener("DOMContentLoaded",()=>{

    // 메뉴버튼을 누르면 header가 나오는 기능
    const btnMenu = document.querySelector(".btn-menu")
    const headerSmartHidden = document.querySelector(".header-smart-hidden")
    const btnClose =  document.querySelector(".btn-close")
    const gnbSmartList = document.querySelectorAll(".gnb-smart>li")

    btnMenu.addEventListener("click",()=>{
        headerSmartHidden.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        headerSmartHidden.classList.remove("on")
        gnbSmartList.forEach(tag=>tag.classList.remove("on"))
    })

    // 모바일에서 2depth menu 나오는 기능
    const btnMores = document.querySelectorAll(".gnb-smart li .btn-more")
    btnMores.forEach(span=>{
        span.addEventListener("click",()=>{
            span.parentElement.classList.toggle("on")
        })
    })
})