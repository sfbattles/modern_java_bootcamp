class Person {
   constructor (firstName,lastName,age,likes =[]) {  
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.likes = likes
   }
   getBio() {
    let bio = `${this.firstName} is ${this.age}`
    this.likes.forEach((like) => {
      bio += ` ${this.firstName} likes ${like}.`
    })
     return bio
   }
  set fullName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }
  get fullName(){
    return(`${this.firstName} ${this.lastName}`)
  }
}

class Employee extends Person {
  constructor (firstName,lastName,age,position,likes =[]) {
    super(firstName,lastName,age,likes)
    this.position = position 
  }
  getBio() {
    return `${this.fullName} is a ${this.position}.`
  }
  getYearsLeft() {
    return 65 - this.age
  }
}

class Student extends Person {
  constructor (firstName,lastName,age,grade,likes =[]) {  
    super(firstName,lastName,age,likes)
    this.grade = grade
  }
  getBio() {
    const status = this.grade>70 ? 'passing' : 'failing'    
    return `${this.firstName} ${this.lastName} is ${status}`   
  }
  updateScore(updateAmount,operation = 'subtract') {
    
    if (operation.toLowerCase() === 'add') {
      this.grade += updateAmount
    } else {
      this.grade -= updateAmount
      console.log(`${updateAmount} is amount of change ${this.grade} and operation = ${operation}`)
    }    
  }
}

const me = new Employee('richard','long',48,'teacher',['teaching', 'biking'])
me.fullName = 'Clancy Turner'

console.log(me.getBio())
console.log(me.getBio())


// const Person = function (firstName,lastName,age,likes =[]) { 
//    this.firstName = firstName
//    this.lastName = lastName
//    this.age = age
//    this.likes = likes
// }

// Person.prototype.getBio= function() {
//    let bio = `${this.firstName} is ${this.age}`
//   this.likes.forEach((like) => {
//     bio += ` ${this.firstName} likes ${like}.`
//   })
//    return bio
// }
// Person.prototype.setName = function (fullName) {
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
//   }

// const me = new Employee('richard','long',48,"teacher",['teaching', 'biking'])

// me.setName('Alexis Turner' )
// console.log(me.getBio())
// const person2 = new Person('ray','long',46, )
// console.log(person2.getBio())
// console.log(me.getYearsLeft())