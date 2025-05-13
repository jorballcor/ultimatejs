function User(name) {
    this.name = name;
}

console.log(User.name); 
console.log(User.length); 

const U = User;
let user = new U('Jorge');

console.log(user);


function of(Fn, arg) {
    return new Fn(arg);
}

let user2 = of(User, 'Rachel');
console.log(user2);


// Function as a first class citizen
// Functions can be passed as arguments to other functions
function returned() {
    return function () {
        console.log('Hello World');
    }
}

let greet = returned();
greet(); // Hello World