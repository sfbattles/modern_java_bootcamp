const squarelong = (num) => {
   return num * num
}

console.log(squarelong(5))

const square = (num) => num * num
 // no return or braces

 const people = [{
     name: 'andrew',
     age: 27
    },
    {
      name: 'Richard',
      age: 43,   
    },
    {
      name: 'jessica',
      age: 21,
    }]

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

const drinkingAge = people.find((person) => person.age === 21)
console.log(drinkingAge.name)