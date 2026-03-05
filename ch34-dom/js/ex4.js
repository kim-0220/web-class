document.addEventListener("DOMContentLoaded",()=>{

    const btnNext = document.querySelector("#btn-next")
    const btnPrev = document.querySelector("#btn-prev")
    const train = document.querySelector(".train")

    let count = 0

    btnNext.addEventListener("click",()=>{
        count++
        // count 값을 1씩 증가시킨다.
        if(count>3){count=3}
        // count가 3이상이면 count에 3을 저장(수가 커져도 강제로 3을 넣기 때문에 더이상 오른쪽으로 넘어가지는 않음)
        // 이때 count를 0으로 저장하면 처음으로 돌아가서 무한 순환이 가능함 (현재 임의로 설정한 슬라이드 개수는 4개)
        train.style.transform = `translateX(${-25*count}%)`
        // train클래스가 왼쪽으로 1000px(25%)씩 이동하는 기능이 필요
        // 슬라이드 너비를 px로 고정하지 않고 % 단위를 사용하여 부모 요소 크기가 변해도 자동으로 대응(반응형 대응) 따라서, 슬라이드 개수나 레이아웃 변경 시 수정 범위 최소화 가능
    })

    btnPrev.addEventListener("click",()=>{
        count--
        // count 값을 1씩 감소시킨다.
        if(count<0){count=0}
        // count가 0이하면 count에 0을 저장(클릭하여 수가 -로 작아져도 강제로 0을 넣기 때문에 더이상 왼쪽으로 넘어가지 않음)
        train.style.transform = `translateX(${-25*count}%)`
        // train.style.transform = `translateX(${-1000*count}px)`
        // 슬라이드 개수가 4개인 상황에서 이를 %로 바꾸려면 100% / 4개 = 25%로 해야한다.(btnNext도 동일)
    })
})

// 정리하자면 count가 뱡향을 결정하고, count증가는 오른쪽 슬라이드 보기, count감소는 왼쪽 슬라이드 보기이다. 하지만 실제로는 train을 왼쪽으로 이동시키는 방식이기 때문에 항상 -가 붙는다.(translateX는 항상 왼쪽 이동)