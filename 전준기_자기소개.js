const inputMbti = document.querySelector('#mbtiInput');

const myMbti = "istp"

function isItCorrect(){
    const answer = inputMbti.value;
    if(answer === myMbti){
        alert('정답입니다!');
    }else{
        alert('아니에요! 소문자로 써주세요!!');
        window.location.reload;
    }
}

function submit(e){
    if(e.key === 'Enter'){
        isItCorrect();
    }
}

inputMbti.addEventListener('keypress', submit);