


// console.log(uuidv4())


const getLocalSavedProducts = () => {
        const itemsJSON = localStorage.getItem('item')
    try {
        return itemsJSON !== null ? JSON.parse(itemsJSON) : []
    } catch {
        return []
    }
}

const saveItems = allItems => {
    localStorage.setItem('item', JSON.stringify(allItems))
}


const sortByEdited = (allItems, itemSorter) => {
    // console.log(itemSorter)
    if (itemSorter === 'byEdited') {
        return allItems.sort((a, b) => {
            if(a.edited > b.edited) {
                return -1
            }
            else if(a.edited < b.edited) {
                return 1
            }
            else {
                return 0
            }
        })
    }
    else if(itemSorter === 'byCreated') {
        // console.log(itemSorter)
        return allItems.sort((a, b) => {
            if(a.created > b.created) {
                return -1
            }
            else if(a.created < b.created) {
                return 1
            }
            else {
                return 0
            }
        })
    }
    else {
        return allItems
    }
}

const itemFinder = (allItems, filters) => {
    
    // const searchResultsitems = document.querySelectorAll('p.search-item')
    // console.log(searchResultsitems)
    // searchResultsitems.forEach(item => item.remove())

    sortByEdited(allItems, filters.sortBy)


    let searchResults = allItems.filter( item => {
        return item.title.toLowerCase().includes(filters.text.toLowerCase())
    })
    document.querySelector('#all-items').innerHTML = ''
    searchResults.forEach(item => {
        document.querySelector('#all-items').appendChild(creatItemDOM(item))
    })

    // while (searchResultItemRemoval.firstChild) {
    //     searchResultItemRemoval.removeChild(searchResultItemRemoval.firstChild)
    // }
    // console.log(searchResults)
}

// const availabilityChecker = function() {}


const availabilityChecker = document.querySelector('#availability')

if (availabilityChecker !== null) {
    availabilityChecker.addEventListener('change', () => {
        // console.log(this.checked)
        let searchResults = []
        // searchText = document.querySelector('#search').target.value
        if (availabilityChecker.checked === true) {
            searchResults = allItems.filter( item => {
                return item.title.toLowerCase().includes(document.querySelector('#text-input').value.toLocaleLowerCase())
            })
            searchResults = searchResults.filter(item => {
                return item.exist == true
            })
            document.querySelector('#all-items').innerHTML = ''
            searchResults.forEach(item => {
                document.querySelector('#all-items').appendChild(creatItemDOM(item))
            })
        }
        else {
            searchResults = allItems.filter( item => {
                return item.title.toLowerCase().includes(document.querySelector('#text-input').value.toLocaleLowerCase())
            })

            document.querySelector('#all-items').innerHTML = ''
            searchResults.forEach(item => {
                document.querySelector('#all-items').appendChild(creatItemDOM(item))
            })
        }
    })
}

const removeItem = ID => {
    const itemIndex = allItems.findIndex(item => {
        return item.ID === ID
    })
    if (itemIndex > -1) {
        allItems.splice(itemIndex, 1)
    }
}

const creatItemDOM = item => {
    const searchResultsitem = document.createElement('div')
    const checkBox = document.createElement('input')
    const searchItem = document.createElement('a')
    const removeButton = document.createElement('button')

    checkBox.setAttribute('type', 'checkBox')
    checkBox.checked = item.exist
    searchResultsitem.appendChild(checkBox)
    checkBox.addEventListener('change', () => {
        // change exist => saveItem => itemFinder
        item.exist = checkBox.checked
        saveItems(allItems)
        itemFinder(allItems, filters)
    })

    searchItem.textContent = item.title
    searchItem.setAttribute('href', `./edit-item.html#${item.ID}`)
    searchResultsitem.appendChild(searchItem)

    removeButton.textContent = 'Remove'
    searchResultsitem.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeItem(item.ID)
        saveItems(allItems)
        itemFinder(allItems, filters)
    })

    return searchResultsitem
}


const getLastEditedTime = timeStamp =>{
    return `Last edited: ${moment(timeStamp).locale('fa').fromNow()}`
}