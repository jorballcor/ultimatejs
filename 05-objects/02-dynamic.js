const user = {id: 1};

user.name = 'James';
user.save = function() {
  console.log('Saving user...', user.name);
}

user.save(); // Saving user... James

delete user.name;
delete user.save;
console.log(user); // { id: 1 }

const anotherUser = Object.freeze( {id: 1});
anotherUser.name = 'Nick';
anotherUser.id = 2;
console.log(anotherUser); // { id: 1 }
// I can't change properties or add new ones


const anotherOtherUser = Object.seal( {id: 1});
anotherOtherUser.name = 'Nick';
anotherOtherUser.id = 2;
console.log(anotherOtherUser); // { id: 2 }
// I can't delete properties but I can change them