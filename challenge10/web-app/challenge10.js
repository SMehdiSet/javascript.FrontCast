let allItems = []

// allItems.forEach(function(item) {
//     allItems.push(JSON.parse(localStorage.getItem('item')))
// })

for(i = 0; i < localStorage.length; i++) {
    allItems.push(JSON.parse(localStorage.getItem(`item${i}`)))
}

allItems.forEach(function(item) {
    const newItem = document.createElement('div')
    newItem.textContent = item.title
    document.querySelector('#itmes-display').appendChild(newItem)
})


console.log(allItems)
let counter = 0

document.querySelector('#add-new-item').addEventListener('submit', function(e) {
    e.preventDefault()
    const newItem = document.createElement('div')


    newItem.textContent = e.target.elements.addItem.value
    document.querySelector('#itmes-display').appendChild(newItem)
    e.target.elements.addItem.value = ''
    allItems.push({title: newItem.textContent, exist: true})
    localStorage.setItem(`item${counter}`, JSON.stringify(allItems[allItems.length - 1]))
    counter++
    // console.log(JSON.stringify(allItems))
    // console.log(allItems)
})

let filters = ''
let searchResultItemRemoval = []


// localStorage.clear()


const itemFinder = function(allItems, searchText) {
    
    const searchResultsitems = document.querySelectorAll('p.search-item')
    // console.log(searchResultsitems)
    searchResultsitems.forEach(item => item.remove())


    if(searchText.trim() === '') {
    }
    else {
        const searchResults = allItems.filter(function(item) {
            return item.title.toLowerCase().includes(searchText.toLocaleLowerCase())
        })
   
        searchResults.forEach(function(item) {
            const searchResultsitem = document.createElement('p')
            searchResultsitem.textContent = item.title
            searchResultsitem.className = 'search-item'
            searchResultItemRemoval = document.getElementById('search-results')
            
    
    
            document.querySelector('#search-results').appendChild(searchResultsitem)
        })
    }
    console.log(document.body.childNodes)


    // while (searchResultItemRemoval.firstChild) {
    //     searchResultItemRemoval.removeChild(searchResultItemRemoval.firstChild)
    // }
    


    
    // console.log(searchResults)
}

document.querySelector('#search').addEventListener('input', function(e) {
    filters = e.target.value
    itemFinder(allItems, filters)
})

