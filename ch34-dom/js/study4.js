// document.addEventListener("DOMContentLoaded",function(){})


// const btn1 = document.querySelector("#btn1")
// btn1.addEventListener("click", function(){
//     alert("안녕하세요")
// })

// const btn2 = document.querySelector("#btn2")
// const box = document.querySelector(".box")
// btn2.addEventListener("click", function(){
//     box.style.backgroundColor = "orange"
// })


// const btnFontBase = document.querySelector("#btn-font-base")
// btnFontBase.addEventListener("click",()=>{
//     alert()
// })

// 여기만 공부하면 study4. html css 완료니까 정복가능~

document.addEventListener("DOMContentLoaded",function(){

    const btn1 = document.querySelector("#btn1")
    btn1.addEventListener("click",function(){
        alert("안녕하세요")
    })

    const btn2 = document.querySelector("#btn2")
    const box = document.querySelector(".box")
    btn2.addEventListener("click",function(){
        box.style.backgroundColor = "lime"
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
    const btnSmallFont = document.querySelector("#btn-small-font")
    const html = document.querySelector("html")

    btnSmallFont.addEventListener("click",function(){
        if(basicFontSize<=minFontSize){
            alert(minFontSize+"픽셀 보다 작게 글씨를 줄일 수 없습니다.")
            return 
        }
        basicFontSize-=1
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`
    })

    const btnBigFont = document.querySelector("#btn-big-font")
    btnBigFont.addEventListener("click",function(){
        if(basicFontSize>=maxFontSize){
            alert(maxFontSize+"픽셀 보다 크게 글씨를 키울 수 없습니다.")
            return
        }
        basicFontSize+=1
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`
    })

    const btnFontBase = document.querySelector("#btn-font-base")
    btnFontBase.addEventListener("click",()=>{
        html.style.fontSize = originFontSize+"px"
        chip.innerHTML = `${originFontSize}px`
        basicFontSize = originFontSize
    })

})