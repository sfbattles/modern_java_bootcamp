const getDataPromise = function(num) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve (num * 2) : reject('I rejected the Promise. number must be provided')
      },2000) 
    })
}

const  processData = async () =>{
    let data = await getDataPromise(2)
    data = await getDataPromise(data)
    data = await getDataPromise(data)
    return(data)
}

processData().then((data) => {
    console.log('data',data)
}).catch((error) => {
   console.log('Error',error)
})