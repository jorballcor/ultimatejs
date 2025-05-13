//Factory function
// A factory function is a function that returns an object
// It is a way to create objects without using the 'new' keyword
function createUser(name, email) {
    return {
        email,
        name,
        active: true,
        retrieveKey: function () { //Anonymous function
            console.log('Retrieving key...');
        }, 
    }
}

let user1 = createUser('Jorge', 'jorge@helloworld.io');
let user2 = createUser('Felipe', 'felipe@helloworld.io');

console.log(user1, user2);