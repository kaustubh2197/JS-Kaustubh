const accountId = 144456
let accountEmail = "kaustubh@google.com"
var accountPassword = "12345"
accountCity = "Akola"
let accountState
// accountId = 2
accountEmail = "kolhe@gmail.com"
accountPassword = "kasutub123"
accountCity = "Pune"

console.log(accountId);

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
console.log(accountEmail,accountId,accountPassword)
