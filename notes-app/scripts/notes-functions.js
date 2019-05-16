console.log(uuidv4())
//read existing notes from local storage
const getSavedNotes = function () {
  let notesJSON = localStorage.getItem('notes')
  try {
    return notesJSON ? JSON.parse(notesJSON) : []
  } catch (e) {
    return [] 
  }
  
}

//remove note from list
const removeNote = function(noteId) {
  const noteIndex = notes.findIndex(function (note) {
    console.log(note)
    return note.id === noteId    
  })
  if (noteIndex > -1) {  //found a match
    console.log(noteIndex)
    notes.splice(noteIndex,1)
  }
}

//generate DOM structure for a note
const generateNoteDOM = function (note) {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
    const statusEl = document.createElement('p')
    // const noteButton = document.createElement('button')
    // noteButton.textContent = 'x'
    // noteButton.className += 'removeNote'
    // noteEl.appendChild(noteButton)
    // noteButton.addEventListener('click', function (e) {
    //    removeNote(note.id)
    //    saveNotes(notes)
    //    renderNotes(notes,filters)
    // })
      if (note.title.length) {
        textEl.textContent = note.title;
      } else {
        textEl.textContent = 'Unnamed Note';                
      }
    textEl.classList.add('list-item__title') //adding class
      
    noteEl.appendChild(textEl)

    //setup the link
    noteEl.setAttribute('href',`/edit.html#${note.id}`)
    noteEl.classList.add('list-item')

    //setup status message
    console.log(note.updatedAt)
    statusEl.textContent= generateLastEdited(note.updatedAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

  return (noteEl)
}

//sort by one of 3 ways.
const sortNotes = function(notes, sortBy) {
  if (sortBy === 'byEdited') {
     return notes.sort(function (a,b) {
       if (a.updatedAt < b.updatedAt) {
         return 1
       } else if (a.updatedAt > b.updatedAt) {
         return -1
       } else 
       return 0;        
     })
   } 
   else if (sortBy === 'byCreated') {
    return notes.sort(function (a,b) {
      if (a.createdAt < b.createdAt) {
        return 1
      } else if (a.createdAt > b.createdAt) {
        return -1
      } else 
      return 0;        
    })
 } else if (sortBy === 'alphabetical') {
  return notes.sort(function (a,b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1
    } else {      
        return 0;        
    }
  })
 }
}  //end of function sort notes
const renderNotes = (notes, filters) => {
    const notesEl = document.querySelector('#notes');
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter(function (note) {
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase())})  
     
    notesEl.innerHTML = '';
    if (filteredNotes.length) {      
      filteredNotes.forEach(function (note, index) {
        const createdNoteElement = generateNoteDOM(note)
          notesEl.appendChild(createdNoteElement);
      })
    } else {
      const emptyMessage = document.createElement('p'); 
      emptyMessage.textContent = "No notes to show";
      emptyMessage.classList.add('empty-message');  //adding class to the empty message <p>
      notesEl.appendChild(emptyMessage);
    }
  }
//save notes to local storage
  const saveNotes = function(notes) {
    localStorage.setItem('notes',JSON.stringify(notes)) 
  }

  // Generate the last edited message
const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`
}