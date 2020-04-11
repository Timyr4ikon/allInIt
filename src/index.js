import './styles.css';
import './aboutSite.js';
import images from './imageList.js'
import axios from 'axios';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css'
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyButtons from '../node_modules/pnotify/dist/es/PNotifyButtons.js';
window.addEventListener('DOMContentLoaded',(e) => {
  audio = new Audio(); // Создаём новый элемент Audio
 audio.src = "https://dl1.mp3party.net/download/9230836";
 successAudio = new Audio(); // Создаём новый элемент Audio
 successAudio.src = "https://dl.sonq.ru/music/15687/Eminem-feat-Trick-Trick_-_Welcome-2-Detroit_sonq.ru.mp3";
 HTMLAudioElement.prototype.stop = function(){
         this.pause();
         this.currentTime = 0.0;
 }
})

let audio;
let successAudio;

PNotify.defaults.delay = 2500;
PNotify.info({
  text: `Hey, bro`
});
PNotify.info({
  text: `I recommend you to click on "What can you do?"`
});



const LOGLIST = [{
    name: 'Hob',
    email: 'demasdaso@asdgmail.com',
    password: 'loveydasou3',
    xp: 10,
  },
  {
    name: 'Rob',
    email: 'demo@gmail.com',
    password: 'loveyou3',
    xp: 1110,
  }
]
if (!localStorage.getItem('loglist')) {
  localStorage.setItem('loglist', JSON.stringify(LOGLIST));
}
const reviewForm = document.querySelector('form[data-action="continue-as-js"]');
const reviewFirstInput = document.querySelector('#first-input');
const reviewSecondInput = document.querySelector('#second-input');
const reviewLabelFirst = document.querySelector('label[ data-label="first"]');
const reviewLabelSecond = document.querySelector('label[ data-label="second"]');
const memberAuto = document.querySelector('input[data-action="member-autofocus"]');
const reviewAuto = document.querySelector('input[data-action="review-autofocus"]');
const inputValidators = Array.from(document.querySelectorAll('input[data-focus="validation"]'));
const inputsTypePassword = Array.from(document.querySelectorAll('input[type="password"]'));
const rpgButton = document.querySelector('.guest__btn');

let focus;

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  focus.focus();
})
reviewForm.addEventListener('click', (e) => {
  if (e.target === reviewLabelFirst) {
    reviewFirstInput.checked = true;
    focus = memberAuto;
    rpgButton.click();

  }
  if (e.target === reviewLabelSecond) {
    reviewSecondInput.checked = true;
    focus = reviewAuto;
    rpgButton.click();

  }
})

inputValidators.forEach(el => {
  el.addEventListener('focusin', (e) => {
    e.target.classList.add('active');
  });
  el.addEventListener('input', (e) => {
    el.classList.remove('valid', 'unvalid', 'active');
    if (el.validity.valid) {
      el.classList.add('valid');
    } else {
      el.classList.add('unvalid');
    }
  });
  el.addEventListener('focusout', (e) => {
    el.classList.remove('valid', 'unvalid', 'active');
  })
})



const gallery = document.querySelector('.gallery');
const lightImg = document.querySelector('.lightbox__image');
const lightbox = document.querySelector('.js-lightbox');
const btnModalWindow = document.querySelector('button[data-action="close-lightbox"]');
const lightOverlay = document.querySelector('.lightbox__overlay');
const arr = images.map(el => el.original);


const createList = function (arr) {
  const array = [];
  arr.forEach(el => {
    const galleryItem = document.createElement('li');
    const galleryLink = document.createElement('a');
    const galleryImg = document.createElement('img');

    galleryItem.append(galleryLink);
    galleryLink.append(galleryImg);

    galleryItem.classList.add('gallery__item');
    galleryLink.classList.add('gallery__link');
    galleryImg.classList.add('gallery__image');

    galleryLink.href = el.original;
    galleryImg.src = el.preview;
    galleryImg.dataset.source = el.original;
    galleryImg.alt = el.description;

    array.push(galleryItem);
  })
  gallery.append(...array);
}

const openModalWindow = function (e) {
  e.preventDefault();
  const currentTarget = e.target;
  if (currentTarget === e.currentTarget) {
    return;
  }
  lightImg.src = currentTarget.dataset.source;
  lightbox.classList.add('is-open');

  window.addEventListener('keydown', actsForGallery);
}

const closeModalWindow = function (e) {
  lightbox.classList.remove('is-open');
  lightImg.src = '';
  window.removeEventListener('keydown', actsForGallery);
}

const closeOnOverlay = function (e) {
  if (e.target === lightImg) {
    return;
  }
  closeModalWindow();
}

const actsForGallery = function (e) {
  switch (e.code) {
    case 'Escape':
      closeModalWindow();
      break;
    case 'ArrowRight':
      nextImg(e.target);
      break;
    case 'ArrowLeft':
      prevImg();
      break;
  }
}

const nextImg = function (e) {
  const imgs = document.querySelectorAll(' .gallery__item .gallery__link .gallery__image');
  const currentSrc = lightImg.src; //picture
  const srcs = (Array.from(imgs)).map(img => img.dataset.source)
  const currentIdx = srcs.indexOf(srcs.find(el => el === currentSrc))
  let nextIdx = currentIdx + 1;
  lightImg.src = arr[nextIdx];
  if (currentIdx === imgs.length - 1) {
    lightImg.src = arr[currentIdx];
  }
}

const prevImg = function (a) {
  const imgs = document.querySelectorAll(' .gallery__item .gallery__link .gallery__image');
  const currentSrc = lightImg.src; //picture
  const srcs = (Array.from(imgs)).map(img => img.dataset.source)
  const currentIdx = srcs.indexOf(srcs.find(el => el === currentSrc))
  let prevIdx = currentIdx - 1;
  lightImg.src = arr[prevIdx];
  if (currentIdx === 0) {
    lightImg.src = arr[currentIdx];
  }
}



gallery.addEventListener('click', openModalWindow);
btnModalWindow.addEventListener('click', closeModalWindow);
lightbox.addEventListener('click', closeOnOverlay);


createList(images);

const ROOT = document.querySelector('#list-page');
const ARTICLES = document.querySelector('li[data-action="open-second-page"]');
const CHECKOUT = document.querySelector('li[data-action="open-first-page"]');
const checkCheckout = Array.from(document.querySelectorAll('span[data-action="red-check"]'));
const checkArticles = Array.from(document.querySelectorAll('span[data-action="red-uncheck"]'));
let currentPage = 1;

ARTICLES.addEventListener('click', paintSecondPage);

function paintSecondPage(e) {
  successAudio.stop();
  checkCheckout.forEach(el => el.classList.remove('checked'));
  checkArticles.forEach(el => el.classList.add('checked'))
  ROOT.innerHTML = ` <div class="offset-1 col-4">
    <div class="fast-search">
      <form class="search-form" data-action="fetch-articles">
          <button class="search-form__btn" type="submit"></button>
          <input type="search" class="search-form__input" name="fast-search" placeholder="cats,dogs,burgers..." autofocus data-action="search-query">
      </form>
  </div>
</div>

    <ul class="col-12 second-list" data-action="root-for-list">
        <li>
            <img src="https://cdn.pixabay.com/photo/2019/03/28/14/34/surf-4087278_960_720.jpg" width="100%">
            <img src="https://cdn.pixabay.com/photo/2016/11/19/10/30/beach-1838501__340.jpg" width="100%">
            <img src="https://cdn.pixabay.com/photo/2016/07/21/18/46/surf-1533278_960_720.jpg" width="100%">
            <img src="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576_960_720.jpg" width="100%">

        </li>
    </ul>
    <button type="enter" class="dn" data-action="load-more"></button>
     `
  const formForFetch = document.querySelector('form[ data-action="fetch-articles"]');
  formForFetch.addEventListener('submit', sendRequest);
  ARTICLES.removeEventListener('click', paintSecondPage);

}
const KEY = 'fb5321de553d4491bb466d124f3888d1';

function sendRequest(e) {
  e.preventDefault();
  currentPage = 1;
  const rootForList = document.querySelector('ul[data-action="root-for-list"]');
  let value = e.currentTarget.querySelector('input').value;
  const btnForLoadMore = document.querySelector('button[data-action="load-more"]');
  if (value.length !== 0) {
    fetchAnswer(value)
      .then(data => {
        PNotify.info('Please wait some time!')
        if (data.data.totalResults === 0) {
          btnForLoadMore.classList.remove('second-load-more');
          PNotify.error('We can`t find any articles(')
          rootForList.innerHTML = ``;
          currentPage = 1;
        } else {
          currentPage += 1;
          rootForList.innerHTML = createSecondList(data.data.articles);
          btnForLoadMore.classList.add('second-load-more');
          if (data.data.totalResults === rootForList.childElementCount) {
            btnForLoadMore.classList.remove('second-load-more');
          }
          PNotify.success('All articles downloaded!)')
        }
      })
      .catch(err => {
        openHackMessage();
        rootForList.innerHTML = ``
      });
    btnForLoadMore.addEventListener('click', loadMore)
  } else {
    PNotify.error('Enter article');
  }
}
function fetchAnswer (value) {
  return axios.get(`https://newsapi.org/v2/everything?q=${value}&apiKey=${KEY}&pageSize=12&page=${currentPage}`)
}
function openHackMessage(){
  return PNotify.error('Sorry, but we were hacked(')
}

function createSecondItem(el) {
  if (el.urlToImage !== null && el.author !== null) {
    return `
    <li class="second-item" id="second-item">
        <a href="${el.url}" class="second-link" target="_blank">
            <h2 class="second-item--title">${el.title}</h2>
            <img class="second-item--img" src="${el.urlToImage}" alt="IMPOSSIBLE TO LOAD IMAGE">
            <p class="second-item--content"><span class="second-item--span">Author:</span> ${el.author}</p>
            <p class="indent">${el.description}</p>
        </a>
    </li>`
  } else {
    return '';
  }
}

function createSecondList(data) {
  return `${data.reduce((markup, el) => markup += createSecondItem(el), "")}`;
}

function loadMore() {
  const rootForList = document.querySelector('ul[data-action="root-for-list"]');
  let value = document.querySelector('input[data-action="search-query"]').value;
  const btnForLoadMore = document.querySelector('button[data-action="load-more"]');
  fetchAnswer(value)
  .then(data => {
    currentPage += 1;
          rootForList.innerHTML += createSecondList(data.data.articles);
          btnForLoadMore.classList.add('second-load-more');
          PNotify.success('You can upload more articles!')
          if (data.data.totalResults === rootForList.childElementCount) {
            btnForLoadMore.classList.remove('second-load-more');
            PNotify.error('Sorry, but all articles were downloaded(')
          }
  
  })
  .catch(err => {
    openHackMessage();
    rootForList.innerHTML = ``;
  });


}

const loginForm = document.querySelector('form[data-action="login-form"]');
const loginFormEmailInput = loginForm.querySelector('input[type="email"]');
const loginFormPasswordInput = loginForm.querySelector('input[type="password"]');


loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const localLogListJson = localStorage.getItem('loglist');
  const localLogList = JSON.parse(localLogListJson);
  const newUser = {
    email: loginFormEmailInput.value,
    password: loginFormPasswordInput.value
  };
  const foundUser = localLogList.find(el =>
    el.email === newUser.email && el.password === newUser.password
  );
  if (typeof foundUser === 'undefined') {
    PNotify.error('Неправильный логин или пароль!')
    loginFormEmailInput.value = '';
    loginFormPasswordInput.value = '';
    loginFormPasswordInput.classList.remove('active');
  } else {
    //////////////открываем страницу и четотам
    PNotify.success(`Вы успешно авторизованы! Хорошего дня, ${foundUser.name})`);

    
    if(musicText.textContent = 'Music off'){
      audio.stop();
      musicIcon.innerHTML = pauseMusic;
        musicText.textContent = 'Music on';
    }
    

    successAudio.play();
    setTimeout(()=> {
      successAudio.stop();
    },10500)
    loginFormEmailInput.value = '';
    loginFormPasswordInput.value = '';
    loginFormPasswordInput.classList.remove('active');
  }

})




const registerForm = document.querySelector('form[data-action="register-form"]');
const registerFormNameInput = registerForm.querySelector('input[name="register-name"]');
const registerFormEmailInput = registerForm.querySelector('input[name="register-email"]');
const registerFormPasswordInput = registerForm.querySelector('input[name="register-password"]');





registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  LOGLIST.push(registerNewUser(registerFormNameInput.value, registerFormEmailInput.value, registerFormPasswordInput.value));
  registerFormNameInput.value = '';
  registerFormEmailInput.value = '';
  registerFormPasswordInput.value = '';
  localStorage.setItem('loglist', JSON.stringify(LOGLIST));
})

function registerNewUser(name, email, password) {
  const alredyRegister = {
    name,
    email,
    password,
    xp: 0
  }
  PNotify.success(`Вы успешно зарегестрированы как ${name}`)
  return alredyRegister;
}

const Theme = {
  LIGHT: 'header-background--ligth',
  DARK: 'header-background--dark',
};
const changeThemeBlock = document.querySelector('.js-switch-input');
const check = document.querySelector('#theme-switch-control');
const background = document.querySelector('div[data-action="background-js"]');
let localBackTheme;
let localContentTheme;
let localIconTheme;
let localTitleTheme;
let localReviewTheme;
let localIconBackTheme;
let localSecondItemTheme;

if (Object.keys(localStorage).includes('back-theme')) {
  background.classList = '';
  background.classList.add(JSON.parse(localStorage.getItem('back-theme')));
}
if (background.classList.contains(Theme.DARK)) {
  check.checked = true;
}
const changeTheme = function (remove, add) {
  background.classList.remove(remove);
  background.classList.add(add);
  localBackTheme = add;
};



const contentThemeChange = document.querySelector('div[data-action="dark"]');

const ContentTheme = {
  LIGHT: 'bcw',
  DARK: 'bcd',
};
if (Object.keys(localStorage).includes('content-theme')) {
  contentThemeChange.classList.remove('bcw');
  contentThemeChange.classList.remove('bcd');
  contentThemeChange.classList.add(
    JSON.parse(localStorage.getItem('content-theme')),
  );
}
const changeContentTheme = function (remove, add) {
  contentThemeChange.classList.remove(remove);
  contentThemeChange.classList.add(add);
  localContentTheme = add;
};


const reviewChange = document.querySelector('.review');

const reviewTheme = {
  LIGHT: 'rl',
  DARK: 'rd',
};
if (Object.keys(localStorage).includes('review-theme')) {
  reviewChange.classList.remove('rl');
  reviewChange.classList.remove('rd');
  reviewChange.classList.add(JSON.parse(localStorage.getItem('review-theme')));
}
const changeReviewTheme = function (remove, add) {
  reviewChange.classList.remove(remove);
  reviewChange.classList.add(add);
  localReviewTheme = add;
};

const titleTheme = document.querySelectorAll('[data-action="dark-content"]');

const TitleTheme = {
  LIGHT: 'cd',
  DARK: 'cw',
};
if (Object.keys(localStorage).includes('title-theme')) {
  titleTheme.forEach(el => {
    el.classList.remove('cd');
    el.classList.remove('cw');
    el.classList.add(JSON.parse(localStorage.getItem('title-theme')));
  });
}
const changeTitleTheme = function (remove, add) {
  titleTheme.forEach(el => {
    el.classList.remove(remove);
    el.classList.add(add);
  });
  localTitleTheme = add;
};

const IconBackTheme = document.querySelectorAll(
  '[data-action="dark-icon--back"]',
);
const TitleThemes = {
  LIGHT: 'fd',
  DARK: 'fw',
};
if (Object.keys(localStorage).includes('icon-back-theme')) {
  IconBackTheme.forEach(el => {
    el.classList.remove('bcd');
    el.classList.remove('bcw');
    el.classList.add(JSON.parse(localStorage.getItem('icon-back-theme')));
  });
}
const changeIconBackTheme = function (remove, add) {
  IconBackTheme.forEach(el => {
    el.classList.remove(remove);
    el.classList.add(add);
  });
  localIconBackTheme = add;
};
const IconTheme = document.querySelectorAll('[data-action="dark-icon"]');

if (Object.keys(localStorage).includes('icon-fill-theme')) {
  IconTheme.forEach(el => {
    el.classList.remove('fd');
    el.classList.remove('fw');
    el.classList.add(JSON.parse(localStorage.getItem('icon-fill-theme')));
  });
}
const changeIconTheme = function (remove, add) {
  IconTheme.forEach(el => {
    el.classList.remove(remove);
    el.classList.add(add);
  });
  localIconTheme = add;
};






changeThemeBlock.addEventListener('change', e => {

  if (check.checked) {
    changeTheme(Theme.LIGHT, Theme.DARK);
    changeContentTheme(ContentTheme.LIGHT, ContentTheme.DARK);
    changeTitleTheme(TitleTheme.LIGHT, TitleTheme.DARK);
    changeIconBackTheme(ContentTheme.DARK, ContentTheme.LIGHT);
    changeIconTheme(TitleThemes.DARK, TitleThemes.LIGHT);
    changeReviewTheme(reviewTheme.LIGHT, reviewTheme.DARK);
  }

  if (!check.checked) {
    changeTheme(Theme.DARK, Theme.LIGHT);
    changeContentTheme(ContentTheme.DARK, ContentTheme.LIGHT);
    changeTitleTheme(TitleTheme.DARK, TitleTheme.LIGHT);
    changeIconBackTheme(ContentTheme.LIGHT, ContentTheme.DARK);
    changeIconTheme(TitleThemes.LIGHT, TitleThemes.DARK);
    changeReviewTheme(reviewTheme.DARK, reviewTheme.LIGHT);
  }
  localStorage.setItem('back-theme', JSON.stringify(localBackTheme));
  localStorage.setItem('content-theme', JSON.stringify(localContentTheme));
  localStorage.setItem('title-theme', JSON.stringify(localTitleTheme));
  localStorage.setItem('icon-back-theme', JSON.stringify(localIconBackTheme));
  localStorage.setItem('icon-fill-theme', JSON.stringify(localIconTheme));
  localStorage.setItem('review-theme', JSON.stringify(localReviewTheme));
});

localStorage.setItem('ROOT', JSON.stringify(ROOT.innerHTML));


const music = document.querySelector('#music');
const musicText = music.querySelector('span');
const musicIcon = music.querySelector('svg');
const playMusic = '<path d="m436.508 74.94c-99.913-99.913-261.64-99.928-361.567 0-99.913 99.913-99.928 261.64 0 361.567 99.913 99.913 261.64 99.928 361.567 0 99.912-99.912 99.927-261.639 0-361.567zm-180.784 394.45c-117.816 0-213.667-95.851-213.667-213.667s95.851-213.666 213.667-213.666 213.666 95.851 213.666 213.667-95.85 213.666-213.666 213.666z"/><path d="m298.39 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z"/><path d="m213.057 160.057c-11.598 0-21 9.402-21 21v149.333c0 11.598 9.402 21 21 21s21-9.402 21-21v-149.333c0-11.598-9.401-21-21-21z"/>';
const pauseMusic = '<path d="m436.508 74.941c-99.913-99.913-261.639-99.928-361.566 0-99.914 99.912-99.93 261.64 0 361.567 99.913 99.913 261.639 99.928 361.566 0 99.913-99.912 99.929-261.64 0-361.567zm-180.784 394.45c-117.816 0-213.667-95.851-213.667-213.667s95.851-213.666 213.667-213.666 213.667 95.851 213.667 213.667-95.85 213.666-213.667 213.666z"/><path d="m332.617 239.148-96-74.667c-13.774-10.715-33.893-.863-33.893 16.577v149.333c0 17.563 20.25 27.186 33.893 16.577l96-74.667c10.796-8.398 10.809-24.745 0-33.153zm-87.893 48.305v-63.458l40.795 31.729z"/>'


music.addEventListener('click',(e) => {
    if(musicText.textContent === 'Music on'){
      successAudio.stop();
        audio.play();
        musicIcon.innerHTML = playMusic;
        musicText.textContent = 'Music off';
        return;
    }
    if(musicText.textContent === 'Music off'){
        audio.stop();
        musicIcon.innerHTML = pauseMusic;
        musicText.textContent = 'Music on';
    }
})


