var username = 'Afolabi';
var hasLoggedIn = true;
var myNumber = 9;
var myRegex = /foo/;
var names = username.split('');
//define an array with typescript
var values = [9];
var loggedIn = [false];
var user = ["Sodiq"];
console.log(myNumber);
console.log(username);
var myPerson = {
    first: "Afolabi",
    last: "Sodiq",
    age: 5,
    loggedin: false,
    regExp: /foo/,
    user: ['Explain'],
    values: [false]
};
console.log(myPerson);
// using utility type Record to define the key and the value of an arr of object
var myID = {
    10: 'a',
    20: 'b',
    30: 'c',
};
myID[40] = "d";
myID[50] = 'e';
myID[60] = 'f';
console.log(myID);
//define conditionals and expressions with typesript
if (myID[40] === 'd') { }
if (myPerson.first === 'Asokoro') { }
for (var i = 0; i < 10; i++) {
    console.log(i);
}
values.forEach(function (value) { return console.log(value); });
[1, 2, 3, 4, 5, 6].forEach(function (n) { return console.log(n); });
var sumMap = [1, 2, 3, 4, 5, 6].map(function (v) { return v * 2; });
console.log(sumMap);
