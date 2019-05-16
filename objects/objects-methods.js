let restaurant = {
    name : "ASB",
    guestCapacity : 75,
    guestCount: 0,

    checkAvailability: function (partySize) {            
           return (this.guestCount + partySize <= this.guestCapacity) ? true : false;                
    } ,  
   
    seatParty: function (partySize) { 
       if ((this.guestCount + partySize) <= this.guestCapacity) {
         this.guestCount += partySize;   
         return true;         
       }
       else
         return false;
    },

    removeParty: function (partySize) {
        if ((this.guestCount - partySize) >= 0) {
          this.guestCount -= partySize;            
        }
     }
}



let status = restaurant.checkAvailability(4);
//console.log(status);
// console.log(restaurant.guestCount);
console.log(restaurant.seatParty(76));


