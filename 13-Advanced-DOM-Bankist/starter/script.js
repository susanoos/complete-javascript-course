'use strict';

///////////////////////////////////////
// Modal window

const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const tabsContainer = document.querySelector('.operations__tab-container');
const header = document.querySelector('.header');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//btn scrolling
btnScroll.addEventListener('click', e => {
  // gives x & y coordinates from the viewport and dimensions
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // adding scrolling old way of doing it
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // new way
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//event delegations
// page navigation
// document.querySelectorAll('.nav__link').forEach(function (e) {
//   e.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// could had been done in CSS
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  // matching strat
  if (e.target.classList.contains('nav__link')) {
    // console.log(`link`);
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  // Guard clause
  if (!clicked) return;

  // remove classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  //Active tab

  clicked.classList.add('operations__tab--active');

  // Active content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// menu fade
const handlerHover = (e, opacity) => {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};
nav.addEventListener('mouseover', e => handlerHover(e, 0.5));
nav.addEventListener('mouseout', e => handlerHover(e, 1));

// Sticky nav: using intersection observer API
// const obsCallback = (entries, observer) => {
//   entries.forEach(entry => console.log(entry));
// };
// const obsOptions = {
//   root: null, // allows us to observe the entire viewport
//   threshold: [0, 0.2], // percentages to have visable in our viewport
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);
const stickyNav = entries => {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // applies pixels outside our target
});
headerObserver.observe(header);

// Reveal section
const allSections = document.querySelectorAll('.section');
const revealSection = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  // section.classList.add('section--hidden');
  sectionObserver.observe(section);
});

// Lazy IMGS
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  // Replace src attribute with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: `200px`,
});

imgTargets.forEach(img => {
  imgObserver.observe(img);
});

// Slider
const slider = () => {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  const maxSlides = slides.length;
  let curSlide = 0;

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * i}%)`;
  });

  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activeDot = slide => {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = s => {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  };

  const nextSlide = () => {
    if (curSlide === maxSlides - 1) {
      curSlide = 0;
    } else curSlide++;
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  const prevSlide = () => {
    if (curSlide === 0) {
      curSlide = maxSlides - 1;
    } else curSlide--;
    goToSlide(curSlide);
    activeDot(curSlide);
  };

  const init = () => {
    goToSlide(0);
    createDots();
    activeDot(0);
  };
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // changing slides with arrow keys
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });

  dotContainer.addEventListener('click', e => {
    if (e.target.classList.contains('dots__dot')) {
      curSlide = +e.target.dataset.slide;
      goToSlide(curSlide);
      activeDot(curSlide);
    }
  });
};
slider();
/*
////////////////////////////////////////////////////////////
const initalCoords = section1.getBoundingClientRect();
// bad performance
window.addEventListener('scroll', e => {
  // console.log(window.scrollY);
  if (window.scrollY > initalCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

// selecting elements

const allSections = document.querySelectorAll('.section');
console.log(allSections);

// creating and inserting sections
//.insertAdjacentHTML
console.log(document.documentElement);
const header = document.querySelector('.header');
const msg = document.createElement('div');
msg.classList.add('cookie-message');
// msg.textContent = 'We use cookies for improved funtionality and analytics.';
msg.innerHTML =
  'We use cookies for improved funtionality and analytics. <button class="btn btn--close-cookies">Got it!</button>';

//'.prepend' adds it before the first child element can also use '.before'
// header.prepend(msg);
// '.append' adds it after the last child element can also use '.after'
header.append(msg);

// deleting elements
document.querySelector('.btn--close-cookies').addEventListener('click', () => {
  msg.remove();
});

// styles
msg.style.backgroundColor = '#37383d';
msg.style.width = '120%';
const height = (msg.style.height =
  Number.parseFloat(getComputedStyle(msg).height, 10) + 30 + 'px');

// change custom css properties
document.documentElement.style.setProperty('--color-primary', 'orangered');


// 2 other ways of listening for events
const h1 = document.querySelector('h1');

// old way
// h1.onmouseenter = e => {
//   alert('Great you are reading the heading');
// };

const alertH1 = e => {
  alert('Great you are reading the heading');

  // removing event listeners after execution
  h1.removeEventListener('mouseenter', alertH1);
};
// new way
h1.addEventListener('mouseenter', alertH1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();

  // stopping event propagation will stop the event from reaching its parent elements
  // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});


// DOM Traversing IMPORTANT
const h1 = document.querySelector('h1');

// going down: child
// selects the child elements with the class 'highlight'
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); // not as used
console.log(h1.children); // gets the elements in the h1 (works only for direct children)
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'red';

// going up: parent
console.log(h1.parentNode);
console.log(h1.parentElement);

// '.closest' finds the parent element
h1.closest('.header').style.background = 'var(--gradient-secondary)'; // IMPORTANT ONE

// going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/
