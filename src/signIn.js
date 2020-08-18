import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import PNotify from 'pnotify/dist/es/PNotify';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons';
import {memberInner} from './index.js';
import {registrationInteractive} from './loginAndRegisterInteractiveForPages';
import changeTheme from './cahgeTheme';
import alertify from '../node_modules/alertifyjs/build/alertify.js';
alertify.defaults.glossary.title ='Incoming message';
import { refreshUser } from './utils/axios.js';



export default function () {
    const user = JSON.parse(localStorage.getItem('active-user'));
    const signInBlock = document.querySelector('.member');
    signInBlock.classList = 'sign-block';
    signInBlock.innerHTML = `  <h2 class="sign-block__title">we are glad to welcome you, <br> <span class="sign-block__title--span">🖤${user.name}!🖤</span></h2>
    <p class="sign-block__xp"><span class="sign-spam__xp">Your XP:</span > <span class="sign-spam__xp-2"><span class="gold">${user.xp}</span> ST</span></p>
    <p class="sign-block__xp"><span class="sign-spam__xp">Your Rank:</span > <span class="sign-spam__xp-2"><span class="gold">3</span> place</span></p>
    <p class="sign-block__xp"><span class="sign-spam__xp">All the time you read:</span ></p>
       <div class="sign-block-bottom">
           <button class="sign-block__btn">Sign out</button>
           <span class="sign-spam__books"><span class="gold">${user.allArticles.length}</span> articles</span>
       </div>`;    

       const signBtn = document.querySelector('.sign-block__btn');
       signBtn.addEventListener('click',(e) => {
           alertify.confirm('Are you shure?(🖤🖤🖤',ExitAcc);
        })
       function ExitAcc(){
            const activeUser = JSON.parse(localStorage.getItem('active-user'));
            if(activeUser.favoritesArticles.length === 0 ){
                activeUser.favoritesArticles = [0];
            }
            if(activeUser.allArticles.length === 0 ){
                activeUser.allArticles = [0];
            }
            refreshUser(activeUser)
            localStorage.removeItem('active-user');
            signInBlock.classList = 'member';
            signInBlock.innerHTML = memberInner;
            registrationInteractive();
            changeTheme();
       }
}