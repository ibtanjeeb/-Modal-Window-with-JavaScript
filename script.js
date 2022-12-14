'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnColseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const OpenModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', OpenModal);

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnColseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  // console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
