import HARDFIRSTPAGE from './CHECKOUTROOT';


export default function () {
const ROOT = document.querySelector('#list-page');
const logoImg = document.querySelector('#logo-img');
const changeThemeBlock = document.querySelector('.js-switch-input');
const check = document.querySelector('#theme-switch-control');
const background = document.querySelector('div[data-action="background-js"]');
const contentThemeChange = document.querySelector('div[data-action="dark"]');
const titleTheme = document.querySelectorAll('[data-action="dark-content"]');
const IconBackTheme = document.querySelectorAll(
  '[data-action="dark-icon--back"]',
);
const IconTheme = document.querySelectorAll('[data-action="dark-icon"]');

  if (!localStorage.getItem('THEME')) {
    localStorage.setItem('THEME', JSON.stringify('LIGHT'));
  }
  if(JSON.parse(localStorage.getItem('THEME')) === 'DARK'){
         darkTheme();
  }
 
  changeThemeBlock.addEventListener('change', e => {
    if (check.checked) {
      localStorage.setItem('THEME', JSON.stringify('DARK'));
      darkTheme();
    }
  
    if (!check.checked) {
     localStorage.setItem('THEME', JSON.stringify('LIGHT'));
     lightTheme()
    }
  });

  
function lightTheme () {
  const whatReturnBtn = document.querySelector('#nav-return-btn');
  check.checked = false;
  logoImg.src = 'https://i.gifer.com/origin/67/679883732263fb867202947eb4cadad4_w200.webp ';https://i.gifer.com/origin/67/679883732263fb867202947eb4cadad4_w200.webp 
  background.classList = 'header-background';
  contentThemeChange.classList.remove('bcd');
  contentThemeChange.classList.add('bcw');
  const reviewChange = document.querySelector('.review');
  if(reviewChange){
    const reviewChange = document.querySelector('.review');
    reviewChange.classList.remove('rd');
    reviewChange.classList.add('rl');
    }
  if(whatReturnBtn){
    whatReturnBtn.classList = 'what-btn';
  }
  titleTheme.forEach(el => {
    el.classList.remove('cw');
    el.classList.add('cd');
  });
  IconBackTheme.forEach(el => {
    el.classList.remove('bcw');
    el.classList.add('bcd');
  });
  IconTheme.forEach(el => {
    el.classList.remove('fd');
    el.classList.add('fw');
  });
}
function darkTheme() {
  const whatReturnBtn = document.querySelector('#nav-return-btn');
  check.checked = true;
  logoImg.src = 'https://i.gifer.com/origin/97/97d646a42e3bff61f55a059d49598596_w200.webp';
  background.classList = 'header-background--dark';
  contentThemeChange.classList.remove('bcw');
  contentThemeChange.classList.add('bcd');
  const reviewChange = document.querySelector('.review');
  if(reviewChange){
  reviewChange.classList.remove('rl');
  reviewChange.classList.add('rd');
  }
  if(whatReturnBtn){
    whatReturnBtn.classList = 'what-btn-d';
  }
  titleTheme.forEach(el => {
    el.classList.remove('cd');
    el.classList.add('cw');
  });
  IconBackTheme.forEach(el => {
    el.classList.remove('bcd');
    el.classList.add('bcw');
  });
  IconTheme.forEach(el => {
    el.classList.remove('fw');
    el.classList.add('fd');
  });
}

}












