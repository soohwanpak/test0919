const boxes = document.querySelectorAll('.box1');
const button1 = document.querySelectorAll('button');
const tra = document.querySelectorAll('.box3');



//미션1 - 자기 이름을 클릭하면 색깔이 바뀐다.
function inter1(e) {
    if (e.target.classList.contains('box1')) {
        e.target.classList.toggle('done');
    }
}

boxes.forEach(function (box) {
    box.addEventListener('click', inter1);
});

//
//
//
//미션2 - “내 정보 자세히 확인” 버튼을 만들어서 클릭하면 내 정보를 더 자세히 출력해본다.
function inter2(e) {
    alert("내정보 더보기");
}

button1.forEach(function (button) {
    button.addEventListener('click', inter2);
});

//
//
// 미션3 - “나의 마음” 이라고 사각형을 만들고 마우스가 들어가면 빨간색, 나가면 파란색으로 바꾼다.
function inter3(e) {
    if (e.target.classList.contains('box3')) {
        e.target.classList.add('done1');
    }
}

function inter4(e) {
    if (e.target.classList.contains('box3')) {
        e.target.classList.remove('done1');
    }
}

tra.forEach(function (change) {
    change.addEventListener('mouseenter', inter3);
    change.addEventListener('mouseleave', inter4);
});


//
//
//
// 미션4 - input에 글자를 입력하고 글자의 길이가 10글자가 넘으면 빨간색으로 바꿔본다.

const maxColor = document.querySelectorAll('input');

function inter5(e) {
    if (e.target.value.length > 10) {
        e.target.classList.add('done2');
    } else {
        e.target.classList.remove('done2');
    }
}

maxColor.forEach(function (ewer) {
    ewer.addEventListener('input', inter5);
});


// 미션5 - 현재 스크롤이 30px을 넘었을 때 하단에 회색박스 하나를 만든다.

const scroop = document.querySelector('.box11');

function inter6(e) {
    if (window.scrollY > 30) {
        scroop.classList.add('done3');
    } else {
        scroop.classList.remove('done3');
    }
};

window.addEventListener('scroll', inter6);


