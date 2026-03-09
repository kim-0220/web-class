document.addEventListener("DOMContentLoaded",function(){

    const btnYes = document.querySelector(".btn-yes")
    const btnNo = document.querySelector(".btn-no")
    const popup = document.querySelector(".popup")
    const modal = document.querySelector(".modal")
    // btn-yes 클래스는 예 버튼, btn-no 클래스는 아니오 버튼, popup 클래스는 팝업 창, modal 클래스는 팝업 뒤에 깔리는(화면 전체를 덮는) 검은 레이어(배경)

    btnYes.addEventListener("click",function(){
        alert("삭제되었습니다.")
        popup.classList.add("blind")
        modal.classList.add("blind")
    })

    btnNo.addEventListener("click",function(){
        popup.classList.add("blind")
        modal.classList.add("blind")
    })

    modal.addEventListener("click",function(){
        popup.classList.add("blind")
        this.classList.add("blind")
        // 위의 경우 this는 해당 이벤트를 발생시킨 요소다. 따라서 이벤트가 `modal을 클릭했을 때`이기 때문에 this = modal로 생각하면 된다.
        // this는 현재 실행되고 있는 객체를 가리키는 키워드로, 지금 이 코드를 실행하고 있는 주인을 뜻한다.
        // 그러나 화살표함수는 자기만의 this를 만들지 않아서 바깥 scope의 this를 사용한다. 여기에서 `바깥 scope`란, 현재 코드보다 한 단계 위에 있는 코드 영역을 말한다.
        // scope는 변수나 함수가 접근 가능한 범위이다.
    })

})