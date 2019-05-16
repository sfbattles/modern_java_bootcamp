'use strict'

//get saved todo List from localStorage
let getSavedTodos = function() {
    const toDoJSON = localStorage.getItem('toDoList')
    try {
      return toDoJSON ? JSON.parse(toDoJSON) : []  
    } catch (e) {
      return []
    }
    
}

let saveTodos = function (toDoList) {
    localStorage.setItem('toDoList',JSON.stringify(toDoList))  
}

let renderToDoes = (ListOfToDoes, currentFilter) => {
    const todoEl = document.querySelector('#todolist')
    const filteredToDoes = ListOfToDoes.filter((toDoItem) => {
      const searchTextMatch = toDoItem.text.toLowerCase().includes(currentFilter.searchText.toLowerCase())
      const hideCompletedMatch = !toDoItem.hideCompleted || !toDoItem.completed 
      return  searchTextMatch && hideCompletedMatch
    })
    
    const incompleteToDos = toDoList.filter((toDoItem) => {
      return !toDoItem.completed ;  
    });
    if (toDoList.length) {
      todoEl.innerHTML = ''
      todoEl.appendChild(generateSummaryDOM(incompleteToDos))
  
      filteredToDoes.forEach((element) => {        
        todoEl.appendChild(generateTodoDOM(element));
      })
    } else {
      
      const emptyMessage = document.createElement('p')
      emptyMessage.textContent = 'No To-Dos to Show'
      emptyMessage.classList.add('empty-message')
      document.querySelector('#todolist').appendChild(emptyMessage)
  }
  }

  const removeToDoItem = function (toDoId) {
    console.log(toDoId)
    const toDoIndex = toDoList.findIndex(function (eachToDo) {
       return eachToDo.id === toDoId
    })
    if (toDoIndex > -1) {   //return -1 if the id was not found in array 0 is a valid array position 
      toDoList.splice(toDoIndex,1)     
    }   
  }

  const toggleToDo = function (toDoId) {
    const toDoIndex = toDoList.findIndex(function (eachToDo) {
      return eachToDo.id === toDoId
    })
    if (toDoIndex > -1) {   //return -1 if the id was not found in array 0 is a valid array position 
      toDoList[toDoIndex].completed = !toDoList[toDoIndex].completed
    } 
  }

  const generateTodoDOM = function (element)  {
    const newLabelToDo = document.createElement('label')
    const containerEl = document.createElement('div')
    const newCheckBox = document.createElement('input')
    const newDomElement = document.createElement('span')
    const removeButtonElement = document.createElement('button')
    
    newCheckBox.setAttribute('type','checkbox')
    newCheckBox.checked = element.completed
    containerEl.appendChild(newCheckBox)
    newCheckBox.addEventListener('change', (e) => {
      toggleToDo(element.id)
      saveTodos(toDoList)
      renderToDoes(toDoList,filters)
    })

 //setup todo text
    newDomElement.textContent = element.text
    containerEl.appendChild(newDomElement)

    //setup container 
    newLabelToDo.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    newLabelToDo.appendChild(containerEl)

    //Setup remove buttons
    removeButtonElement.textContent = "remove"
    removeButtonElement.classList.add('button', 'button--text')
    newLabelToDo.appendChild(removeButtonElement)
    removeButtonElement.addEventListener('click',function (e) {
       removeToDoItem(element.id)
       saveTodos(toDoList)
       renderToDoes(toDoList,filters)
    })
    
    return newLabelToDo
  }

  const generateSummaryDOM  = function (incompleteToDos) {
    let totalToDo = document.createElement('h2'); 
    totalToDo.classList.add('list-title') 
      if (incompleteToDos.length > 1) {
        totalToDo.textContent = `You have ${incompleteToDos.length} items to do`;
      } else {
        totalToDo.textContent = `You have ${incompleteToDos.length} item to do`;
      } 
    return totalToDo 
  }