document.addEventListener("DOMContentLoaded",()=>{
    const tabs = document.querySelectorAll(".tabs>span")
    const tabDescriptons = document.querySelectorAll(".tab-descriptions>section")

    tabs.forEach(function(span,i){
        span.addEventListener("click",function(){
            tabs.forEach(tab=>tab.classList.remove("active"))
            // 일단 3개의 span태그에 있는 active라는 클래스를 다 지운다.
            span.classList.add("active")
            // 내가 클릭한 span태그에만 active라는 클래스가 추가된다.
            tabDescriptons.forEach(section=>section.classList.remove("active"))
            tabDescriptons[i].classList.add("active")
        })
        
    })
})