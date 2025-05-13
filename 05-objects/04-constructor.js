// { id: 1, retrieveKey: function() {} }
function User() {
    this.id = 1;
    this.retrieveKey = function () { //Method
        console.log('Retrieving key...');
    }
}

// let user = User(); // undefined
// console.log(user);

let user = new User(); 
console.log(user);