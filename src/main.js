import "./components/body.css";
import "./components/header.scss";
import { initScrolling } from './js/scrolling.js';
import "./components/hero.scss";
import "./components/procent.scss";
import { initChange } from "./js/change.js";
import "./components/soft.scss";
import "./components/portfolio.scss";
import "./components/experience.scss";
import portfolio from "./html/main.html"; 

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

<section class="soft-skills">
  <div class="soft-skills__inner">

    <h2 class="soft-skills__title">
      <span>Soft</span> skills
    </h2>

    <div class="soft-skills__list">

      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>
          I have led small development teams
        </p>
      </div>

      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>I collaborate closely with designers and project managers</p>
      </div>

      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>I have experience working in remote teams</p>
      </div>

      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>I maintain a strong focus on product quality</p>
      </div>

      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>I write clean, structured, and scalable code</p>
      </div>

      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>
          I pay close attention to technical requirements and details
        </p>
      </div>

      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>I clarify tasks before starting implementations</p>
      </div>

      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>I accurately identify client needs</p>
      </div>



      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>I deliver practical, business-focused solutions</p>
      </div>


      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>I handle conflict situations professionally</p>
      </div>

      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>I welcome constructive feedback</p>
      </div>

      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>I continuously improve both my technical and soft skills</p>
      </div>

      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>I actively learn modern web technologies</p>
      </div>

      <div class="soft-card">
        <span class="soft-card__dot"></span>
        <p>I apply new technologies in real-world projects</p>
      </div>
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
                <div class="charge-block is-empty"></div>

            </div>
        </div>
        <div class="element">
            <p class="header-skill">
                JS
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
                <div class="charge-block is-empty"></div>
                <div class="charge-block is-empty"></div>
                <div class="charge-block is-empty"></div>

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
                <div class="charge-block is-empty"></div>

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

            </div>
        </div>
  </div>
</section>

<section class="portfolio" id="portfolio">
  <div class="portfolio__inner">
    <h2 class="portfolio__title">My <span>Portfolio</span></h2>

    <div class="portfolio__list">

      <!-- 1 -->
      <article class="work-card">
        <div class="work-card__media">
          <img src="/site_slides/slide-moz.png" alt="NexVault preview" loading="lazy" />
        </div>

        <div class="work-card__content">
          <div class="work-card__meta">
            <span class="work-card__pill">June 2024</span>
          </div>

          <h3 class="work-card__heading">
            Mozilla Wiki Clone
            <a class="work-card__link" href="#" target="_blank" rel="noreferrer" aria-label="Open project">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
                <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z"></path>
              </svg>
            </a>
          </h3>

          <p class="work-card__desc">
            A complete copy of one of the most famous wikis for programmers, implemented with our own code
          </p>

          <div class="work-card__tech">

            <div class="tech-icon">
              <img src="/icons/vite.svg" alt="Vite">
            </div>

            <div class="tech-icon">
              <img src="/icons/vitest.svg" alt="Vitest">
            </div>

            <div class="tech-icon">
              <img src="/icons/postCSS.svg" alt="PostCSS">
            </div>

            <div class="tech-icon">
              <img src="/icons/sass.png" alt="Sass">
            </div>

            <div class="tech-icon">
              <img src="/icons/css.png" alt="CSS">
            </div>

            <div class="tech-icon">
              <img src="/icons/js.svg" alt="JavaScript">
            </div>

            <div class="tech-icon">
              <img src="/icons/html5.png" alt="HTML5">
            </div>

          </div>
        </div>
      </article>

      <!-- 2 -->
      <article class="work-card">
        <div class="work-card__media">
          <img src="/site_slides/slide-nexVault.png" alt="Moz preview" loading="lazy" />
        </div>

        <div class="work-card__content">
          <div class="work-card__meta">
            <span class="work-card__pill">September 2024</span>
          </div>

          <h3 class="work-card__heading">
            NexVault - Buisness
            <a class="work-card__link" href="#" target="_blank" rel="noreferrer" aria-label="Open project">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
                <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z"></path>
              </svg>
            </a>
          </h3>

          <p class="work-card__desc">A company that is a leader in sales of antivirus software for home users, as well as business protection services for businesses. The website is entirely built with its own code</p>

          <div class="work-card__tech">

            <div class="tech-icon">
              <img src="/icons/vite.svg" alt="Vite" >
            </div>

            <div class="tech-icon">
              <img src="/icons/vitest.svg" alt="Vitest">
            </div>

            <div class="tech-icon">
              <img src="/icons/postCSS.svg" alt="PostCSS">
            </div>

            <div class="tech-icon">
              <img src="/icons/sass.png" alt="Sass">
            </div>

            <div class="tech-icon">
              <img src="/icons/css.png" alt="CSS">
            </div>
            <div class="tech-icon">
              <img src="/icons/js.svg" alt="JavaScript">
            </div>

            <div class="tech-icon">
              <img src="/icons/html5.png" alt="HTML5">
            </div>
          </div>
        </div>
      </article>

      <!-- 3 -->
      <article class="work-card">
        <div class="work-card__media">
          <img src="/site_slides/SiteNovak.psd.png" alt="Novak bank preview" loading="lazy" />
        </div>

        <div class="work-card__content">
          <div class="work-card__meta">
            <span class="work-card__pill">JUANUARY 2026</span>
          </div>

          <h3 class="work-card__heading">
            Portfolio - Gleb Novikov
            <a class="work-card__link" href="#" target="_blank" rel="noreferrer" aria-label="Open project">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
                <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z"></path>
              </svg>
            </a>
          </h3>

          <p class="work-card__desc">
            Business card of one of our clients, displayed with the client's permission. The website was created using the unique “scroll up style
          </p>

            <div class="work-card__tech">

              <div class="tech-icon">
                <img src="/icons/vite.svg" alt="Vite">
              </div>

              <div class="tech-icon">
                <img src="/icons/vitest.svg" alt="Vitest">
              </div>

              <div class="tech-icon">
                <img src="/icons/postCSS.svg" alt="PostCSS">
              </div>

              <div class="tech-icon">
                <img src="/icons/sass.png" alt="Sass">
              </div>

              <div class="tech-icon">
                <img src="/icons/css.png" alt="CSS">
              </div>

              <div class="tech-icon">
                <img src="/icons/js.svg" alt="JavaScript">
              </div>

              <div class="tech-icon">
                <img src="/icons/html5.png" alt="HTML5">
              </div>

            </div>
        </div>
      </article>

    </div>
  </div>
</section>

<section class="experience" id="work">
  <div class="experience__inner">
    <h2 class="experience__title">Work <span>Experience</span></h2>

    <div class="timeline">

      <!-- item 1 -->
      <article class="timeline__item">
        <div class="timeline__rail">
          <span class="timeline__dot" aria-hidden="true"></span>
          <span class="timeline__line" aria-hidden="true"></span>
        </div>

        <div class="exp-card">
          <div class="exp-card__meta">
            <span class="exp-card__pill">September 2022 — Present</span>
          </div>

          <h3 class="exp-card__heading">
            VK Team
            <a class="exp-card__link" href="#" target="_blank" rel="noreferrer" aria-label="Open company / project">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
                <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z"></path>
              </svg>
            </a>
          </h3>

          <p class="exp-card__role">Frontend Engineer</p>

          <p class="exp-card__desc">
            Development and support of the frontend of the company's internal tools,
            automation of development processes.
          </p>

          <div class="exp-card__tech">
            <div class="tech-icon"><img src="/icons/js.svg" alt="JavaScript"></div>
            <div class="tech-icon"><img src="/icons/postCSS.svg" alt="PostCSS"></div>
            <div class="tech-icon"><img src="/icons/vite.svg" alt="Vite"></div>
            <div class="tech-icon"><img src="/icons/css.png" alt="CSS"></div>
            <div class="tech-icon"><img src="/icons/html5.png" alt="HTML5"></div>
          </div>
        </div>
      </article>

      <!-- item 2 -->
      <article class="timeline__item">
        <div class="timeline__rail">
          <span class="timeline__dot" aria-hidden="true"></span>
          <span class="timeline__line" aria-hidden="true"></span>
        </div>

        <div class="exp-card">
          <div class="exp-card__meta">
            <span class="exp-card__pill">June 2021 — September 2022</span>
          </div>

          <h3 class="exp-card__heading">
            Digital Element
            <a class="exp-card__link" href="#" target="_blank" rel="noreferrer" aria-label="Open company / project">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
                <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z"></path>
              </svg>
            </a>
          </h3>

          <p class="exp-card__role">Frontend Developer</p>

          <p class="exp-card__desc">
            Development of e-commerce and fintech projects. Building UI components, writing scripts,
            improving performance and maintaining code quality.
          </p>

          <div class="exp-card__tech">
            <div class="tech-icon"><img src="/icons/js.svg" alt="JavaScript"></div>
            <div class="tech-icon"><img src="/icons/css.png" alt="CSS"></div>
            <div class="tech-icon"><img src="/icons/sass.png" alt="Sass"></div>
            <div class="tech-icon"><img src="/icons/postCSS.svg" alt="PostCSS"></div>
            <div class="tech-icon"><img src="/icons/vitest.svg" alt="Vitest"></div>
          </div>
        </div>
      </article>

      <!-- item 3 -->
      <article class="timeline__item">
        <div class="timeline__rail">
          <span class="timeline__dot" aria-hidden="true"></span>
          <span class="timeline__line" aria-hidden="true"></span>
        </div>

        <div class="exp-card">
          <div class="exp-card__meta">
            <span class="exp-card__pill">September 2020 — May 2021</span>
          </div>

          <h3 class="exp-card__heading">
            Ribba
            <a class="exp-card__link" href="#" target="_blank" rel="noreferrer" aria-label="Open company / project">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
                <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z"></path>
              </svg>
            </a>
          </h3>

          <p class="exp-card__role">Frontend Developer</p>

          <p class="exp-card__desc">
            Development of landing pages and e-commerce projects. Improving layouts and delivering clean UI.
          </p>

          <div class="exp-card__tech">
            <div class="tech-icon"><img src="/icons/html5.png" alt="HTML5"></div>
            <div class="tech-icon"><img src="/icons/css.png" alt="CSS"></div>
            <div class="tech-icon"><img src="/icons/js.svg" alt="JavaScript"></div>
            <div class="tech-icon"><img src="/icons/sass.png" alt="Sass"></div>
          </div>
        </div>
      </article>

      <!-- item 4 -->
      <article class="timeline__item">
        <div class="timeline__rail">
          <span class="timeline__dot" aria-hidden="true"></span>
          <span class="timeline__line" aria-hidden="true"></span>
        </div>

        <div class="exp-card">
          <div class="exp-card__meta">
            <span class="exp-card__pill">July 2019 — August 2020</span>
          </div>

          <h3 class="exp-card__heading">
            Freelance
            <a class="exp-card__link" href="#" target="_blank" rel="noreferrer" aria-label="Open company / project">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
                <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z"></path>
              </svg>
            </a>
          </h3>

          <p class="exp-card__role">Web Developer</p>

          <p class="exp-card__desc">
            Website development, layout fixes, small scripts and improvements for client projects.
          </p>

          <div class="exp-card__tech">
            <div class="tech-icon"><img src="/icons/html5.png" alt="HTML5"></div>
            <div class="tech-icon"><img src="/icons/css.png" alt="CSS"></div>
            <div class="tech-icon"><img src="/icons/js.svg" alt="JavaScript"></div>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>
`
initScrolling();
initChange();

