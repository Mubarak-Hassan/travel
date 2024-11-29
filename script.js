// 'use strict';
const navbar = document.querySelector('.nav-bar');
const navItems = document.querySelector('.nav-items');
const navLinks = document.querySelectorAll('.nav--link');
const heroSection = document.querySelector('.hero-section');
const valueDisplayed = document.querySelectorAll('.num');
const header = document.querySelector('.header');
const section2txt = document.querySelectorAll('.section-2-raveal');
const sec2Riview = document.querySelectorAll('.sec-2-reviews');
// console.log(section2txt);
const handleHover = function (e, opacity) {
  const link = e.target.closest('.nav--link');
  if (!link) return;
  navLinks.forEach(el => {
    if (el !== link) {
      el.style.opacity = this;
    }
  });
};
navItems.addEventListener('mouseover', handleHover.bind(0.5));
navItems.addEventListener('mouseout', handleHover.bind(1));

const revealText = function (enteries, observer) {
  const [entry] = enteries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  document.querySelector('.hero-text').classList.add('hero-active');
};
const sectionObserver = new IntersectionObserver(revealText, {
  root: null,
  threshold: 0,
});
sectionObserver.observe(heroSection);

valueDisplayed.forEach(el => {
  let starter = 0;

  const endValue = el.dataset.val;
  const updatingCounter = function () {
    if (endValue < 1000) {
      starter += 1;
      el.innerHTML = starter;
    }
    if (endValue >= 1000) {
      starter += 100;
      el.innerHTML = starter / 1000 + 'k+';
    }
    if (starter >= endValue) {
      clearInterval(counting);
    }
  };
  const counting = setInterval(updatingCounter, 7);
});
const section_1 = document.querySelector('.section-1');
const stickyNav = function (enteries, observer) {
  const [entry] = enteries;
  if (!entry.isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};
const section_1Observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});
section_1Observer.observe(section_1);
const section_2 = document.querySelector('.section-2');

const section2Revael = function (enteries, observer) {
  const [entry] = enteries;
  if (!entry.isIntersecting) return;

  section2txt.forEach(txt => {
    txt.classList.add('section-2-raveal-active');
  });
  sec2Riview.forEach(riview => {
    riview.classList.add('reviews-reveal');
  });
};
const section_2Observer = new IntersectionObserver(section2Revael, {
  root: null,
  threshold: 0.5,
});
section_2Observer.observe(section_2);
const places = document.querySelectorAll('.place');
const panels = document.querySelectorAll('.panel');
// Long way//
/*

let value;
const removePanel = function () {
  panels.forEach(p => p.classList.remove('panel-active'));
  places.forEach(place => place.classList.remove('place-active'));
};

panels.forEach((panel, i) => {
  panel.addEventListener('click', e => {
    if (e.target.classList.contains('panel')) {
      removePanel();
      e.target.classList.add('panel-active');
      places.forEach(place => {
        value = parseInt(place.dataset.val);
        if (value === i + 1) {
          place.classList.add('place-active');
        }
      });
    }
  });
});
*/
//short way//
const removePanel = function () {
  panels.forEach(p => p.classList.remove('panel-active'));
  places.forEach(place => place.classList.remove('place-active'));
};

panels.forEach((panel, i) => {
  panel.addEventListener('click', e => {
    if (e.target.classList.contains('panel')) {
      removePanel();
      panel.classList.add('panel-active');

      const correspondingPlace = Array.from(places).find(
        place => parseInt(place.dataset.val) === i + 1
      );
      if (correspondingPlace) {
        correspondingPlace.classList.add('place-active');
      }
    }
  });
});
navLinks.forEach(navlink => {
  navlink.addEventListener('click', e => {
    e.preventDefault();
    const link = e.target;
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
const signUPButton = document.querySelector('.btn-2');
const signinButton = document.querySelector('.btn-1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const input = document.querySelectorAll('input');
const btnSubmit = document.querySelector('.btn--submit-form');
const removeHiddenClass = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const addHiddenClass = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
signUPButton.addEventListener('click', removeHiddenClass);
document.addEventListener('click', e => {
  if (e.target === overlay || e.target === btnCloseModal) {
    addHiddenClass();
    input.forEach(input => {
      input.value = '';
    });
  }
});

btnSubmit.addEventListener('click', () => {
  addHiddenClass();
  input.forEach(input => {
    input.value = '';
  });
});
