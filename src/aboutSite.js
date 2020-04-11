const ROOT = document.querySelector('#list-page');
const whatCanYouDo = document.querySelector('#page-info');

whatCanYouDo.addEventListener('click',(e) => {
    ROOT.innerHTML = `<div class="col-1"><button class="what-btn"></button></div>
    <div class="col-11"> 

  </div>`;
    const whatReturnBtn = document.querySelector('.what-btn');
    whatReturnBtn.addEventListener('click',returnRootPage)
})

function returnRootPage(e){
    ROOT.innerHTML = JSON.parse(localStorage.getItem('ROOT'));
}