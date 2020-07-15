//Async code example

function otherFunct() {
  console.log('we are in another funct');
  console.log('do some stuff');
}

console.log('Start');

setTimeout(() => {
  console.log("We are in the timeout");
}, 2000);

console.log('End');