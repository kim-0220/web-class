// 강사님꺼 복사한거
document.addEventListener("DOMContentLoaded",()=>{
    const tabs = document.querySelectorAll(".tabs>span")
    const tabDescriptions = document.querySelectorAll(".tab-descriptions>section")

    tabs[0].addEventListener("click",function(){
        tabs.forEach(tab=>tab.classList.remove("active"))
        // 일단 3개의 span태그에있는 active라는 클래스를 다 지운다.
        tabs[0].classList.add("active")
        // 내가 클릭한 span태그에만 active라는 클래스가 추가됨.
        tabDescriptions.forEach(section=>section.classList.remove("active"))
        tabDescriptions[0].classList.add("active")
    })
    // tabs[1].addEventListener("click",function(){
    //     tabs.forEach(tab=>tab.classList.remove("active"))
    //     // 일단 3개의 span태그에있는 active라는 클래스를 다 지운다.
    //     tabs[1].classList.add("active")
    //     // 내가 클릭한 span태그에만 active라는 클래스가 추가됨.
    //     tabDescriptions.forEach(section=>section.classList.remove("active"))
    //     tabDescriptions[1].classList.add("active")
    // })
    // tabs[2].addEventListener("click",function(){
    //     tabs.forEach(tab=>tab.classList.remove("active"))
    //     // 일단 3개의 span태그에있는 active라는 클래스를 다 지운다.
    //     tabs[2].classList.add("active")
    //     // 내가 클릭한 span태그에만 active라는 클래스가 추가됨.
    //     tabDescriptions.forEach(section=>section.classList.remove("active"))
    //     tabDescriptions[2].classList.add("active")
    // })
    // tabs[3].addEventListener("click",function(){
    //     tabs.forEach(tab=>tab.classList.remove("active"))
    //     // 일단 3개의 span태그에있는 active라는 클래스를 다 지운다.
    //     tabs[3].classList.add("active")
    //     // 내가 클릭한 span태그에만 active라는 클래스가 추가됨.
    //     tabDescriptions.forEach(section=>section.classList.remove("active"))
    //     tabDescriptions[3].classList.add("active")
    // })

    tabs.forEach(function(span,i){
        span.addEventListener("click",function(){
            tabs.forEach(tab=>tab.classList.remove("active"))
            // 일단 3개의 span태그에있는 active라는 클래스를 다 지운다.
            span.classList.add("active")
            // 내가 클릭한 span태그에만 active라는 클래스가 추가됨.
            tabDescriptions.forEach(section=>section.classList.remove("active"))
            tabDescriptions[i].classList.add("active")
        })
    })
    


    let fruits = ["사과","바나나","배","파인애플"]
    fruits.forEach(function(fruit,i){
        console.log(fruit)
        console.log(i)
    })

})

// 공부 필요 내용 하나도 못들었음