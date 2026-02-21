import "./components/body.css";
import "./components/header.scss";
import { initScrolling } from './js/scrolling.js';
import "./components/hero.scss";
import "./components/procent.scss";
import { initChange } from "./js/change.js";
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
<section class="skills"> 
  <div class="skill__inner">
        <div class="header-skill-top">
          <span id="word-hard">Hard</span> Skills
        </div>      
        <div class="element">
            <p class="header-skill">
                HTML
            </p> 
            <div class="line"></div>
            <div class="battarey">
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
            </div>
        </div>
        <div class="element">
            <p class="header-skill">
                CSS
            </p> 
            <div class="line"></div>
            <div class="battarey">
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
            </div>
        </div>
        <div class="element">
            <p class="header-skill">
                SASS
            </p> 
            <div class="line"></div>
            <div class="battarey">
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
            </div>
        </div>
        <div class="element">
            <p class="header-skill">
                JavaScript
            </p> 
            <div class="line"></div>
            <div class="battarey">
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
            </div>
        </div>
        <div class="element">
            <p class="header-skill">
                PostCSS
            </p> 
            <div class="line"></div>
            <div class="battarey">
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
            </div>
        </div>
        <div class="element">
            <p class="header-skill">
                Bootstrap
            </p> 
            <div class="line"></div>
            <div class="battarey">
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block is-empty"></div>
            </div>
        </div>
        <div class="element">
            <p class="header-skill">
                Gap
            </p> 
            <div class="line"></div>
            <div class="battarey">
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
            </div>
        </div>
        <div class="element">
            <p class="header-skill">
                Vite
            </p> 
            <div class="line"></div>
            <div class="battarey">
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
            </div>
        </div>
        <div class="element">
            <p class="header-skill">
                GIT
            </p> 
            <div class="line"></div>
            <div class="battarey">
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
                <div class="charge-block"></div>
            </div>
        </div>
  </div>
</section>
`
initScrolling();
initChange();

