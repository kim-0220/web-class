document.addEventListener("DOMContentLoaded",()=>{

    const slides = document.querySelectorAll(".train>li")
    let count = 0

    setInterval(()=>{
        count++
        if(count>2){count=0}
        slides.forEach(li=>li.classList.remove("on"))
        slides[count].classList.add("on")
    },2500)
})