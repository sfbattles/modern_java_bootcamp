const toDoList = [{
  text: 'Learn Javascript',
  completed: false,
},
{ text: 'Learn Node.js',
  completed: true,
},
{ text: 'Learn HTML',
  completed: true
},
{ text: 'Learn CSS',
  completed: true
},  
{ text: 'Learn Bootstrap 4',
  completed: false
}];

let deleteToDoItem = function (currentList, searchItem) {
    const index = currentList.findIndex(function (todo, index) {
      return todo.text.toLowerCase() === searchItem.toLowerCase();
    } );  
    if (index !== -1) {
      currentList.splice(index,1); 
    } 
 }      

const thingsToDo = function (currentList) {
    return currentList.filter(function (toDoItem, index) {
     return !toDoItem.completed;
   });
};

//console.log(thingsToDo(toDoList));
const sortToDos = function (doList) {
  doList.sort(function (a,b) {
   if (!a.completed && b.completed) {
      return -1;
  } else if (!b.completed && a.completed) {
      return 1;
  } else {
      return 0;  //order is same   
  } 
})
}

const sortToDos1 = function (doList) {
  doList.sort(function (a,b) {
    if (a.completed < b.completed) 
      return -1;
    else if (b.completed < a.completed)
      return 1;
    else {
      return 0;
    }      
  })
}

//sortToDos(toDoList)
sortToDos1(toDoList)
console.log(toDoList);

/*console.log(deleteToDoItem (toDoList,'Learn node.js'));
toDoList.forEach(function (item,index) {
  console.log (item);
});
*/

