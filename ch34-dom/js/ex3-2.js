document.addEventListener("DOMContentLoaded",()=>{

    const tabs = document.querySelectorAll(".tabs>span")
    const tabDescriptions = document.querySelectorAll(".tab-descriptions>section")

    tabs.forEach(function(span,i){
    // 위를 해석해보면 `tabs안에 있는 모든 span을 순서대로 하나씩 꺼낸다.`는 뜻이고, 여기에서 span은 현재 탭, i는 탭의 번호(index)를 의미한다.
        span.addEventListener("click",function(){
            tabs.forEach(tab=>tab.classList.remove("active"))
            // 모든 tab에서 active클래스를 제거한다.
            span.classList.add("active")
            // 현재 클릭한 탭(span)에 active클래스를 추가한다.
            tabDescriptions.forEach(section=>section.classList.remove("active"))
            // 모든 section에서 active클래스를 제거한다.
            tabDescriptions[i].classList.add("active")
            // 클릭한 탭과 같은 번호(i)의 section에 active클래스를 추가한다.
        })
    })
})
// 실무에서는 ex3-1 방법보다 ex3-2 방법을 더 많이 사용한다~! 참고***