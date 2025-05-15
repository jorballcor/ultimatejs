const name = 'Jorge';
const surname = 'Gonzalez';
const fullName = name + ' ' + surname;
console.log(fullName);

function template(name) {
    return `Hey ${name}!

Welcome to "ultimate javascript" :)

Kisses Jorge.
`;
}

console.log(template(name));
