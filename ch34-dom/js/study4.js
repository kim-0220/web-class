document.addEventListener("DOMContentLoaded",function(){

    const btn1 = document.querySelector("#btn1")
    btn1.addEventListener("click",function(){
        alert("안녕하세요! 반갑습니다 :)")
    })
    // id가 btn1인 것을 찾아서 클릭 이벤트를 등록하여 클릭을 했을 때 alert이 실행될 수 있도록 한다.
    // 따라서 id가 btn1인 `인사시키기`버튼을 클릭하면 "안녕하세요! 반갑습니다 :)" 팝업창이 뜬다.

    const btn2 = document.querySelector("#btn2")
    const box = document.querySelector(".box")
    btn2.addEventListener("click",function(){
        box.style.backgroundColor = "pink"
    })
    // btn2도 btn1과 동일한 프로세스로 진행되며, box클래스를 box라는 (값 변경이 불가능한)변수로 선언하여 배경색 스타일을 핑크색으로 바꾼다.

    const btn3 = document.querySelector("#btn3")
    btn3.addEventListener("click",function(){
        box.style.backgroundColor = "initial"
    })
    // btn3은 id가 btn3인것을 찾아서 클릭을 했을 때 함수가 실행되도록 하는 것이고, 실행되는 함수는 box클래스의 배경색 스타일을 css기본값으로 되돌리는 것이다.

    const originFontSize = 20
    let basicFontSize = 20
    let minFontSize = 14
    let maxFontSize = 26
    // 위 4가지는 초기설정으로, originFontSize는 기본글씨, basicFontSize는 현재글씨, minFontSize는 최소, maxFontSize는 최대이다.
    const chip = document.querySelector(".chip")
    // 클래스 chip은 사용자가 현재 글씨 크기를 화면에서 확인하도록 하는 역할이다.
    // 작은 알약 모양 정보 UI를 보통 chip이라고 부른다. 추가적으로 알림숫자는 badge, 카테고리는 tag, 설명텍스트는 label이라는 클래스 명을 보편적으로 사용한다.
    const html = document.querySelector("html")
    // 클래서 html은 실제 글씨 크기(font-size)를 변경하는 역할이다.
    // 웹에서는 html의 font-size가 전체 글씨크기의 기준이 되는 경우가 많기 때문이다.

    const btnSmallFont = document.querySelector("#btn-small-font")
    // 해석하면, "글씨-"버튼을 js에서 사용할 수 있도록 가져온다는 뜻이다.
    btnSmallFont.addEventListener("click",function(){
        if(basicFontSize<=minFontSize){
            alert(minFontSize + "px보다 작게 글씨를 줄일 수 없습니다.")
            return
        }
        basicFontSize-=1
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`
    })
    // 클릭 이벤트를 등록하여 버튼 클릭시 function을 실행시켜 글씨크기를 변경한다.
    // if 조건문을 보면 현재글씨크기가 최소글씨크기보다 작거나 같으면 alert경고창을 표시하고, 함수 실행을 멈추어(return) 더이상 글씨 크기가 줄이들지 않게 막는 역할을 한다.
    // .innerHTML은 js에서 html 내용을 읽거나 바꾸는 가장 기본적인 DOM기능이다. 특징으로는 html 태그도 넣을 수 있다는 것이고(html태그 고유속성이 적용), 주의할 점은 기존 내용을 전부 지우고 새로 넣는다는 것이다.
    // basicFontSize-=1은 버튼을 클릭했을때 1씩 줄어들게 하는 것이며, chip.innerHTML로 화면에 보이는 숫자 표시를 변경하고 html.style.fontSize로 페이지 전체의 실제 글씨 크기를 바꾼다.

    const btnBigFont = document.querySelector("#btn-big-font")
    btnBigFont.addEventListener("click",function(){
        if(basicFontSize>=maxFontSize){
            alert(maxFontSize + "px보다 크게 글씨를 키울 수 없습니다.")
            return
        }
        basicFontSize+=1
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`
    })

    const btnFontBase = document.querySelector("#btn-font-base")
    btnFontBase.addEventListener("click",function(){
        basicFontSize = originFontSize
        chip.innerHTML = `${originFontSize}px`
        html.style.fontSize = `${originFontSize}px`
    })

})
// 위 내용을 모두 포함하는 document.addEventListener("DOMContentLoaded",function(){}는 html이 모두 로딩된 후에 js를 실행한다는 의미다.
// 해당 내용이 필요한 이유는 js가 먼저 실행됐을 시에 html태그가 모두 만들어지기 전이라면 오류가 생길 수 있기 때문이다.