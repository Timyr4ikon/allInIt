import './styles.css';
// import './aboutSite.js';
import './cahgeTheme.js';
import './articles.js';
import './navMusic.js';
import './readedArticles.js';
import './favoritesArticles.js';
import './loginAndRegisterInteractiveForPages.js';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyButtons from '../node_modules/pnotify/dist/es/PNotifyButtons.js';
import galleryInteractive from './galleryInteractiveForPages';
import { registrationInteractive } from './loginAndRegisterInteractiveForPages';
import f from './articles';
import changeTheme from './cahgeTheme';
import signIn from './signIn.js';
import '../node_modules/alertifyjs/build/css/alertify.css';
import HARDFIRSTPAGE from './CHECKOUTROOT';
import { postUser, clearUsersList, getUsersList,deleteUser,refreshUser } from './utils/axios.js';
import axios from 'axios';
PNotify.defaults.delay = 2500;
// PNotify.info({
//   text: `Hey, bro`,
// });
// PNotify.info({
//   text: `I recommend you to click on "What can you do?"`,
// });
const ROOT = document.querySelector('#list-page');

const memberInner = `    
<h2 class="member__title" data-action="dark-content">are you <br> <span class="member__title--span" data-action="dark-content">member?</span></h2>
  <p class="member__subtitle--first" data-action="dark-content">Already registered?</p>
  <p class="member__subtitle--second" data-action="dark-content">You can try enter:<br><span class="member__subtitle--first">demo@gmail.com &amp;&amp; loveyou3</span> </p>

  <form action="#" class="member-form" data-action="login-form">
    <p class="member-form__text" data-action="dark-content">Email Adress<span class="red-star">*</span></p>
    <input type="email" class="member__input" name="member-email" placeholder="Email..." data-action="member-autofocus" data-focus="validation" required="">
    <p class="member-form__text" data-action="dark-content">Password<span class="red-star">*</span></p>
    <input type="password" class="member__input" pattern=".{8,16}" name="member-password" placeholder="********" data-focus="validation" required="">
      <div class="required-support">
        <p class="red-star">*Required Fields</p>
        <a href="http://rgnkc.ru/klinika-narushenij-pamyati" target="_blank"class="member__forgot-password">Forgot your password?</a>
      </div>
      <button class="member__btn">Login</button>
    </form>`;
  ROOT.innerHTML = HARDFIRSTPAGE;
  galleryInteractive();
  registrationInteractive();
  if (localStorage.getItem('active-user')) {
    signIn();
  }
  f();
  changeTheme();
  localStorage.setItem('ROOT', JSON.stringify(HARDFIRSTPAGE));

// clearUsersList()
  export { memberInner, HARDFIRSTPAGE };
