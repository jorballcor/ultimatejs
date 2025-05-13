function PointFunc(x, y) {
  this.x = x;
  this.y = y;
  this.draw = function() {
    console.log('Drawing...')
    }
}

// const Point = new Function('x', 'y', `
//     this.x = x;
//     this.y = y;
//     this.draw = function() {
//         console.log('Drawing...');  }
// `);

// const point = new Point(1, 2);
// console.log(point);

let point = { z: 3 };
// PointFunc.call(point, 1, 2); // { x: 1, y: 2 }
PointFunc.apply(point, [1, 2]); 


console.log(point); // { z: 3, x: 1, y: 2 }