const navigation = document.querySelector('.header__navigation');
const navToggle = document.querySelector('.header__navigation-toggle');

navigation.classList.remove('header__navigation--nojs');

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
