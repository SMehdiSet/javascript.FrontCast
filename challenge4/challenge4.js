const productItem = [{
    title: 'Book1'
}, {
    title: 'Book2'
}, {
    title: 'Book3'
}, {
    title: 'Book4'
}]


const deleteIndex = function(objectName, titleValeu) {
    let result = objectName.findIndex(function(item) {
        let result =item.title.toLowerCase() === titleValeu.toLowerCase()
        return result
    })
    if (result == -1) {
        return console.log('could not find the mentioned item.')
    }
    productItem.splice(result, 1)
    return console.log('process complete!')
}

deleteIndex(productItem, 'book3')

console.log(productItem)