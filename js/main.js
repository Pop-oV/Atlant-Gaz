const popupOpen = document.querySelector('.promo__btn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__image')


popupOpen.addEventListener('click', function(e) {
  e.preventDefault()
  popup.classList.add('active');

  popupClose.addEventListener('click', () => {
    popup.classList.remove('active')
  })
})


const titles = document.querySelectorAll('.accordion__content');
const contens = document.querySelectorAll('.accordion__text');

titles.forEach(item => item.addEventListener('click', () => {
  const activeContent = document.querySelector('#' + item.dataset.tab);
  if (activeContent.classList.contains('active')) {
    activeContent.classList.remove('active');
    item.classList.remove('active');
    // activeContent.style.maxHeight = 0;
  } else {
    contens.forEach(element => {
      element.classList.remove('active');
      // element.style.maxHeight = 0;
    });

    titles.forEach(element => element.classList.remove('active'));

    item.classList.add('active');
    activeContent.classList.add('active');
    // activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
  }
}))

document.querySelector('[data-tab="tab-2"]').classList.add('active');
document.querySelector('#tab-2').classList.add('active');
// document.querySelector('#tab-2').style.maxHeight = document.querySelector('#tab-2').scrollHeight + 'px';


let btn = document.querySelector('.btn')
//
function magic() {
  if (window.pageYOffset > 450) {
    btn.style.opacity = '1'
  } else { btn.style.opacity = '0' }
}
//
btn.onclick = function () {
  window.scrollTo(0, 0)
}

// When scrolling, we run the function
window.onscroll = magic