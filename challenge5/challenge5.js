const account = {
    name: 'Masood',
    outgo: [],
    income: [],
    addOutgo: function(outgoDescription, outgoAmount) {
        this.outgo.push({ID: Math.random().toFixed(5),
            outgoDescription: outgoDescription, 
            outgoAmount: outgoAmount
        })
    },
    addIncome: function(incomeDescription, incomeAmount) {
        this.income.push({ID: Math.random().toFixed(5),
            incomeDescription: incomeDescription, 
            incomeAmount: incomeAmount
        })
    }, 
    getAcountSummery: function() {
            
        let totalIncome = 0
        let totalOutgo = 0
        this.income.forEach(item => totalIncome += item.incomeAmount)
        this.outgo.forEach(item => totalOutgo += item.outgoAmount)
        return `${this.name}'s balance: ${totalIncome - totalOutgo}`
    }
}

account.addOutgo('cafe', 39)
account.addOutgo('football', 56)
account.addOutgo('waterpool', 70)
account.addIncome('job', 1000)
console.log(account.getAcountSummery())