
console.log('Start');


function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Now we have the data');
      resolve({ userEmail: email });
    }, 1500);
  })

}

function getUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['video1', 'video2', 'video3']);
    }, 1000);
  })
}

function videoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('title of the video');
    }, 1000);
  })
}

loginUser('S', 'H')
  .then(user =>
    getUserVideos(user.email))
  .then(videos =>
    videoDetails(videos[0]))
  .then(detail =>
    console.log(detail));

console.log('End');