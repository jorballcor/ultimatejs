/**
 * 
 * Create an algorithm to return the
 * biggest and smallest number of an array
 */

let array = [2, 5, 7, 15, -7, -100, 56]

function getMinorMajor(arr) {

    let minor = 0;
    let major = 0;

    for (let number of arr) {

        if (number < minor) {
            minor = number;
        } else if (number > major) {
            major = number
        }
    }


    return [minor, major]

}


function getMinorMajorMoreNative(arr) {

    let minor = 0;
    let major = 0;

    for (let number of arr) {

       minor = minor < number ?  minor : number;
       major = major > number ? major : number;
    }


    return [minor, major]

}

let numbers = getMinorMajor(array)
let nativeNumbers = getMinorMajorMoreNative(array)

console.log(numbers)
console.log(nativeNumbers)
