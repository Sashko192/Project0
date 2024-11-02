const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const taskInput = document.getElementById('task-input')

// Функція для створення нового TODO
function newTodo() {
  const taskText = taskInput.value.trim()

  if (taskText === '') {
    alert('Please enter a task')
    return
  }

  // Створення нового елемента списку
  const todoItem = document.createElement('li')
  todoItem.className = classNames.TODO_ITEM

  // Додавання чекбоксу
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.className = classNames.TODO_CHECKBOX
  checkbox.addEventListener('change', updateUncheckedCount)

  // Додавання тексту задачі
  const text = document.createElement('span')
  text.className = classNames.TODO_TEXT
  text.textContent = taskText

  // Додавання кнопки видалення
  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'
  deleteButton.className = classNames.TODO_DELETE
  deleteButton.onclick = function () {
    todoItem.remove()
    updateCounts()
  }

  // Додавання елементів до списку
  todoItem.appendChild(checkbox)
  todoItem.appendChild(text)
  todoItem.appendChild(deleteButton)
  list.appendChild(todoItem)

  // Очищення поля вводу
  taskInput.value = ''

  // Оновлення лічильників
  updateCounts()
}

// Функція для оновлення кількості задач
function updateCounts() {
  const totalTodos = list.children.length
  const uncheckedTodos = list.querySelectorAll(`.${classNames.TODO_CHECKBOX}:not(:checked)`).length

  itemCountSpan.textContent = totalTodos
  uncheckedCountSpan.textContent = uncheckedTodos
}

// Функція для оновлення кількості невідмічених задач
function updateUncheckedCount() {
  const uncheckedTodos = list.querySelectorAll(`.${classNames.TODO_CHECKBOX}:not(:checked)`).length
  uncheckedCountSpan.textContent = uncheckedTodos
}
