import { onShowNavigation } from "./navigation.js";
import { workSliderHandler } from "./slider.js";

const navToggle = document.querySelector(".main-nav__toggle");

navToggle.addEventListener("click", onShowNavigation);

workSliderHandler();
