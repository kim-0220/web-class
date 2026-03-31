document.addEventListener("DOMContentLoaded",()=>{

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
        // 태그가 화면에 50% 이상 보일 때 triger
    })
    document.querySelectorAll(".ltr,.blur").forEach(tag=>{observer.observe(tag)})
})
// 선택한 태그가 화면에 들어오고 나가는 것을 감지하여 화면에 들어오면 보이게하고 화면 밖으로 나가면 안보이게 하는 소스
// ltr은 left to right의 줄임말로 왼쪽에서 오른쪽으로 오는 것을 의미한다.
// rtl은 right to left의 줄임말로 오른쪽에서 왼쪽으로 들어오는 것을 의미하며, 해당 애니메이션은 오른쪽으로 보내는 과정에서 가로 스크롤바가 생기기 때문에 가급적 피하는 것이 좋다.
// 새로고침 했을 때 자동으로 실행되는 것을 모듈화라고 한다.