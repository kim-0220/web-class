document.addEventListener("DOMContentLoaded",()=>{

    // "스크롤 트리거 애니메이션" 패턴
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("on")
                // 태그가 화면에 들어왔을 때
            }else{
                entry.target.classList.remove("on")
                // 태그가 화면 밖으로 나갔을 때
            }
        })
    },{
        threshold:0.5
        // 언제 실행할지 기준
        // 태그가 화면에 50% 이상 보일 때 triger
    })
    // new IntersectionObserver(()=>{}, options) 구조
    // (entries)=>{} 콜백함수는 상태가 바뀔 때 실행되며, 옵션은 언제 실행할지의 기준이다.
    // IntersectionObserver는 요소가 화면에 보이는 순간 자동으로 감지해서 알려주는 시스템이다.

    document.querySelectorAll(".ltr,.blur").forEach(tag=>{observer.observe(tag)})
    // observer.observe(tag)는 꼭 같이 써야하는 코드로 observer만 만들면 끝이 아니고 반드시 대상을 등록해야 한다.

})
// entries는 관찰 중인 요소들의 상태 정보 묶음(배열)이다.
// entry 안에 들어있는 것은 entry.target(실제 요소) / entry.isIntersecting(보이는지 여부. true or false) / entry.intersectionRatio(얼마나 보이는지 0~1)이다.
// 결론적으로 entry는 "이 요소가 지금 화면에 얼마나 보이고 있다"를 뜻한다.

// 선택한 태그가 화면에 들어오고 나가는 것을 감지하여 화면에 들어오면 보이게하고 화면 밖으로 나가면 안보이게 하는 소스코드

// ltr은 left to right의 줄임말로 왼쪽에서 오른쪽으로 오는 것을 의미한다.
// rtl은 right to left의 줄임말로 오른쪽에서 왼쪽으로 들어오는 것을 의미하며, 해당 애니메이션은 오른쪽으로 보내는 과정에서 가로 스크롤바가 생기기 때문에 가급적 피하는 것이 좋다.

// 위의 js는 복붙해서 사용하면 되는 코드이며, 사용 시 .ltr등 클래스명만 추가 및 삭제하면서 사용하면 된다. 이러한 형태를 '모듈화'라고한다.
// 모듈화(Modularization)란, 프로그램을 기능별로 나누어 독립적인 단위(모듈)로 구성 및 관리하는 것이다.
// 모듈화를 하는 이유는 유지보수가 쉽고, 재사용이 가능하며, 협업에 유리하고, 코드 가독성이 향상되기 때문이다.