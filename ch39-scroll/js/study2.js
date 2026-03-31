document.addEventListener("DOMContentLoaded",()=>{

    const btnTop = document.querySelector(".btn-top")
    btnTop.addEventListener("click",()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    })

    const gnb = document.querySelector(".gnb")

    let lastScrollTop = 0
    window.addEventListener("scroll",()=>{
    // 스크롤바가 움직일 때 실행될 소스코드

        let scrollTop = window.pageYOffset || document.documentElement.scrollTop
        // boolean할 때 배움!! 작대기2개(||)는 논리연산자로 '또는'이라고 해석할 수 있으며, 하나만 true여도 true이다.
        // 예를들어, let scrollTop = 0 || 2라는 상황일때를 해석해보면 '0'은 false라고 취급되기 때문에, scrollTop의 값은 '2'라는 값이 도출된다.
        // 위처럼 쓰는 이유는 "window.pageYOffset"이 Chrome브라우저에는 존재하지만 firefox브라우저에는 존재하지 않기 때문에, 사용자가 어떤 브라우저로 접속하더라도 호환될 수 있도록 쓴다.
        // 즉, 호환성을 위해 만들어 놓은 소스코드

        if(scrollTop<lastScrollTop){
            console.log("마우스 휠 위로 올림")
            gnb.classList.add("on")
            btnTop.classList.add("on")
        }else{
            console.log("마우스 휠 아래로 내림")
            gnb.classList.remove("on")
            btnTop.classList.remove("on")
        }
        lastScrollTop = scrollTop
    })
})