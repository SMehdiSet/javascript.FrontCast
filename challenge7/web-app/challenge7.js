const productItem = [{
    title: 'Book1',
    exist: true
}, {
    title: 'Book2',
    exist: false
}, {
    title: 'Book3',
    exist: true
}, {
    title: 'Book4',
    exist: false
}]


const avalibleBooksCountList = document.createElement('ul')
let avalibleBooksCount = 0



productItem.forEach(item => {
    if(item.exist == true){
        avalibleBooksCount++
    }
})
avalibleBooksCountList.textContent = `Number of books avalible = ${avalibleBooksCount}`
document.querySelector('body').appendChild(avalibleBooksCountList)


productItem.forEach(item => {
    if(item.exist == true) {
        const avalibleBooksListItem = document.createElement('li')
        avalibleBooksListItem.textContent = item.title
        
        document.querySelector('body > ul').appendChild(avalibleBooksListItem)
        
    }
})
