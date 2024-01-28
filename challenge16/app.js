class User {
    constructor(id, email) {
        this.id = id,
        this.email = email
    }
    get userInfo() {
        return `User Id: ${this.id} - User Email: ${this.email}`
    }
    set userInfo(value) {
        const info = value.split(' ')
        this.id = info[0]
        this.email = info[1]
    }
}

const user1 = new User('100', 'test@test.com')
console.log(user1.userInfo())


user1.userInfo = '200 test2@test2.com'
console.log(user1.userInfo)

