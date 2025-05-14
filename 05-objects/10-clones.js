let point = {
    x: 10,
    y: 15,
}

// Not independent, reference and point are the same object
// If we change the reference, point will also change
let reference = Object.assign(
    point, 
    { z: 20, x: 1 }
);

// Independent, clone is a new object
// If we change the clone, point will not change
let clone = Object.assign(
    {},
    point,
    { z: 20, x: 1 }
);

console.log(point, clone);
console.log(reference);


let shallowCopyPoint = Object.assign(
    {},
    point
);
console.log(point, shallowCopyPoint);

// Shallow copy using spread operator
let copy3 = {...point};
console.log(point, copy3);


let copy4 = {};
for (let key in point) {
    copy4[key] = point[key];
}
console.log(point, copy4);