// unix Epoch --january 1st 1970 00:00:00
// const now = new Date()
// const timestamp = now.getTime()
// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())


const secondDate = new Date('january 13 1972 6:25:01')
const firstDate = new Date('June 10 1970')
 
const now = new Date()
const timeStamp1 = firstDate.getTime()
const timeStamp2 = secondDate.getTime()

if (timeStamp1 < timeStamp2) {
   myFirstDate = new Date(timeStamp1) 
   console.log(myFirstDate.toString())   
}
else
  {
    mySecondDate = new Date(timeStamp2) 
    console.log(mySecondDate.toString()) 
  }