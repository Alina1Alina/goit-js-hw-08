import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timePlayer = localStorage.getItem('videoplayer-current-time')
player.setCurrentTime(JSON.parse(timePlayer))

player.on('timeupdate', throttle(function (ev) {
    localStorage.setItem('videoplayer-current-time', ev.seconds)
   
}, 1000))



