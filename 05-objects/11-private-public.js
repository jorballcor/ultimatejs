function User() {
    let id = 1; // private property, not accessible outside the function
    this.name = 'John'; // public property


    let log = function() {
        console.log("logging...");
    }

    this.save = function() {
        log();
        console.log("saving user...");
    }
}

const user = new User();

// public method
// this method can access the private property and method
// because it is defined inside the same scope/closure
user.save();

// private method, not accessible outside the function
// user.log(); // TypeError: user.log is not a function