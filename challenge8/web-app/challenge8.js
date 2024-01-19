let allItems = []

document.querySelector('#add-new-item').addEventListener('submit', function(e) {
    e.preventDefault()
    const newItem = document.createElement('div')

    newItem.textContent = e.target.elements.addItem.value
    document.querySelector('#itmes-display').appendChild(newItem)
    e.target.elements.addItem.value = ''
    allItems.push({title: newItem.textContent})
    // console.log(allItems)
})

let filters = ''
let searchResultItemRemoval = []





const itemFinder = function(allItems, searchText) {
    
    const searchResultsitems = document.querySelectorAll('p.search-item')
    console.log(searchResultsitems)
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

