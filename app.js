
console.log('Start');


function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log('Now we have the data');
    callback({ userEmail: email });
  }, 1500);
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(['video1', 'video2', 'video3']);
  }, 1000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback('title of the video');
  }, 1000);
}

const user = loginUser('hanssenstijn@gmail.com', 123456, (user) => {
  console.log(user);
  getUserVideos(user.userEmail, videos => {
    console.log(videos);
    videoDetails(video[0], (title) => {
      console.log(title);
    })
  });
});

console.log('End');