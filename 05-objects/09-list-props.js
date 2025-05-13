const point = {
    x: 10,
    y: 15,
    draw() {
      console.log('Drawing...')
      }
}

// delete point.draw;

if ('draw' in point) {
    point.draw();
}
 
console.log(Object.keys(point)); // [ 'x', 'y' ]

for (let key of Object.keys(point)) {
    console.log(key, point[key]);
}

for (let entry of Object.entries(point)) {
    console.log(entry);
}

// New functionalities in ES6
for (let key in point) {
    console.log(key, point[key]);
}