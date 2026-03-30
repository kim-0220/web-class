document.addEventListener("DOMContentLoaded",()=>{

    const header = document.querySelector("header")
    const currentCount = document.querySelector("#current-count")
    const rotateBox = document.querySelector(".rotate-box")
    const sections = document.querySelectorAll(".box>section")

    window.addEventListener("scroll",()=>{
        // 마우스 휠을 스크롤링 할 때 동작()=>{}을 함 즉, 스크롤바가 움직일 때 실행되는 소스코드
        
        let distance = window.scrollY

        console.log(distance)
        // 개발자모드로 콘솔창을 열고 스크롤링을 하면 숫자가 증감한다. (box를 5000px로 설정했으나 마우스를 끝까지 내려도 5000이라는 숫자가 나오지 않음)
        // 왜냐하면 스크롤링은 화면이 내려가는 것이고, 문서가 보이는 공간이 화면이다. scrollY값은 문서가 내려간 만큼의 수를 표시하는것이기 때문에 보이는 화면 높이 만큼은 내려갈 수 없다
        // 화면의 높이는 미지수

        currentCount.innerHTML = distance
        rotateBox.style.transform = `rotate(${distance/4}deg)`

        if(distance>=600){
            header.classList.add("on")
        }else{
            header.classList.remove("on")
        }

        sections.forEach(section=>{
            section.style.background = `url(./img/bg1.png) ${-distance/12}% 0% repeat-x`
        })
    })
    
})