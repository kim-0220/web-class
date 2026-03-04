document.addEventListener("DOMContentLoaded",function(){

    const btnMenu = document.querySelector(".btn-menu")
    const btnMenuClose = document.querySelector(".btn-menu-close")
    const hiddenGnb = document.querySelector(".hiddenGnb")

    btnMenu.addEventListener("click",()=>{
        hiddenGnb.classList.add("on")
    })

    btnMenuClose.addEventListener("click",()=>{
        hiddenGnb.classList.remove("on")
    })
})

// addEventListener는 어떤 행동(이벤트)이 일어났을 때 실행하라는 의미이고, 기본 구조는 `요소.addEventListener("이벤트 종류", 실행할 내용)`이다.
// DOMContentLoaded는 html이 전부 다 읽히고 난 후에 준비되면 이 코드를 실행하라는 뜻이다.
// const는 변수를 만드는 키워드 즉, 값을 담는 상자다.(let처럼 선언한다고 생각하면 쉬움)
// document.querySelector("선택자")는 html에서 원하는 요소 하나를 찾아오는 기능이다. (선택자에는 class, id, div 등이 있음)
// classList.add("선택자")는 html요소에 클래스를 추가하라는 의미이고, classList.remove("선택자")는 "선택자" 즉, 클래스를 제거하라는 의미이다.

// 정리해보면 버튼과 메뉴를 찾아서 변수에 저장한 뒤, 버튼 클릭을 감지하여 메뉴버튼을 클릭하면 "on"클래스가 추가되고, 닫기버튼을 클릭하면 "on"클래스가 제거된다.
// 최종 : 모바일에서 메뉴버튼을 누르면 숨겨진 메뉴가 나오고, 닫기버튼ㅇ르 누르면 메뉴가 다시 숨겨지는 기능
// hiddenGnb를 변수로 만든 이유는 "on"클래스를 붙여서 요소를 편하게 쓰기 위함이다. (hiddenGnb라는 요소에 on이라는 이름을 붙여서 사용)