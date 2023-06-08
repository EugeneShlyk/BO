const navigation = document.querySelector(".header__main-nav");
const navToggle = document.querySelector(".main-nav-toggle");

navigation.classList.remove("main-nav--nojs");
navigation.classList.add("main-nav--closed");

const onShowNavigation = () => {
  if (navigation.classList.contains("main-nav--closed")) {
    navigation.classList.remove("main-nav--closed");
    navigation.classList.add("main-nav--opened");
  } else {
    navigation.classList.remove("main-nav--opened");
    navigation.classList.add("main-nav--closed");
  }
};

export { onShowNavigation };
