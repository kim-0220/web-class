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
    // 위 4가지는 초기설정으로, originFontSize는 기본글씨, basicFontSize는 현재글씨, minFontSize는 최소, maxFontSize는 최대
    const chip = document.querySelector(".chip")
    const html = document.querySelector("html")

    const btnSmallFont = document.querySelector("#btn-small-font")
    btnSmallFont.addEventListener("click",function(){
        if(basicFontSize<=minFontSize){
            alert(minFontSize + "px보다 작게 글씨를 줄일 수 없습니다.")
            return
        }
        basicFontSize-=1
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`
    })

    const btnBigFont = document.querySelector("#btn-big-font")
    btnBigFont. addEventListener("click",function(){
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