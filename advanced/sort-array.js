// const ary = [1,2,3,4,5,6,8,9,10]

// let sorted = ary.sort((a,b) => {
//     return a-b
// })

// const missingNumber = function (sorted) {
//    let x = 0
//    let found
//    while (x < sorted.length && found === undefined) { 
//     if ((x + 1) != sorted[x]) {
//         console.log(`the number is ${sorted[x]} and the index is ${x + 1}`)
//         found = 1
//         return x + 1
//     }
//     x++
//    } 
// }
// console.log(missingNumber(sorted))

const til = {
    penny: 12,
    nickel: 10,
    dime:2,
    quarters:12,
    dollars:30
}

//20.47

const change = function (amountOfChange) {
  //do whole dollars first
  let x = 1
  remainingChange = amountOfChange

  while (x <= amountOfChange && til.dollars > amountOfChange)
    {      
      remainingChange -= 1
      console.log(remainingChange)
      x++;
    }    
   return (`${x -1} dollars`) 
}

let howManyQuarters = function (amountOfChange) {
let quarters = 0
let x = 1
let remainingQuarters = amountOfChange * 100
console.log('Started function')
console.log(`this is x -->${x}`)
console.log(remainingQuarters)
while ((x * 25) <= remainingQuarters && 
      (til.quarters * 25) > remainingQuarters) 
  {
    console.log('I am in the function loop')
     if ((x * 25) < remainingQuarters) {
       quarters += x 
       console.log(x)
     }
     console.log(`this is number of quaters ${x}`)
     x++
  }
 
  return(quarters)
}


//console.log(change(20.47))
//console.log(howManyQuarters(.47))

let programming = "i love=javascript"
console.log(programming.split("=").reverse().join(""))
// let reverseStr = ''
// console.log(reverseStr)
// for (let x = programming.length-1;x >= 0; x--) {
//     reverseStr += programming[x]   
// }
// console.log(reverseStr)  
