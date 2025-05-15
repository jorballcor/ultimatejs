let now = new Date();
console.log(now); // current date and time

const date = new Date("December 11 1986 14:45 GMT-0300");
console.log(date); // specific date and time

const date2 = new Date(1986, 11, 11, 14, 45, 0);
console.log(date2); // specific date and time

const date3 = new Date(1986, 11, 25, 14-3, 15);
console.log(date3); // specific date and time

console.log("dateString", date3.toDateString());

console.log("ISOString", date3.toISOString());

console.log("timeString", date3.toTimeString());

console.log(date3.getFullYear());

date3.setFullYear(2020);

console.log(date3);