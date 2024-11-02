const accountId = 123;
let accountEmail = "prince@gmail.com";
var accountPassword = 1234567890;
accountCity = "Delhi";
let accountState;
// accountId = 2  // change not allowed

accountEmail= "kumar@gmail.com";
accountPassword = 87654321;
accountCity = "Bengaluru"
console.log(accountEmail);

/*
Prefer not to use var
because it gives an issue in block and functional scope.
This way we can do multi line of comment.
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])