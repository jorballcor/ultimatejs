function whichIsBigger(a, b) {
    if (a > b) {
        console.log(a)
    } else {
        console.log(b)
    }
}

let bigger = whichIsBigger(5, 10);
bigger

// ------------

function whichIsBiggerBestWay(a, b) {
    return (a > b) ? a : b
}
bestBigger = whichIsBiggerBestWay(10, 5)
console.log(bestBigger)