const cart =  {
    userName: '',
    totalPrice: '',
    products: [],
    cartDetails(userName, totalPrice, ...products) {
        this.userName = userName
        this. totalPrice = totalPrice
        this.products = products
        console.log(`User Name: ${this.userName}\nTotal Price: ${this.totalPrice}\nProducts List: ${this.products}`)
    }
}
// constructor(userName, totalPrice, ...products) {
//     userName: userName
//     totalPrice: totalPrice
//     products: products
// }

cart.cartDetails('MasoodSadri', 188, 'Book1', 'Book2', 'Book3')