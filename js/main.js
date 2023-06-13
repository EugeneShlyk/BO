import { onShowNavigation } from "./navigation.js";
import { workSliderHandler } from "./slider";

const navToggle = document.querySelector(".main-nav__toggle");

navToggle.addEventListener("click", onShowNavigation);

workSliderHandler();
