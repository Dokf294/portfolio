import "./components/body.css";
import "./components/header.scss";
import { initScrolling } from './js/scrolling.js';
import "./components/hero.scss";

document.querySelector('#layout').innerHTML = /* html */ `
  <header class="header">
  <div class="header__inner">

    <!-- Left: Logo -->
    <a class="header__logo" href="#top" aria-label="Go to top">
      <img src="/vite.svg" alt="Logo" />
    </a>

    <!-- Right: Nav -->
    <nav class="header__nav" aria-label="Primary">
      <a class="header__link" href="#about">About</a>
      <a class="header__link" href="#skills">Skills</a>
      <a class="header__link" href="#portfolio">Portfolio</a>
      <a class="header__link" href="#work">Work Experience</a>
      <a class="header__link" href="#contacts">Contacts</a>
    </nav>
  </div>
</header> 


<section class="hero" id="about">
  <div class="hero__inner">

    <!-- Left -->
    <div class="hero__content">
        <p class="hero__rest"> My name is</p>

      <h1 class="hero__title">kirill Mykhailov</h1>

      <p class="hero__subtitle">
        I do the work, and you<br />
        enjoy yourself
      </p>

      
    </div>

    <!-- Right -->
    <div class="hero__visual">
      <img
        class="hero__img"
        src="/ilistration_laptop.png"
        alt="Laptop illustration"
        loading="eager"
      />
    </div>
  </div>
</section>
`
initScrolling();


