'use strict'
const checkIfPaladrone = function (word) {
   let str =  word.replace(/\W/g, '').toLowerCase()   //makes sure only 1-9 a-z
   let reverse = str.split('').reverse().join('') 
    if (reverse === str) {
      return true  
    } else {
    return false
    }
}

//console.log(checkIfPaladrone('ama'))
{
for (let i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(e){
        e.target.value = i 
        console.log(e.target.value)
        console.log(i) });
    document.body.appendChild(btn);
  }
}
  
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

console.log(foo2())