//
//------------------------mbti 맞추기--------------------------
//
const inputMbti = document.querySelector('#mbtiInput');

const myMbti = "istp"

function isItCorrect() {
    const answer = inputMbti.value;
    if (answer === myMbti) {
        alert('정답입니다!');
    } else {
        alert('땡! 소문자로 써주세요!!');
        window.location.reload;
    }
}

function submit(e) {
    if (e.key === 'Enter') {
        isItCorrect();
    }
}
inputMbti.addEventListener('keypress', submit);
//
//-------------------이름 색 랜덤 바꾸기------------------------
//
const nameText = document.querySelector("#name span");

function get_random_integer(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
function changeNameColor(){
    let r = get_random_integer(0, 255);
    let g = get_random_integer(0, 255);
    let b = get_random_integer(0, 255);

    let rgb = "rgb("+ r + "," + g + "," + b + ")" ;
    document.getElementById("name").style.color = rgb;

}
nameText.addEventListener('click', changeNameColor);
