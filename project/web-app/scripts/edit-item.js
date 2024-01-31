const titleElement = document.querySelector('#item-title')
const priceElement = document.querySelector('#item-price')
const lastEditedElemnt = document.querySelector('#item-last-edited')
const availableElement = document.querySelector('#item-available')

const itemId = location.hash.substring(1)

let allItems = getLocalSavedProducts()

let item = allItems.find(item => {
    return item.ID === itemId
})

if (item === undefined) {
    location.assign('/index.html')
}

titleElement.value = item.title
priceElement.value = item.price
lastEditedElemnt.textContent = getLastEditedTime(item.edited)
availableElement.checked = item.exist


titleElement.addEventListener('input', () => {
    item.title = titleElement.value
    item.edited = moment().valueOf()
    lastEditedElemnt.textContent = getLastEditedTime(item.edited)
    saveItems(allItems)
})

priceElement.addEventListener('input', () => {
    item.price = priceElement.value
    item.edited = moment().valueOf()
    lastEditedElemnt.textContent = getLastEditedTime(item.edited)
    saveItems(allItems)
})

availableElement.addEventListener('change', () => {
    item.exist = availableElement.checked
    item.edited = moment().valueOf()
    lastEditedElemnt.textContent = getLastEditedTime(item.edited)
    saveItems(allItems)
})

document.querySelector('#remove-item').addEventListener('click', () => {
    removeItem(itemId)
    saveItems(allItems)
    location.assign('/web-app/index.html')
})


window.addEventListener('storage', e => {
    if (e.key === 'allItems') {
        allItems = JSON.parse(e.newValue)
        item = allItems.find(item => {
            return item.ID === itemId
        })

        if (item === undefined) {
            location.assign('/index.html')
        }
        
        titleElement.value = item.title
        priceElement.value = item.price
        lastEditedElemnt.textContent = getLastEditedTime(item.edited)
        availableElement.checked = item.exist
    }
})
