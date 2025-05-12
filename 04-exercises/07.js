/**
 * 
 * Create a tax calculator:
 * return the price of the produc plus taxes
 */

function fullPrice(price, tax) {

    return price + (price * tax);

}

let result = fullPrice(19.90, 0.15)
console.log(result)