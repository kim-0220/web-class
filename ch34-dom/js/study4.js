document.addEventListener("DOMContentLoaded",function(){

    const btn1 = document.querySelector("#btn1")
    btn1.addEventListener("click",function(){
        alert("안녕하세요! 반갑습니다 :)")
    })

    const btn2 = document.querySelector("#btn2")
    const box = document.querySelector(".box")
    btn2.addEventListener("click",function(){
        box.style.backgroundColor = "pink"
    })

    const btn3 = document.querySelector("#btn3")
    btn3.addEventListener("click",function(){
        box.style.backgroundColor = "initial"
    })

    const originFontSize = 20
    let basicFontSize = 20
    let minFontSize = 14
    let maxFontSize = 26
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

// study4 html이랑 css는 끝났고! js 내용은 완벽! 공부해서 해설만 잘 쓰면 됨~