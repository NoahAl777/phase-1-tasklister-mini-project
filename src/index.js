document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    //select text inside form input
    handleTodo(form.querySelector('#new-task-description').value)
  })
});

function handleTodo(todo) {
  console.log(todo)
  // create new li element appended to ul with input as text content
  const ul = document.querySelector('ul')
  const li = document.createElement('li')
  ul.appendChild(li)
  // set li text content = input
  li.textContent = todo;
}