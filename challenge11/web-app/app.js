let allItems = getLocalSavedProducts()
let filters = ''


itemFinder(allItems, filters)
// localStorage.clear()


// allItems.forEach(function(item) {
//     allItems.push(JSON.parse(localStorage.getItem('item')))
// })



// allItems.forEach(function(item) {
//     const newItem = document.createElement('div')
//     newItem.textContent = item.title
//     document.querySelector('#itmes-display').appendChild(newItem)
// })

// console.log(allItems)
// console.log(localStorage.getItem('item'))


document.querySelector('#add-new-item').addEventListener('submit', function(e) {
    e.preventDefault()

    allItems.push({
        ID: uuidv4(),
        title: e.target.elements.addItem.value,
        exist: true
    })    
    saveItems(allItems)
    itemFinder(allItems, filters)
    e.target.elements.addItem.value = ''
    // console.log(JSON.stringify(allItems))
    // console.log(allItems)
})




document.querySelector('#search').addEventListener('input', function(e) {
    filters = e.target.value
    itemFinder(allItems, filters)
})

