document.addEventListener("DOMContentLoaded",()=>{

    const header = document.querySelector("header")
    const currentCount = document.querySelector("#current-count")
    const rotateBox = document.querySelector(".rotate-box")
    const sections = document.querySelectorAll(".box>section")

    window.addEventListener("scroll",()=>{
        // window는 브라우저 전체 창으로 스크롤 기준이 되는 대상을 의미
        // addEventListener는 특정 이벤트가 발생했을 때 실행할 함수를 등록하는 메서드
        // "scroll"은 스크롤 이벤트로, 페이지를 위/아래로 움직일 때 발생
        // ()=>{}는 이벤트가 발생했을 때 실행되는 함수(콜백 함수)

        // 즉, 마우스 휠을 스크롤링 할 때 동작()=>{}을 함 즉, 스크롤바가 움직일 때 실행되는 소스코드
        
        let distance = window.scrollY
        // window.scrollY는 현재 문서의 세로 스크롤 위치이며 px단위이다. 즉, 얼마나 아래로 내려왔는지 숫자로 알려주는 값이다.

        console.log(distance)
        // 개발자모드로 콘솔창을 열고 스크롤링을 하면 숫자가 증감한다. (box를 5000px로 설정했으나 마우스를 끝까지 내려도 5000이라는 숫자가 나오지 않음) - 잘 작동하는지 확인용도
        // 왜냐하면 스크롤링은 화면이 내려가는 것이고, 문서가 보이는 공간이 화면이다. scrollY값은 문서가 내려간 만큼의 수를 표시하는것이기 때문에 보이는 화면 높이 만큼은 전부 내려갈 수는 없다. 즉, scrollY값 < 화면높이

        currentCount.innerHTML = distance
        // .innerHTML은 요소 안에 들어있는 내용을 읽거나 바꾸는 속성으로, currentCount라는 박스 안에 있는 내용을 distance값으로 덮어쓴다고 생각하면 된다.
        rotateBox.style.transform = `rotate(${distance/4}deg)`
        // distance로만 설정하면 너무 빠르게 회전하기 때문에 4 등으로 나누어 회전 속도를 조절하는 것이고, 숫자가 클수록 느리게 회전한다.
        // distance는 움직인 거리, /4는 속도 조절, deg는 회전 각도

        if(distance>=600){
            header.classList.add("on")
        }else{
            header.classList.remove("on")
        }

        sections.forEach(section=>{
            section.style.background = `url(./img/bg1.png) ${-distance/12}% 0% repeat-x`
        })
        // 스크롤할 때 bg이미지가 좌우로 움직이도록 만든 코드
        // forEach는 각 요소를 하나씩 반복 실행한다는 의미로, 현재 위의 코드에 따르면 모든 section요소에 동일한 효과를 적용한다는 의미다.
        // ${-distance/12}%는 배경의 X축(가로 위치)이며 '-'를 하면 왼쪽으로 이동하게 되므로, 결론적으로 스크롤할수록 배경이 왼쪽으로 이동한다는 의미다.
        // repeat-x는 가로방향으로만 반복한다는 의미다.
        // 위의 이러한 효과를 패럴랙스 효과라고 말하며, 요소는 그대로 있는데 배경만 따로 움직여 깊이감이 생기도록 하는 것이다.  
    })
    
})