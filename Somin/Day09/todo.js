const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

// TODO-LIST 추가
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const todoListContent = document.createElement("li");
  todoListContent.className = "todo-content";

  const todoListSpan = document.createElement("span");
  todoListSpan.innerText = document.querySelector(".todo-input").value.trim();
  todoListSpan.className = "todo-span";

  const todoListDelete = document.createElement("button");
  todoListDelete.innerText = "X";
  todoListDelete.className = "delete";

  const todoListDone = document.createElement("input");
  todoListDone.type = "checkbox";

  todoListContent.appendChild(todoListDone);
  todoListContent.appendChild(todoListSpan);
  todoListContent.appendChild(todoListDelete);

  todoList.appendChild(todoListContent);
  todoInput.value = "";

  // 완료
  todoListDone.addEventListener("change", () => {
    todoListSpan.classList.toggle("done");
  });

  // 삭제
  todoListDelete.addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });
});
