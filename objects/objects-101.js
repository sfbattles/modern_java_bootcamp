let mybook = {
    title : "1984",
    author : "George Orwell",
    pageCount : 326
}

console.log(`${mybook.title} by ${mybook.author}`);  // template string

mybook.title = "Animal Farm"
console.log(`${mybook.title} by ${mybook.author}`);  // template string

let person = {
  firstname : 'rich',  
  age: 48,
  location: 'quakertown'  
}

console.log(`${person.firstname} is ${person.age} and lives in ${person.location}`);

person.age += 1;
console.log(`${person.firstname} is ${person.age} and lives in ${person.location}`);
