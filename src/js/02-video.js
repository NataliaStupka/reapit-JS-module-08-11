console.log('Home worck 8.2: npm install @vimeo/player');
//-------------------------------------------------------
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time'; //localStorage
const savedVideoTime = JSON.parse(localStorage.getItem(STORAGE_KEY)); //витягуєм з localStorage значення поточний час зупинки

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

startVideo();

player.on('play', function (data) {
  console.log('played the video!:', data);
});

//Поточний час
player.on('timeupdate', throttle(updateTime, 1000));
function updateTime(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds));
}

//відбувається при загрузці сторінки
function startVideo() {
  if (!savedVideoTime) {
    return;
  }
  console.log('збереженний час', savedVideoTime);

  //відтворення зі збереженої позиції (метод setCurrentTime)
  player
    .setCurrentTime(savedVideoTime)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}

//назва відео
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
