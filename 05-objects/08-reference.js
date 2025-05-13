let a = 1;
let b = a; // primitive type, value is copied

b++;
console.log(a, b);


let obj = {};
let obj2 = obj; // reference type, reference is copied

obj.prop = 1;
console.log(obj, obj2);


let num = 1;

function add(n) {
  n++;
  return n;
}
let result = add(num);
console.log(result, num); // 2, 1


let h = {prop: 1};

function addProp(n) {
  n.prop++;
  return n;
}
addProp(h);
console.log(h); 