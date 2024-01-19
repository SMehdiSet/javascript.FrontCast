let password = `12354acd`
if (password.length < 8) {
    console.log(`password needs to be at least 8 characters`)
}
else if (password.includes(`1234`)) {
    console.log(`password weak`)
}
else {
    console.log(`password aproved!`)
}