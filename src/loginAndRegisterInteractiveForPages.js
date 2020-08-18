import CryptoJS from 'crypto-js';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import {music,musicText,musicIcon,pauseMusic,audio} from './navMusic.js'
import successSignIn from './signIn.js';
import { postUser, clearUsersList, getUsersList } from './utils/axios.js';


function registrationInteractive(){

  function cryptePassword (password){
    const cryptedPassword = CryptoJS.AES.encrypt(
      JSON.stringify(password),
      'bumdigidigidai'
    ).toString();
    return cryptedPassword;
  }
  function decryptePassword (key) {
    const bytes = CryptoJS.AES.decrypt(key, 'bumdigidigidai');
  const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedPassword.slice(1,-1);
  }
const danceBoy = document.querySelector('#dance');
const reviewForm = document.querySelector('form[data-action="continue-as-js"]');
const reviewFirstInput = document.querySelector('#first-input');
const reviewSecondInput = document.querySelector('#second-input');
const reviewLabelFirst = document.querySelector('label[ data-label="first"]');
const reviewLabelSecond = document.querySelector('label[ data-label="second"]');
const checkoutBox = document.querySelector('.checkout-box');
let prevInputValidator;
const memberAuto = document.querySelector(
  'input[data-action="member-autofocus"]',
);
const reviewAuto = document.querySelector(
  'input[data-action="review-autofocus"]',
);
const inputValidators = Array.from(
  document.querySelectorAll('input[data-focus="validation"]'),
);
const inputsTypePassword = Array.from(
  document.querySelectorAll('input[type="password"]'),
);
const rpgButton = document.querySelector('.guest__btn');

let focus;

reviewForm.addEventListener('submit', e => {
  e.preventDefault();
  focus.focus();
});
reviewForm.addEventListener('click', e => {
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
});
 
  
inputValidators.forEach(el => {
  el.addEventListener('focusin', e => {
    e.target.classList.add('active');
  });
  el.addEventListener('input', e => {
    el.classList.remove('valid', 'unvalid', 'active');
    if (el.validity.valid) {
      el.classList.add('valid');
    } else {
      el.classList.add('unvalid');
    }
  });
  el.addEventListener('focusout', e => {
    el.classList.remove('valid', 'unvalid', 'active');
  });
});

const registerForm = document.querySelector(
  'form[data-action="register-form"]',
);
const registerFormNameInput = registerForm.querySelector(
  'input[name="register-name"]',
);
const registerFormEmailInput = registerForm.querySelector(
  'input[name="register-email"]',
);
const registerFormPasswordInput = registerForm.querySelector(
  'input[name="register-password"]',
);

registerForm.addEventListener('submit', e => {
  e.preventDefault();
  const secPass = cryptePassword(registerFormPasswordInput.value);

  getUsersList().then(array => {
    const findedEmail = array.find(el => el.email ===  registerFormEmailInput.value);
    if(findedEmail){
        registerFormNameInput.value = '';
        registerFormEmailInput.value = '';
        registerFormPasswordInput.value = '';
        PNotify.error('No, bro, user with this email is already registered!');
        return;
    }
    else{
        const newUser = {
          name: registerFormNameInput.value,
          email: registerFormEmailInput.value,
          password: secPass,
          xp: 0,
          allArticles: [0],
          favoritesArticles:[0],
        }
        postUser(newUser);
        PNotify.success(`Вы успешно зарегестрированы как ${registerFormNameInput.value}`);
        registerFormNameInput.value = '';
        registerFormEmailInput.value = '';
        registerFormPasswordInput.value = '';
    }
  })
  
 
});
const activeUser = JSON.parse(localStorage.getItem('active-user')); 
if(activeUser){
  return;
}

const loginForm = document.querySelector('form[data-action="login-form"]');
const loginFormEmailInput = loginForm.querySelector('input[type="email"]');
const loginFormPasswordInput = loginForm.querySelector(
  'input[type="password"]',
);

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const localLogListJson = localStorage.getItem('loglist');
  const localLogList = JSON.parse(localLogListJson);
  const newUser = {
    email: loginFormEmailInput.value,
    password: loginFormPasswordInput.value,
  };

  getUsersList()
  .then(usersArr => {
    const foundUser = usersArr.find((el) => 
    loginFormPasswordInput.value === decryptePassword(el.password) && loginFormEmailInput.value === el.email
  )
  if (typeof foundUser === 'undefined') {
    PNotify.error('Неправильный логин или пароль!');
    loginFormEmailInput.value = '';
    loginFormPasswordInput.value = '';
    loginFormPasswordInput.classList.remove('active');
  } else {
    //////////////открываем страницу и четотам
    PNotify.success(
      `Вы успешно авторизованы! Хорошего дня, ${foundUser.name})`,
    );
  if(foundUser.favoritesArticles[0] === 0){
    foundUser.favoritesArticles = [];
  } 
    if(foundUser.allArticles[0] === 0){
    foundUser.allArticles = [];
    }



    if ((musicText.textContent = 'Music off')) {
      audio.stop();
      musicIcon.innerHTML = pauseMusic;
      musicText.textContent = 'Music on';
      danceBoy.classList.remove('dance');  
      }

    successAudio.play();
    setTimeout(() => {
      successAudio.stop();
    }, 9500);
    
    localStorage.setItem('active-user',JSON.stringify(foundUser));
    loginFormPasswordInput.classList.remove('active');
    successSignIn();
  }
   
  })
  
 
});



}
const successAudio = new Audio(); // Создаём новый элемент Audio
successAudio.src =
  'https://dl.sonq.ru/music/15687/Eminem-feat-Trick-Trick_-_Welcome-2-Detroit_sonq.ru.mp3';

export {registrationInteractive,successAudio} ;