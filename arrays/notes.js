const notes = [{
    title: 'Programming',
    body: 'I am learning angular'
}, {
    title: 'ORM',
    body: 'I am learning sequelize'
}, {
    title: 'Nodejs',
    body: 'I am learning node'
} ]

const sortNotes = function (note) {
      note.sort(function (a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
      } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
          return 1;
      } else {
        return 0;  //order is same   
      } 
  });
};
sortNotes(notes);
console.log(notes);
//const findNotes = function (note, searchstring) {

    // return notes.filter(function (note, index) {
    //   let isTitleMatch;
    //   let isBodyMatch;
    //   if (note.title) {
    //     isTitleMatch = note.title.toLowerCase().includes(searchstring.toLowerCase());
    //   }
    //   if (note.body) {
    //     isBodyMatch = note.body.toLowerCase().includes(searchstring.toLowerCase()); 
    //   }
    //   return (isTitleMatch || isBodyMatch);
    // });
    // };
//  console.log (notes.length);

//   const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         if (note.title) {
//           return note.title.toLowerCase() === noteTitle.toLowerCase();
//         }
//     });
//     return(notes[index]);
//   };

  
// const note = findNote(notes,'ORm');
// console.log (note);