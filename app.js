
console.log('Start');


function loginUser(email, password) {
  setTimeout(() => {
    console.log('Now we have the data');
    return { userEmail: email };
  }, 1500);
}

const user = loginUser('hanssenstijn@gmail.com', 123456);
console.log(user)

console.log('End');