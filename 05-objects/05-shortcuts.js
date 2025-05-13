let obj = {};
let obj2 = new Object();

/**
 * 
 * new Array(); []
 * new String(); '' "" `
 * new Number(); 12
 * new Boolean(); true false
 */

function User() {
    this.name = 'Jorge';
}

let user = new User();
console.log(user.constructor); 


const s1 = "1 + 1"; // String
const s2 = new String("1 + 1"); // Object
console.log(eval(s1)); // 2
console.log(eval(s2)); // [String: '1 + 1']
console.log(s2.valueOf()); // '1 + 1'
