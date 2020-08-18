import images from './imageList.js'

export default function  (){
    const gallery = document.querySelector('.gallery');
    const lightImg = document.querySelector('.lightbox__image');
    const lightbox = document.querySelector('.js-lightbox');
    const btnModalWindow = document.querySelector('button[data-action="close-lightbox"]');
    const lightOverlay = document.querySelector('.lightbox__overlay');
    const arr = images.map(el => el.original);
    
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
  }