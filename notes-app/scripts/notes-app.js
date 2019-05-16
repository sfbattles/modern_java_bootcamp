let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)
document.querySelector('#create-note').addEventListener('click', function (e) {
    const uuid = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: uuid,
        title: '',
        body: '',
        updatedAt: timestamp,
        createdAt: timestamp
    })
   saveNotes(notes); 
   location.assign(`/edit.html#${uuid}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  filters.sortBy = e.target.value
  renderNotes(notes,filters)
})  

window.addEventListener('storage', function (e) {
  if (e.key === 'notes')  {
    notes = JSON.parse(e.newValue)
    renderNotes(notes,filters)
  }
})

// const now = moment()
// console.log(now.toString())
// now.add(1,'year').subtract(20, 'days')
// console.log(now.fromNow())
// console.log(now.format('MMMM Do YYYY' ))
// // now.minute(1)

// const nowTimestamp = now.valueOf()
// console.log(nowTimestamp)
// console.log(moment(nowTimestamp).toString())


// const now = moment()
//  now.year(1970).month(5).date(10)

// console.log(now.format(`MMM D, YYYY`)) 



