const accountId = 144553
let accountEmail = "shrirang@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"

let accountState
/* if a variables isn't assigned a value it will have a value of undefined. */

// accountId = 2 // constant variables cannot be changed.

accountEmail = "sj@sj.com"
accountPassword = "34567"
accountCity = "Benguluru"

console.log(accountId);

/*
    Do not use var...
        var isn't designed for scopes(both block scope and function scopes) it breaks scopes and hence should not be used.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

