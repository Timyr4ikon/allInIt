import axios from 'axios';
import galleryInteracive from './galleryInteractiveForPages.js';
import {registrationInteractive} from './loginAndRegisterInteractiveForPages.js';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import changeTheme from './cahgeTheme'
import PNotifyButtons from '../node_modules/pnotify/dist/es/PNotifyButtons.js';
import signIn from './signIn.js';
import { refreshUser } from './utils/axios.js';



export default function (){
const ROOT = document.querySelector('#list-page');
const ARTICLES = document.querySelector('li[data-action="open-second-page"]');
const CHECKOUT = document.querySelector('li[data-action="open-first-page"]');
const checkCheckout = Array.from(document.querySelectorAll('span[data-action="red-check"]'));
const checkArticles = Array.from(document.querySelectorAll('span[data-action="red-uncheck"]'));
let currentPage = 1;

if(!localStorage.getItem('PAGE')){
localStorage.setItem('PAGE',JSON.stringify('CHECKOUT'));
}

if(JSON.parse(localStorage.getItem('PAGE')) === 'ARTICLES'){
  paintSecondPage();  
  ARTICLES.removeEventListener('click', paintSecondPage);
}
else{
  ARTICLES.addEventListener('click', paintSecondPage);
}


function paintFirstPage(e){
  localStorage.setItem('PAGE',JSON.stringify('CHECKOUT'));
  checkArticles.forEach(el => el.classList.remove('checked'))
  checkCheckout.forEach(el => el.classList.add('checked'));
  ROOT.innerHTML = JSON.parse(localStorage.getItem('ROOT'));
  galleryInteracive();
  registrationInteractive();
  if(localStorage.getItem('active-user')){
    signIn();
  }
  changeTheme();
  if(JSON.parse(localStorage.getItem('THEME')) === 'DARK'){
    const titleTheme = document.querySelectorAll('[data-action="dark-content"]');
    const IconTheme = document.querySelectorAll('[data-action="dark-icon"]');
  
  }
  ARTICLES.addEventListener('click', paintSecondPage);
  CHECKOUT.removeEventListener('click',paintFirstPage);
}
  
function paintSecondPage(e) {
  localStorage.setItem('PAGE',JSON.stringify('ARTICLES'));
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
  CHECKOUT.addEventListener('click',paintFirstPage);
}
const KEY = 'fb5321de553d4491bb466d124f3888d1';
function userActivity (e)  {
    const element = e.target;
    if(element.id === 'favorite-article'){
      const favoriteArticle = element.parentElement.outerHTML;
      const activeUser = JSON.parse(localStorage.getItem('active-user'));
      const articleAlreadyAdd = activeUser.favoritesArticles.find(el => el===favoriteArticle);
      if(articleAlreadyAdd){
        return PNotify.error('Article has already add')
      }
      else{
        activeUser.favoritesArticles.push(favoriteArticle);
        localStorage.setItem('active-user',JSON.stringify(activeUser));
        if(activeUser.allArticles.length === 0){
          activeUser.allArticles = [0]
        }
        refreshUser(activeUser);
      }
    }
    if(element.id === "readed-article"){
      const readedArticle = element.parentElement.outerHTML;
      const activeUser = JSON.parse(localStorage.getItem('active-user'));
      const articleAlreadyAdd = activeUser.allArticles.find(el => el===readedArticle);
      if(articleAlreadyAdd){
        return;
      }
      else{
        activeUser.allArticles.push(readedArticle);
        localStorage.setItem('active-user',JSON.stringify(activeUser));
        if(activeUser.favoritesArticles.length === 0){
          activeUser.favoritesArticles = [0]
        }
        refreshUser(activeUser);
      }
  }
}
function sendRequest(e) {
  e.preventDefault();
  currentPage = 1;
  const rootForList = document.querySelector('ul[data-action="root-for-list"]');
  if(localStorage.getItem('active-user')){
  rootForList.addEventListener('click',userActivity)
  }
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
  if (el.author === null) {
    el.author = 'No Name'
  }
  if (el.urlToImage === null) {
    el.urlToImage = 'https://i.gifer.com/origin/52/52e4bb28d095ff93d3a4019d43d628bc_w200.webp'
  }
   if(el.description.includes('<ol>') || el.description.includes('<ul>') ){
    el.description = 'Click on link'
  }
    return `
    <li class="second-item" id="second-item">
    
            <h2 class="second-item--title">${el.title}</h2>
            <img class="second-item--img" src="${el.urlToImage}" alt="IMPOSSIBLE TO LOAD IMAGE">
            <p class="second-item--content"><span class="second-item--span">Author:</span> ${el.author}</p>
            <p class="indent">${el.description}</p>
        <a href="${el.url}" id="readed-article" class="second-link" target="_blank"> Click here to read the article </a> 
        <div class="second-item--fav" id="favorite-article"></div>
    </li>`
 
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
}
