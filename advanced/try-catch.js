const getTip = (amount) => {
    if (typeof amount === 'number') {
      return amount * .25
    }  else {
        throw Error('GetTip parameter invalid must be number')
    }
}

try {
    const result = getTip('test')
    console.log(result)
} catch (e) {
   console.log('catch block is runnning')
}

