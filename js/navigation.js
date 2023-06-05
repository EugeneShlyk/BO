const navigation = document.querySelector('.header__main-nav');
const navToggle = document.querySelector('.main-nav-toggle');

navigation.classList.remove('main-nav--nojs');

const onShowNavigation = () => {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation__opened');
  } else {
    navigation.classList.remove('navigation__opened') ;
    navigation.classList.add('navigation--closed');
  }
};

navToggle.addEventListener('click', onShowNavigation);

export { onShowNavigation };
