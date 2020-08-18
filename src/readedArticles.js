import changeTheme from './cahgeTheme'
import galleryInteractive from './galleryInteractiveForPages';
import {registrationInteractive} from './loginAndRegisterInteractiveForPages';
import f from './articles';
import signIn from './signIn.js';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyButtons from '../node_modules/pnotify/dist/es/PNotifyButtons.js';

const ROOT = document.querySelector('#list-page');
const readedArticles = document.querySelector('#readed-articles');

readedArticles.addEventListener('click',openContentWindow);

function openContentWindow (e) {
  const activeUser = JSON.parse(localStorage.getItem('active-user'));
    if(!activeUser){
      return PNotify.error({
        text: `You have to log in/sign in!!! `,
      });
    }
    if(activeUser.allArticles.length === 0){
      return PNotify.error({
        text: `You need to read at least one article `,
      });
    }
    ROOT.innerHTML = `<div class="col-1"><button class="what-btn" id="nav-return-btn"></button></div>
    <div class="col-11"> 
        <ul class="readed-articles" id="readed-articles-list"></ul>
    </div>`;
    const readedArticlesBtn = document.querySelector('#nav-return-btn');
    const ul = document.querySelector('#readed-articles-list');
    if(activeUser){
      ul.innerHTML = activeUser.allArticles.join(' ')
    }
    changeTheme();
    if(JSON.parse(localStorage.getItem('THEME')) === 'DARK'){
      readedArticlesBtn .classList = 'what-btn-d';
    }
    else{
      readedArticlesBtn .classList = 'what-btn';
    }
    readedArticlesBtn .addEventListener('click',returnRootPage);
}
function returnRootPage(e){
    ROOT.innerHTML = JSON.parse(localStorage.getItem('ROOT'));
    const activeUser = JSON.parse(localStorage.getItem('active-user')); 
    if(activeUser){
      signIn();
    }
    changeTheme();
    galleryInteractive();
    registrationInteractive();
    f();
}