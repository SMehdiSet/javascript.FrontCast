


// console.log(uuidv4())


const getLocalSavedProducts = function() {
        const itemsJSON = localStorage.getItem('item')
    if(itemsJSON !== null) {
        return JSON.parse(itemsJSON)
    }
    else {
        return []
    }
}

const saveItems = function(allItems) {
    localStorage.setItem('item', JSON.stringify(allItems))
}

const itemFinder = function(allItems, searchText) {
    
    // const searchResultsitems = document.querySelectorAll('p.search-item')
    // console.log(searchResultsitems)
    // searchResultsitems.forEach(item => item.remove())



    let searchResults = allItems.filter( item => {
        return item.title.toLowerCase().includes(searchText.toLocaleLowerCase())
    })

        document.querySelector('#all-items').innerHTML = ''
        searchResults.forEach(function(item) {
            document.querySelector('#all-items').appendChild(creatItemDOM(item))
        })

    // while (searchResultItemRemoval.firstChild) {
    //     searchResultItemRemoval.removeChild(searchResultItemRemoval.firstChild)
    // }
    // console.log(searchResults)
}

// const availabilityChecker = function() {}

document.querySelector('#availability').addEventListener('change', function() {
    console.log(this.checked)
    let searchResults = []
    // searchText = document.querySelector('#search').target.value
    if (this.checked === true) {
        searchResults = allItems.filter( item => {
            return item.title.toLowerCase().includes(document.querySelector('#text-input').value.toLocaleLowerCase())
        })
        searchResults = searchResults.filter(item => {
            return item.exist == true
        })
        document.querySelector('#all-items').innerHTML = ''
        searchResults.forEach(function(item) {
            document.querySelector('#all-items').appendChild(creatItemDOM(item))
        })
    }
    else {
        searchResults = allItems.filter( item => {
            return item.title.toLowerCase().includes(document.querySelector('#text-input').value.toLocaleLowerCase())
        })
        
        document.querySelector('#all-items').innerHTML = ''
        searchResults.forEach(function(item) {
            document.querySelector('#all-items').appendChild(creatItemDOM(item))
        })
    }
})

const removeItem = function(ID) {
    const itemIndex = allItems.findIndex(function(item) {
        return item.ID === ID
    })
    if (itemIndex > -1) {
        allItems.splice(itemIndex, 1)
    }
}

const creatItemDOM = function(item) {
    const searchResultsitem = document.createElement('div')
    const checkBox = document.createElement('input')
    const searchItem = document.createElement('span')
    const removeButton = document.createElement('button')

    checkBox.setAttribute('type', 'checkBox')
    checkBox.checked = item.exist
    searchResultsitem.appendChild(checkBox)
    checkBox.addEventListener('change', function() {
        // change exist => saveItem => itemFinder
        item.exist = checkBox.checked
        saveItems(allItems)
        itemFinder(allItems, filters)
    })

    searchItem.textContent = item.title
    searchResultsitem.appendChild(searchItem)

    removeButton.textContent = 'Remove'
    searchResultsitem.appendChild(removeButton)
    removeButton.addEventListener('click', function() {
        removeItem(item.ID)
        saveItems(allItems)
        itemFinder(allItems, filters)
    })

    return searchResultsitem
}


