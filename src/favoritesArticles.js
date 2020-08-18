import changeTheme from './cahgeTheme'
import galleryInteractive from './galleryInteractiveForPages';
import {registrationInteractive} from './loginAndRegisterInteractiveForPages';
import f from './articles';
import signIn from './signIn.js';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyButtons from '../node_modules/pnotify/dist/es/PNotifyButtons.js';
import { refreshUser } from './utils/axios.js';
import alertify from '../node_modules/alertifyjs/build/alertify.js';
alertify.defaults.glossary.title ='Incoming message';

const ROOT = document.querySelector('#list-page');
const favoritesArticles = document.querySelector('#favorites-articles');

favoritesArticles.addEventListener('click',openContentWindow)

function openContentWindow (e) {
  const activeUser = JSON.parse(localStorage.getItem('active-user'));
  if(!activeUser){
    return PNotify.error({
      text: `You have to log in/sign in!!! `,
    });
  }
  if(activeUser.favoritesArticles.length === 0){
    return PNotify.error({
      text: `You need to read at least one article `,
    });
  }
    ROOT.innerHTML = `<div class="col-1"><button class="what-btn" id="nav-return-btn"></button>
    <button class="clear-favorites-list"></button></div>
    <div class="col-11"> 
      <ul class="readed-articles" id="favorite-list"></ul>
      
  </div>`;
    const whatReturnBtn = document.querySelector('#nav-return-btn');
    const clearArticlesBtn = document.querySelector('.clear-favorites-list')
    const ul = document.querySelector('#favorite-list');
    ul.innerHTML = activeUser.favoritesArticles.join(' ');
    clearArticlesBtn.addEventListener('click',(e) => {
      alertify.confirm('Clear your favorites articles?(🖤🖤🖤',clearList);
    })
   
    changeTheme();
    if(JSON.parse(localStorage.getItem('THEME')) === 'DARK'){
      whatReturnBtn.classList = 'what-btn-d';
    }
    else{
      whatReturnBtn.classList = 'what-btn';
    }
    whatReturnBtn.addEventListener('click',returnRootPage);
    
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

function clearList (e){
  const activeUser = JSON.parse(localStorage.getItem('active-user'));
  const clearArticlesBtn = document.querySelector('.clear-favorites-list')
  activeUser.favoritesArticles = [];
      localStorage.setItem('active-user',JSON.stringify(activeUser));
      refreshUser({...activeUser,favoritesArticles:[0]});
      ROOT.innerHTML = JSON.parse(localStorage.getItem('ROOT'));
      signIn();
      changeTheme();
      galleryInteractive();
      registrationInteractive();
      f();
    clearArticlesBtn.removeEventListener('click',clearList)

}