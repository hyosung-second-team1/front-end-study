
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const newTodoText = todoInput.value;
    if (newTodoText !== "") {
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                newLi.classList.add('completed');
            } else {
                newLi.classList.remove('completed');
            }
        });

        newLi.textContent = newTodoText;
        newLi.appendChild(checkbox);
        document.getElementById('todoList').appendChild(newLi);
        todoInput.value = ''; 
    }
}
