const getDatCallback = (num, callback) => {

setTimeout(() => {
    if (typeof num === 'number') {
       callback(undefined,num * 2) 
    } else {
        callback('number must be provided.')  
    }
},2000)
}

const callback = (err,data) => {
        if (err) {
           console.log(err)
        } else {
            getDatCallback(data, (err,data) => {
                if (err) {
                    console.log(err)
                 } else {
                    console.log(data) 
                 }
            })
        }
    }

getDatCallback(2,callback)

//promises are below callback above
const getDataPromise = function(num) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve (num * 2) : reject('I rejected the Promise. number must be provided')
      },2000) 
    })
}

getDataPromise(2).then((data) =>{
  getDataPromise(data).then((data) =>{
      console.log(`promise data ${data}`)
  },(err) => {
    console.log(err)   
  })
},(err) => {
  console.log(err)   
})

getDataPromise(10).then((data) => {
   return getDataPromise(data)
}).then((data)=>{
   return 'this is test data' 
}).then((data)=> {
   console.log(`data is: ${data}`) 
}).catch((err) => {
   console.log(err)
})

