document.addEventListener("DOMContentLoaded",()=>{

    const clock = document.querySelector(".clock")
    const buttonDay = document.querySelector("#day-mode")
    const buttonNight = document.querySelector("#night-mode")

    buttonDay.addEventListener("click",()=>{
        clock.classList.remove("night")
        clock.classList.add("day")
    })

    buttonNight.addEventListener("click",()=>{
        clock.classList.remove("day")
        clock.classList.add("night")
    })

    let arrayMonth = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]

})