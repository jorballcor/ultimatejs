// short-circuit

// Falsy values
// 0, "", null, undefined, NaN, false
let name = '';
let username = name || 'Anonymous';
console.log(username); // Anonymous

function fn1() {
  console.log('Im function 1');
  return false;
}

function fn2() {
    console.log('Im function 2');
    return true;
}

let x = fn1() && fn2();
console.log(x); 