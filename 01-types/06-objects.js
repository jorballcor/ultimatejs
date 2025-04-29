// TV character
let name = "Tanjiro";
let anime = "Demon Slayer";
let age = 16;

let character = {
    name: name,
    anime: anime,
    age: age,
};
console.log(character);
console.log(character.name);
console.log(character["name"]);

character.age = 17;
character["age"] = 16
console.log(character.age);

delete character.anime;
console.log(character);