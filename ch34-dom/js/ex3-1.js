document.addEventListener("DOMContentLoaded",function(){

    const tabs = document.querySelectorAll(".tabs>span")
    const tabDescriptions = document.querySelectorAll(".tab-descriptions>section")

    tabs[0].addEventListener("click",function(){
        // tabs[0]는 const로 만들어진 변수 tabs를 구성하는 목록(배열)의 코드들 중 0번째 즉, 가장 처음의 span태그를 의미한다.
        // addEventListener는 tabs[0]을 클릭하면 코드(function)를 실행한다는 뜻이다. 실행코드는 아래와 같다.

        tabs.forEach(function(item){
            item.classList.remove("active")
        })
        // tabs안에 있는 모든 span요소에서 active 클래스를 제거한다.
        // item(변수이름)이 가리키는 건 span(html태그들)이다.
        // forEach의 기본 문법: array.forEach(function(element){실행할 코드})
        // 이는 배열 안에 있는 모든 요소를 하나씩 꺼내서 코드를 실행한다는 의미다.

        tabs[0].classList.add("active")
        // 첫 번째(가장 처음의 span태그)에만 active라는 클래스를 추가한다.

        tabDescriptions.forEach(function(item2){
            item2.classList.remove("active")
        })
        // tabDescriptions안에 있는 모든 section요소에서 active 클래스를 제거한다.
        // item2(변수이름)가 가리키는 건 section(html태그들)이다.

        tabDescriptions[0].classList.add("active")
        // 첫 번째(가장 처음의 span태그)에만 active라는 클래스를 추가한다.
    })

    tabs[1].addEventListener("click",function(){
        tabs.forEach(function(item){
            item.classList.remove("active")
        })
        tabs[1].classList.add("active")
        tabDescriptions.forEach(function(item2){
            item2.classList.remove("active")
        })
        tabDescriptions[1].classList.add("active")
    })

    tabs[2].addEventListener("click",function(){
        tabs.forEach(function(item){
            item.classList.remove("active")
        })
        tabs[2].classList.add("active")
        tabDescriptions.forEach(function(item2){
            item2.classList.remove("active")
        })
        tabDescriptions[2].classList.add("active")
    })
})