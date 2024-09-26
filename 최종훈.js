//자바 진짜 너무 어렵다..............................
//이름 버튼 클릭시 console에 나옴!!
function asdf() {
  let year = 1993;
  let month = 4;
  let day = 15;
  console.log('생년월일은' + year + '년' + month + '월' + day + '일 입니다.')
};

//이름 색상 변경, 버튼 생성
const named = document.querySelector('#named');
named.style.color = "#0405";
const last = document.createElement("button");
last.textContent = "js코드로 생성!! 클릭 부탁해요";
named.append(last);
last.onclick = () => asdf();

//mbti 색상, 글자색 변경
const personality = document.querySelector("#personality");
personality.style.backgroundColor = "#ff06";
personality.style.color = "#ff1234";

//좋아하는 노래 색상, 글자색 변경
const music = document.querySelector("#music");
music.style.backgroundColor = "#f5f6";
music.style.color = "#ffffff";

//좋아하는 영화 글자색 변경
const movie = document.querySelector("#movie");
movie.style.color = "#ff1278";

//자기소개 첫 문단에 text 입력
const intro = document.querySelector("#intro");
intro.innerHTML ="<p>자바 너무 으립다....<br>innerhtml을 이용하여 text입력</p>" + intro.innerHTML;
