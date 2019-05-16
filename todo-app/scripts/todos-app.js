let toDoList = getSavedTodos()

const filters = {
  searchText: '',
  hideCompleted: false
}

renderToDoes(toDoList,filters)

document.querySelector('#filter-todos').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderToDoes(toDoList,filters)
})

document.querySelector('#todo-form').addEventListener('submit', function (e) {
  e.preventDefault()
  const inputtedText = e.target.elements.currentToDo.value.trim()
  if (inputtedText.length) { //makes sure todo item not blank to push before pushing
    toDoList.push({
     id: uuidv4(), 
     text: inputtedText,
     completed: false 
    });
    saveTodos(toDoList) 
    e.target.elements.currentToDo.value = ''
    renderToDoes(toDoList,filters)
  }
})

document.querySelector('#hide-completed').addEventListener('change',function(e){
  filters.hideCompleted = e.target.checked
  renderToDoes(toDoList,filters)
})





