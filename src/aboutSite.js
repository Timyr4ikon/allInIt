// import changeTheme from './cahgeTheme'
// import galleryInteractive from './galleryInteractiveForPages';
// import {registrationInteractive} from './loginAndRegisterInteractiveForPages';
// import f from './articles';

// const ROOT = document.querySelector('#list-page');
// // const whatCanYouDo = document.querySelector('#page-info');

// // whatCanYouDo.addEventListener('click',openContentWindow)

// function openContentWindow (e) {
//     ROOT.innerHTML = `<div class="col-1"><button class="what-btn" id="nav-return-btn"></button></div>
//     <div class="col-11"> 

//   </div>`;
//     const whatReturnBtn = document.querySelector('#nav-return-btn');
    
//     changeTheme();
//     if(JSON.parse(localStorage.getItem('THEME')) === 'DARK'){
//       whatReturnBtn.classList = 'what-btn-d';
//     }
//     else{
//       whatReturnBtn.classList = 'what-btn';
//     }
//     whatReturnBtn.addEventListener('click',returnRootPage);
//     whatCanYouDo.removeEventListener('click',openContentWindow)
    
// }
// function returnRootPage(e){
//     ROOT.innerHTML = JSON.parse(localStorage.getItem('ROOT'));
//     changeTheme();
//     galleryInteractive();
//     registrationInteractive();
//     f()
//     whatCanYouDo.addEventListener('click',openContentWindow);
// }