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
    // 클래스가 없지만 미리 제거해 두는 것이 안전한 코드 작성 방식이기 때문에 remove를 먼저 한다. 즉, 상태를 확실하게 하나만 유지하기 위해서이다. 

    let arrayMonth = ["01월","02월","03월","04월","05월","06월","07월","08월","09월","10월","11월","12월"]
    let arrayDay = ["일","월","화","수","목","금","토"]

    const onday = document.querySelector(".onday")
    const ontime = document.querySelector(".ontime")

    function showTime(){
        // showTime()은 자바스크립트에 기본적으로 내장되어있는 표준함수는 아니지만, 웹페이지에서 실시간 디지털 시계를 구현할 때 개발자들이 관습적으로 자주 사용하여 만든 사용자 정의 함수이다.
        // 보통 이 함수는 현재 시간을 가져와서 화면에 표시하고, 1초마다 스스로를 다시 호출하여 시간이 계속 흘러가게 만드는 역할을 한다.
        let now = new Date()
        let month = now.getMonth()
        let date = now.getDate()<10?"0"+now.getDate():now.getDate()
        // 삼항 연산자(조건 ? 조건이 참일 때 값 : 조건이 거짓일 때 값)를 사용해서 date변수를 설정 
        // now.getDate()는 오늘 날짜의 일(day)를 가져온다. 이 숫자가 10보다 작은지 확인하여, 조건이 참이라면 문자열 "0"을 붙여 항상 두자리 숫자형식을 만들고, 조건이 거짓이면(오늘이 10일 이상이면) 그냥 숫자 그대로 쓰겠다는 의미이다.
        let day = now.getDay()
        let hour = now.getHours()<10?"0"+now.getHours():now.getHours()
        let minute = now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes()
        let second = now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds()

        onday.innerHTML = `${arrayMonth[month]} ${date}일 ${arrayDay[day]}요일`
        ontime.innerHTML = `${hour}:${minute}:${second}`
        // .innerHTML은 html 요소 안의 내용을 가져오거나 새 html로 바꿀 수 있는 속성이다. 이때 기존 내용은 모두 덮어쓰게 된다.

        if(getDayOrNight()){
            clock.classList.remove("night")
            clock.classList.add("day")
        }else{
            clock.classList.remove("day")
            clock.classList.add("night")
        }
        // getDayOrNight()는 낮인지 밤인지 판단하는 함수로, 반환값이 true면 낮 / false면 밤이다.
    }
    // showTime이라는 함수를 정의 (아직 실행되지 않았고, 브라우저에 `함수가 있다`라고 알려주는 것 뿐이다.)

    showTime()
    // 함수를 실제로 실행하는 부분 (소괄호를 붙이면 `지금 실행해라`라는 뜻이다.)

    setInterval(showTime,1000)
    // showTime 함수가 1초마다 반복 실행된다. 즉, showTime()을 1초마다 자동으로 호출하는 것과 동일하다.
    // 단, 소괄호()는 붙이지 않고 써야한다. 소괄호를 붙이면 즉시 실행되고 결과값이 들어가 버리기 때문에 `showTime`처럼 함수 자체를 전달해야 매번 호출 될 때 실행이 된다.

    function getDayOrNight(){
        let now = new Date()
        let hours = now.getHours()
        // 0~23 (24시간제로 표시)
        let minutes = now.getMinutes()
        // 0~59
        if((hours>9&&hours<18)||(hours==9&&minutes>=30)||(hours==18&&minutes<10)){
            // (10:00~17:59 or 9:30~9:59 or 18:00~18:09)
            return true
        }else{
            return false
        }
        // if조건문을 종합적으로 해석해보면 9:30~18:09은 true(낮, day)를 반환하고, 이외 18:10~9:29은 false(밤, night)를 반환한다는 의미다.

        // &&은 논리AND(그리고)연산자이다. 두 조건이 모두 참(true)일때만 전체가 true가 되고, 하나라도 거짓(false)이면 전체가 false가 된다. 
        // ==은 같다(equal)를 비교하는 비교 연산자이다. 이는 좌측과 우측 값이 같으면 true, 다르면 false를 반환한다.
        // ||는 논리OR(또는)연산자이다. 여러 조건 중 하나라도 참(true)이면 전체가 true가 되고, 모든 조건이 거짓(false)일 때만 전체가 false가 된다.
    }

    if(getDayOrNight()){
        clock.classList.add("day")
    }else{
        clock.classList.add("night")
    }
    // if조건문 안에 getDayOrNight()가 있기 때문에 함수 호출이 즉시 실행되며, 이것의 반환값에 따라 true 또는 false가 결정된다.
    // 조건문의 결과에 따라 clock.classList.add("day") 또는 .add("night")가 즉시 실행되며, 페이지가 로드될 때 바로 클래스가 추가된다.
    // 단, 페이지 로드 시 한 번만 실행되는 코드이다.

})

// let : 값 변경이 가능한 변수
// let으로 선언한 변수는 나중에 값을 다시 할당할 수 있고, 반복문이나 값이 바뀌는 변수에 사용된다.
// const : 값 변경이 불가능한 변수
// const는 한 번 값으로 넣으면 다시 변경할 수 없고, 선언할 때 반드시 값을 같이 넣어야 한다.
// key point ~ const는 변수 자체를 바꾸지 못하는 것이지 객체 내부 값을 바꿀수 있다. 하지만 객체 자체를 새로 할당하는 것은 불가능하다.