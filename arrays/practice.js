let values = [1,2,3,2,4,5,6,7,6,8,9,10];


let removeDuplicates = function () {
   values.forEach(function(currentValue, index) {
     //console.log(`current value = ${currentValue} IndexOf = ${values.indexOf(currentValue)} currentIndex = ${index}`);
       values.indexOf(currentValue) === index      
   });
   
};    

let result = removeDuplicates();
console.log(result)
