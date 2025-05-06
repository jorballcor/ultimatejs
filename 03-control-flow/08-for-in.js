let user = {
    id: 1,
    name: "John",
    age: 30,
}

for (let prop in user) {
    console.log(prop + ": " + user[prop]);

}

let animals = ["cat", "dragon", "fish"];
for (let index in animals) {
    console.log(index + ": " + animals[index]);
}