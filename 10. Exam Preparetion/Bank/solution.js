class Bank{

    constructor(bankName) {
         this._bankName = bankName;
         this.allCustomers = [];
    }
    newCustomer(customer){
        let exist = false;
        if(this.allCustomers.length !== 0){
            for (let i = 0; i <this.allCustomers.length ; i++) {
                if(this.allCustomers[i].firstName === customer.firstName && this.allCustomers[i].lastName === customer.lastName && this.allCustomers[i].personalId === customer.personalId){
                    exist = true;
                }
            }
        }
        if(exist){
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
            this.allCustomers.push(customer);
            return customer;
    }
    depositMoney(personalId,amount){

            let saveIndex = this.checkPersonalId(Number(personalId));

            if(this.allCustomers[saveIndex].totalMoney === undefined){
                this.allCustomers[saveIndex].totalMoney = 0;
            }

            if(this.allCustomers[saveIndex].transactions === undefined){
                this.allCustomers[saveIndex].transactions = [];
            }
            this.allCustomers[saveIndex].totalMoney += Number(amount);
            let outputTransaction = `${this.allCustomers[saveIndex].firstName} ${this.allCustomers[saveIndex].lastName} made deposit of ${amount}$!`
            let output = `${this.allCustomers[saveIndex].totalMoney}$`;


            this.allCustomers[saveIndex].transactions.push(outputTransaction);
            return output;

    }

    withdrawMoney (personalId, amount){

        let saveIndex = this.checkPersonalId(Number(personalId));

        if(!(Number(amount) <= this.allCustomers[saveIndex].totalMoney)){
            throw new Error(`${this.allCustomers[saveIndex].firstName} ${this.allCustomers[saveIndex].lastName} does not have enough money to withdraw that amount!`)

        }
        if(this.allCustomers[saveIndex].transactions === undefined){
            this.allCustomers[saveIndex].transactions = [];
        }

            let withdraw = this.allCustomers[saveIndex].totalMoney - Number(amount);
            this.allCustomers[saveIndex].totalMoney = withdraw;
            let outputTransaction = `${this.allCustomers[saveIndex].firstName} ${this.allCustomers[saveIndex].lastName} withdrew ${amount}$!`
            this.allCustomers[saveIndex].transactions.push(outputTransaction);
            let output = `${withdraw}$`;
            return output;

    }


    customerInfo (personalId){
        let saveIndex  = this.checkPersonalId(Number(personalId));

        let output = `Bank name: ${this._bankName}`;
        output += `\nCustomer name: ${this.allCustomers[saveIndex].firstName} ${this.allCustomers[saveIndex].lastName}`
        output += `\nCustomer ID: ${this.allCustomers[saveIndex].personalId}`;
        output += `\nTotal Money: ${this.allCustomers[saveIndex].totalMoney}$`;


        if(this.allCustomers[saveIndex].transactions.length !== 0){
            let allTransactions = this.allCustomers[saveIndex].transactions;
            allTransactions.reverse();
            output += `\nTransactions:`;
            let counterTransaction = allTransactions.length;
            for (let i = 0; i < this.allCustomers[saveIndex].transactions.length ; i++) {
                output += `\n${counterTransaction}. ${this.allCustomers[saveIndex].transactions[i]}`;
                counterTransaction--;
            }

        }

        return output;
    }



    checkPersonalId(personalId){
        let exist = false;
        let saveIndex = 0;

        if(this.allCustomers.length !== 0){
            for (let i = 0; i <this.allCustomers.length ; i++) {
                if( this.allCustomers[i].personalId === personalId){
                    exist = true;
                    saveIndex = i;
                }
            }
        }

        if(!exist){
            throw new Error("We have no customer with this ID!");
        }

        return saveIndex;
    }

}
let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "John",
    lastName: "Miller", personalId: 6233267}));

console.log(bank.newCustomer({firstName: "Michelle",
    lastName: "Davis", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));