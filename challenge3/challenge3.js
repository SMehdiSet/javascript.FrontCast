const cartItem = ['Book1', 'Book2', 'Book3', 'Book4']

let arrayImprover = function(array) {
    array.shift()
    array.splice(1, 1)
    array.push('new item')
    return array
}
arrayImprover(cartItem).forEach(function(element, index) {
    console.log(`${index + 1}- product name: ${element}`)
})