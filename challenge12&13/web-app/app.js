let allItems = getLocalSavedProducts()
let filters = {
    text: '',
    sortBy: 'byCreated'
}


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
    const Id = uuidv4()
    const timeStamp = moment().valueOf()
    allItems.push({
        ID: Id,
        title: e.target.elements.addItem.value,
        price: '',
        exist: true,
        created: timeStamp,
        edited: timeStamp,
    })    
    saveItems(allItems)
    itemFinder(allItems, filters)
    e.target.elements.addItem.value = ''
    // console.log(JSON.stringify(allItems))
    // console.log(allItems)
})




document.querySelector('#search').addEventListener('input', function(e) {
    filters.text = e.target.value
    itemFinder(allItems, filters)
})


window.addEventListener('storage', function(e) {
    if (e.key === 'allItems') {
        allItems = JSON.parse(e.newValue)
        itemFinder(allItems, filters)
    }
})

document.querySelector('#item-sorter').addEventListener('change', function(e) {
    filters.sortBy = e.target.value
    itemFinder(allItems, filters)
})