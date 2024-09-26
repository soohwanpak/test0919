const newHabit = document.querySelector('#PR');

function addword (text){
  const li = document.createElement("li");
  li.textContent = text;
  newHabit.append(li);
}

addword()
addword("앞으로의 취미를 새로 만들어볼까 합니다")
addword("밥먹고 코딩하기")
addword("일어나서 코딩하기")
addword("자기전에 코딩하기")
addword("언제까지? 될때까지")