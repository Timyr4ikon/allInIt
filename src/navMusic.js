import  {registrationInteractive,successAudio} from './loginAndRegisterInteractiveForPages.js';


    const audio = new Audio(); // Создаём новый элемент Audio
    audio.loop = true;
    audio.src = 'https://s1.muzter.net/files/mp3/little_big_-_uno_muzter.net_128.mp3';

    HTMLAudioElement.prototype.stop = function () {
      this.pause();
      this.currentTime = 0.0;
    };
const music = document.querySelector('#music');
const musicText = music.querySelector('span');
const musicIcon = music.querySelector('svg');
const danceBoy = document.querySelector('#dance');
const playMusic =
  '<path d="m436.508 74.94c-99.913-99.913-261.64-99.928-361.567 0-99.913 99.913-99.928 261.64 0 361.567 99.913 99.913 261.64 99.928 361.567 0 99.912-99.912 99.927-261.639 0-361.567zm-180.784 394.45c-117.816 0-213.667-95.851-213.667-213.667s95.851-213.666 213.667-213.666 213.666 95.851 213.666 213.667-95.85 213.666-213.666 213.666z"/><path d="m298.39 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z"/><path d="m213.057 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z"/>';
const pauseMusic =
  '<path d="m436.508 74.941c-99.913-99.913-261.639-99.928-361.566 0-99.914 99.912-99.93 261.64 0 361.567 99.913 99.913 261.639 99.928 361.566 0 99.913-99.912 99.929-261.64 0-361.567zm-180.784 394.45c-117.816 0-213.667-95.851-213.667-213.667s95.851-213.666 213.667-213.666 213.667 95.851 213.667 213.667-95.85 213.666-213.667 213.666z"/><path d="m332.617 239.148-96-74.667c-13.774-10.715-33.893-.863-33.893 16.577v149.333c0 17.563 20.25 27.186 33.893 16.577l96-74.667c10.796-8.398 10.809-24.745 0-33.153zm-87.893 48.305v-63.458l40.795 31.729z"/>';

music.addEventListener('click', e => {
  if (musicText.textContent === 'Music on') {
    successAudio.stop();
    audio.play();
    musicIcon.innerHTML = playMusic;
    musicText.textContent = 'Music off';
    danceBoy.classList.add('dance');

    return;
  }
  if (musicText.textContent === 'Music off') {
    audio.stop();
    musicIcon.innerHTML = pauseMusic;
    musicText.textContent = 'Music on';
    danceBoy.classList.remove('dance');
  }
});

export {music,musicText,musicIcon,pauseMusic,audio};