const form = document.querySelector('#form');
const input = document.querySelector('#item');
const todoList = document.querySelector('.todos');

const addTodo = (todo) => {
  todo.preventDefault();

  const inputValue = input.value;

  if (!inputValue) {
    alert('Please fill in the field');
  } else {
    const newTodo = document.createElement('div');
    newTodo.className = 'todo';
    newTodo.innerHTML = `
      <li>${inputValue}</li>
      <i class="fa-solid fa-xmark delete"></i>
  `;
    todoList.appendChild(newTodo);
    alert('todo added');
  }
  input.value = '';
};

const deleteTodo = (e) => {
  const todo = e.target;

  if (todo.classList.contains('delete')) {
    todo.parentElement.remove();
    alert('todo removed');
  }
};

form.addEventListener('submit', addTodo);
todoList.addEventListener('click', deleteTodo);
