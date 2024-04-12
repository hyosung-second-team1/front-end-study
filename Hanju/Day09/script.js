let todoIndex = 0;
const todoList = document.querySelector(".todo-list")
const todoInput = document.querySelector(".input-todo");
const regBtn = document.querySelector(".btn-reg");


// 이벤트 등록 - 할 일 추가
regBtn.addEventListener("click", () => {
  // 빈값이면 반환
  if (!todoInput.value.trim()) {
    console.log("빈 값")
    return;
  }

  // p태그 설정
  const pTag = document.createElement("p");
  pTag.className += "todo-item";
  pTag.id = "todo-" + todoIndex++;
  // 체크박스 설정
  const checkTag = document.createElement("input");
  checkTag.type = "checkbox";
  checkTag.className += "todo-check";
  checkTag.addEventListener("click", () => {
    const spanClass = document.querySelector(`#${pTag.id} span`).classList;
    if (checkTag.checked) {
      spanClass.add("done");
    } else {
      spanClass.remove("done");
    }
  })
  pTag.appendChild(checkTag);
  // 텍스트 설정
  const spanTag = document.createElement("span");
  checkTag.className += "todo-text";
  spanTag.textContent = todoInput.value;
  pTag.appendChild(spanTag);
  // 삭제 버튼 설정
  const delTag = document.createElement("button");
  delTag.className += "btn-del";
  delTag.textContent = "x";
  delTag.addEventListener("click", () => {
    pTag.remove();
  })
  pTag.appendChild(delTag);

  // 요소 추가하고 input 비우기
  todoList.appendChild(pTag);
  todoInput.value = "";
});

// 함수 - 한 일 표시
