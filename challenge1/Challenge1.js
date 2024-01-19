/*
money owned;
income;
spent;
*/

let moneyLog = {
    moneyOwned: 0,
    totalIncome: 0,
    totalSpent: 0
}

let moneyCheck1 = function() {
    moneyCheck = moneyLog.totalIncome - moneyLog.totalSpent
    if (moneyCheck == moneyLog.moneyOwned) {
        return console.log(`Transaction aproved!`)
    }
    else {
        return console.log(`Transaction failed: conflicting results.`)
    }
}

let income = function(income) {
    moneyLog.moneyOwned += income
    moneyLog.totalIncome += income
    return moneyCheck1()
}

let moneyCheck2 = function() {
    moneyCheck = moneyLog.totalIncome - moneyLog.totalSpent
    if (moneyCheck == moneyLog.moneyOwned) {
        return console.log(`Transaction aproved!`)
    }
    else {
        return console.log(`Transaction failed: conflicting results.`)
    }
}

let spent = function(spent) {
    moneyLog.moneyOwned -= spent
    moneyLog.totalSpent += spent
    return moneyCheck2()
}

console.log(`${moneyLog.moneyOwned} ${moneyLog.totalIncome} ${moneyLog.totalSpent}`)

income(12)
spent(6)
console.log(`${moneyLog.moneyOwned} ${moneyLog.totalIncome} ${moneyLog.totalSpent}`)