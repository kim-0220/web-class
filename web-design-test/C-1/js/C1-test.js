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
    const slides = document.querySelector(".train>li")
    let count = 0
    // 현재 보여줄 슬라이드 번호로 처음에는 0이므로, 첫번째 슬라이드를 의미한다.

    setInterval(()=>{
    // setInterval은 일정시간마다 동작을 반복실행하는 코드
        count++
        // 슬라이드 번호가 1씩 증가함을 의미하며 다음 두번째 슬라이드로 이동한다.
        if(count>2){count=0}
        // if(조건){실행코드} - 기본구조
        // 즉 count가 2보다 크면(true면), 중괄호{}안에 있는 코드를 실행하라는 의미
        // 자연어로 바꾸면 "만약 count가 2보다 크면 count를 0으로 다시 설정하라"는 뜻
        // 슬라이드 무한 반복이 가능
        slides.forEach(slide=>{slide.classList.remove("on")})
        // forEach는 slides안의 요소들을 하나씩 꺼내서 반복 실행한다는 의미
        // 즉, slides 안의 요소를 하나씩 꺼내서 그 요소의 on 클래스를 제거한다는 뜻
        slides[count].classList.add("on")
        // 슬라이드들 중에서 count번째 요소 하나 선택해서 on 클래스를 더한다는 뜻
    },2500)
    // 최종 결론 : setInterval함수로 2.5초마다 위 코드(동작)를 반복실행한다.


    // tab menu
    const tabs = document.querySelectorAll(".tabs>span")
    const tabDesc = document.querySelectorAll(".tab-desc>div")

    tabs.forEach((tab,i)=>{
    // tab은 tabs 배열 중 한 개의 요소를 의미. i는 순번을 의미
        tab.addEventListener("click",()=>{
            tabDesc.forEach(div=>{
                div.classList.remove("on")
            })
            tabs.forEach(span=>{
                span.classList.remove("on")
            })
            tabDesc[i].classList.add("on")
            // i는 클릭한 탭의 위치이고, 그 위치와 같은 콘텐츠를 찾기 위해 tabDescs[i]를 사용하는 것이다.
            tabs.classList.add("on")
        })
        // 위 구조의 전제조건은 탭 개수와 컨텐츠의 개수가 동일해야하며, 순서가 정확히 일치해야 한다는 것이다.
    })
})