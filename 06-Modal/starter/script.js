'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// selects all classes with the same class name
const btnShowModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  //classList can add or remove classes and do more
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// NodeList acts as an array
for (let i = 0; i < btnShowModal.length; i++) {
  // will attach the event listener to every modal
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// using the document object will listen for events everywhere
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
