const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const modifiedElement = document.querySelector('#modified-time')

const noteId = location.hash.substring(1) //strips off first character which is the hash.
let notes = getSavedNotes()

let note = notes.find(function (note,index) {
    return note.id === noteId
})

if (!note) {  //if no note run this code note ===undefined
  location.assign('/index.html')  
}

let updatedAt = moment(note.updatedAt).fromNow()

titleElement.value = note.title
modifiedElement.textContent = `Last edited ${updatedAt}`
bodyElement.value = note.body

titleElement.addEventListener('input', function (e) {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    updatedAtInDOM(note)
    saveNotes(notes)    
})
bodyElement.addEventListener('input', function (e) {
  note.body = e.target.value
  note.updatedAt = moment().valueOf()
  updatedAtInDOM(note)
  saveNotes(notes)
})

const updatedAtInDOM = function (note)

{
  let updatedAt = moment(note.updatedAt).fromNow()
  modifiedElement.textContent = `Richard edited ${updatedAt}`
}

document.querySelector('#remove-button').addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
      notes = JSON.parse(e.newValue ) 
      notes.updatedAt = moment.valueOf()

      let note = notes.find(function (note,index) {
        return note.id === noteId
    })
    
    if (!note) {
      location.assign('/index.html')  
    }
    
    titleElement.value = note.title
    console.log('Richard')


    updatedAtInDOM(note)
    bodyElement.value = note.body
    
    }
  
})