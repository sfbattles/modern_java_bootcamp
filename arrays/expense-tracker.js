const account = {
    name: 'Richard Long',
    expense:[ { description : 'fly lessons',
                 expenseAmount : 100,
               },
               {
                 description : 'Learning CSS',
                 expenseAmount : 50,   
               },
               {
                description : 'bought coffee',
                expenseAmount : 5.30,   
              },
              {
                description : 'bought jacket',
                expenseAmount : 99,   
              },
            ],
    income : [],        
        addExpense: function (itembrought, amount_paid) {
                this.expense.push( {
                  description : itembrought,
                  expenseAmount : amount_paid
              });
            },
        addIncome: function (incomeReceived, income) {
                this.income.push( {
                  description : incomeReceived,
                  incomeAmount : income
              });
            },
        getSummary: function () {
                let totalExpense = 0;
                let totalIncome = 0;
                this.expense.forEach(function(element, index) {              
                   totalExpense += element.expenseAmount; 
                }); 
                this.income.forEach(function(incomeItem, index) {              
                  totalIncome += incomeItem.incomeAmount; 
                });      
               
               return `${this.name} has a balance of $${totalIncome - totalExpense}. Total income of ${totalIncome} and total expense of ${totalExpense}`;          
            }
        }
account.addExpense('purse', 67);
account.addExpense('tea',3.7);
account.addIncome('website creation', 400);
account.addIncome('javascript program creation', 600);
console.log(account.getSummary(account));

