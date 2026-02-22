import "./components/body.css";
import "./components/header.scss";
import "./components/hero.scss";
import "./components/procent.scss";
import "./components/soft.scss";
import "./components/portfolio.scss";
import "./components/experience.scss";
import "./components/contact.scss";
import "./components/additionally.scss";
import "./components/normalize.css";

import { initScrolling } from "./js/scrolling.js";
import { initChange } from "./js/change.js";
import { initBurger } from "./js/burger_menu.js";
import { initViewer } from "./js/viewerimage.js";
import { InitForm } from "./js/send.js";

import layoutHtml from "./html/main.html?raw";

document.querySelector("#layout").innerHTML = layoutHtml;

initBurger();
initScrolling();
initChange();
initViewer();
InitForm();