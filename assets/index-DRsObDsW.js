(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();function p(){const e=document.querySelector(".header");if(!e)return;function s(){window.scrollY>10&&window.scrollY<780?e.classList.add("header--scrolled"):e.classList.remove("header--scrolled")}window.addEventListener("scroll",s),s()}function h(){const e=document.querySelectorAll(".battarey");if(!e.length)return;const s=new IntersectionObserver(a=>{a.forEach(c=>{c.isIntersecting&&(c.target.classList.add("is-charging"),s.unobserve(c.target))})},{threshold:.9});e.forEach(a=>s.observe(a))}function g(){const e=document.querySelector(".burger"),s=document.querySelector(".blur-screen"),a=document.querySelector(".burger-menu"),c=document.getElementById("bt-about"),n=document.getElementById("bt-skills"),i=document.getElementById("bt-work"),d=document.getElementById("bt-portfolio"),r=document.getElementById("bt-contacts"),t=[c,n,i,d,r];let l=!1;function o(){l=!l,s.classList.toggle("is-active",l),s.classList.toggle("is-pointer",l),a.classList.toggle("is-active",l),a.classList.toggle("is-pointer",l)}e.addEventListener("click",o),t.forEach(v=>{v.addEventListener("click",o)})}function _(){const e=document.getElementById("slide-one"),s=document.getElementById("slide-two"),a=document.getElementById("slide-three"),c=document.querySelector(".blur-screen"),n=[e,s,a],i={"slide-one":"/site_slides/slide-moz.png","slide-two":"/site_slides/slide-nexVault.png","slide-three":"/site_slides/SiteNovak.psd.png"},d=document.querySelector(".viewer"),r=document.querySelector(".viewer-image");let t=!1;function l(){t=!t,c.classList.toggle("is-active",t),c.classList.toggle("is-pointer",t),d.classList.toggle("is-active",t),r.classList.toggle("is-pointer",t)}r.addEventListener("click",l),n.forEach(o=>{o.addEventListener("click",()=>{r.src=i[o.id],l()})})}function m(){const e=document.querySelector(".contact__form");e.addEventListener("submit",s=>{if(!e.querySelector('textarea[name="message"]').value.trim()){s.preventDefault(),alert("Please enter a message.");return}})}const u=`<header class="header">
    <div class="header__inner">

        <a class="header__logo" href="#top" aria-label="Go to top">
            <img src="./assets/logo.png" alt="Logo" />
        </a>

        <nav class="header__nav" aria-label="Primary">
            <a class="header__link" href="#about">About</a>
            <a class="header__link" href="#skills">Skills</a>
            <a class="header__link" href="#portfolio">Portfolio</a>
            <a class="header__link" href="#work">Work Experience</a>
            <a class="header__link" href="#contacts">Contacts</a>
        </nav>

        <button class="burger">
            <img src="./svg/burger.svg" alt="">
        </button>
    </div>
</header>


<section class="hero" id="about">
    <div class="hero__inner">

        <div class="hero__content">
            <p class="hero__rest"> My name is</p>

            <h1 class="hero__title">kirill Mykhailov</h1>

            <p class="hero__subtitle">
                I do the work, and you<br />
                enjoy yourself
            </p>


        </div>

        <div class="hero__visual">
            <img class="hero__img" src="./assets/ilistration_laptop.png" alt="Laptop illustration"
                loading="eager" />
        </div>
    </div>
</section>

<section class="soft-skills" id="skills">
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

            <article class="work-card">
                <div class="work-card__media" id="slide-one">
                    <img src="./site_slides/slide-moz.png" alt="NexVault" loading="lazy" />
                </div>

                <div class="work-card__content">
                    <div class="work-card__meta">
                        <span class="work-card__pill">June 2024</span>
                    </div>

                    <h3 class="work-card__heading">
                        Mozilla Wiki Clone
                        <a class="work-card__link" href="https://dokf294.github.io/Mozilla_wiki.github.io/"
                            target="_blank" rel="noreferrer" aria-label="Open project">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
                                <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z"></path>
                            </svg>
                        </a>
                    </h3>

                    <p class="work-card__desc">
                        A complete copy of one of the most famous wikis for programmers, implemented with our own
                        code
                    </p>

                    <div class="work-card__tech">

                        <div class="tech-icon">
                            <img src="./icons/vite.svg" alt="Vite">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/vitest.svg" alt="Vitest">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/postCSS.svg" alt="PostCSS">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/sass.png" alt="Sass">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/css.png" alt="CSS">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/js.svg" alt="JavaScript">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/html5.png" alt="HTML5">
                        </div>

                    </div>
                </div>
            </article>

            <article class="work-card">
                <div class="work-card__media" id="slide-two">
                    <img src="./site_slides/slide-nexVault.png" alt="NexVault project" loading="lazy" />
                </div>

                <div class="work-card__content">
                    <div class="work-card__meta">
                        <span class="work-card__pill">September 2024</span>
                    </div>

                    <h3 class="work-card__heading">
                        NexVault - Buisness
                        <a class="work-card__link" href="https://dokf294.github.io/NexVault.github.io/" target="_blank" rel="noreferrer" aria-label="Open project">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
                                <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z"></path>
                            </svg>
                        </a>
                    </h3>

                    <p class="work-card__desc">A company that is a leader in sales of antivirus software for home
                        users,
                        as well as business protection services for businesses. The website is entirely built with
                        its
                        own code</p>

                    <div class="work-card__tech">

                        <div class="tech-icon">
                            <img src="./icons/vite.svg" alt="Vite">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/vitest.svg" alt="Vitest">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/postCSS.svg" alt="PostCSS">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/sass.png" alt="Sass">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/css.png" alt="CSS">
                        </div>
                        <div class="tech-icon">
                            <img src="./icons/js.svg" alt="JavaScript">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/html5.png" alt="HTML5">
                        </div>
                    </div>
                </div>
            </article>

            <article class="work-card">
                <div class="work-card__media" id="slide-three">
                    <img src="./site_slides/SiteNovak.psd.png" alt="Novak profile" loading="lazy" />
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
                        Business card of one of our clients, displayed with the client's permission. The website was
                        created using the unique “scroll up style
                    </p>

                    <div class="work-card__tech">

                        <div class="tech-icon">
                            <img src="./icons/vite.svg" alt="Vite">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/vitest.svg" alt="Vitest">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/postCSS.svg" alt="PostCSS">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/sass.png" alt="Sass">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/css.png" alt="CSS">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/js.svg" alt="JavaScript">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/html5.png" alt="HTML5">
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

            <article class="timeline__item">
                <div class="timeline__rail">
                    <span class="timeline__dot" aria-hidden="true"></span>
                    <span class="timeline__line" aria-hidden="true"></span>
                </div>

                <div class="exp-card">
                    <div class="exp-card__meta">
                        <span class="exp-card__pill">September 2019 — December 2023</span>
                    </div>

                    <h3 class="exp-card__heading">
                        GameDev
                    </h3>

                    <p class="exp-card__role">Game Developer</p>

                    <p class="exp-card__desc">
                        Developed games using the LuaU engine. Worked as a developer and team lead at Goodly Studio, and
                        actively contributed to
                        game development at GameForge Studio
                    </p>

                    <div class="exp-card__tech">
                        <div class="tech-icon" id="lua"><img src="./icons/lua.png" alt="lua"></div>

                    </div>
                </div>
            </article>

            <article class="timeline__item">
                <div class="timeline__rail">
                    <span class="timeline__dot" aria-hidden="true"></span>
                    <span class="timeline__line" aria-hidden="true"></span>
                </div>

                <div class="exp-card">
                    <div class="exp-card__meta">
                        <span class="exp-card__pill">December 2023 - January 2024</span>
                    </div>

                    <h3 class="exp-card__heading">
                        Time for experiments
                    </h3>

                    <p class="exp-card__role">Software Engineer</p>

                    <p class="exp-card__desc">
                        Worked across multiple programming languages and environments, including developing Telegram
                        bots with Python,
                        implementing parsing logic and physics-related systems in C++, configuring Arch Linux (Hyprland)
                        environments, and
                        building automation and utility tools using Bash
                    </p>

                    <div class="exp-card__tech">
                        <div class="tech-icon"><img src="./icons/python.png" alt="Python"></div>
                        <div class="tech-icon"><img src="./icons/Cplusplus.png" alt="C++"></div>
                        <div class="tech-icon"><img src="./icons/Csharpsharp.png" alt="C#"></div>
                        <div class="tech-icon"><img src="./icons/bash.png" alt="Bash"></div>
                    </div>
                </div>
            </article>

            <article class="timeline__item">
                <div class="timeline__rail">
                    <span class="timeline__dot" aria-hidden="true"></span>
                    <span class="timeline__line" aria-hidden="true"></span>
                </div>

                <div class="exp-card">
                    <div class="exp-card__meta">
                        <span class="exp-card__pill">January 2024 — to this day</span>
                    </div>

                    <h3 class="exp-card__heading">
                        Freelance
                    </h3>

                    <p class="exp-card__role">Frontend Developer</p>

                    <p class="exp-card__desc">
                        Development of landing pages and e-commerce projects. Improving layouts and delivering clean
                        UI.
                    </p>

                    <div class="exp-card__tech">
                        <div class="tech-icon">
                            <img src="./icons/vite.svg" alt="Vite">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/vitest.svg" alt="Vitest">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/postCSS.svg" alt="PostCSS">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/sass.png" alt="Sass">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/css.png" alt="CSS">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/js.svg" alt="JavaScript">
                        </div>

                        <div class="tech-icon">
                            <img src="./icons/html5.png" alt="HTML5">
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>
<section class="contact" id="contacts">
    <div class="contact__inner">

        <div class="contact__top">
            <div class="contact__title">
                <h2>
                    Do you want to ask<br />
                    <span>something interesting?</span>
                </h2>

                <p class="contact__hint">
                    I am always available for your message.
                </p>
            </div>

            <div class="contact__icons" aria-label="Social links">
                <a class="contact__icon" href="#" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M12 .5C5.73.5.75 5.6.75 12c0 5.12 3.29 9.46 7.86 10.99.58.11.79-.26.79-.58v-2.1c-3.2.71-3.87-1.4-3.87-1.4-.52-1.35-1.28-1.71-1.28-1.71-1.05-.74.08-.72.08-.72 1.16.08 1.77 1.22 1.77 1.22 1.03 1.8 2.71 1.28 3.37.98.1-.77.4-1.28.73-1.57-2.55-.3-5.23-1.32-5.23-5.87 0-1.3.45-2.37 1.2-3.2-.12-.3-.52-1.52.12-3.17 0 0 .98-.32 3.2 1.22a10.7 10.7 0 0 1 2.91-.4c.99 0 1.99.14 2.91.4 2.22-1.54 3.2-1.22 3.2-1.22.64 1.65.24 2.87.12 3.17.75.83 1.2 1.9 1.2 3.2 0 4.56-2.69 5.57-5.25 5.86.41.37.79 1.08.79 2.18v3.23c0 .32.21.69.8.58A11.28 11.28 0 0 0 23.25 12C23.25 5.6 18.27.5 12 .5z" />
                    </svg>
                </a>

                <a class="contact__icon" href="#" target="_blank" rel="noreferrer" aria-label="Telegram">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M9.77 15.67 9.6 20.1c.53 0 .76-.23 1.04-.5l2.5-2.4 5.18 3.8c.95.53 1.62.25 1.86-.88L23.9 3.9c.32-1.4-.53-1.96-1.44-1.62L1.62 10.2c-1.35.52-1.33 1.26-.23 1.6l5.33 1.66L19.2 6.4c.59-.39 1.13-.18.69.21z" />
                    </svg>
                </a>
            </div>
        </div>

        <div class="contact__bottom">
            <form class="contact__form" action="https://formspree.io/f/xykppyrd" method="POST" target="_blank">
                <button class="contact__btn" type="submit">Send message</button>

                <div class="contact__field">
                    <textarea class="contact__textarea" name="message" placeholder="Write your message..."
                        rows="5"></textarea>
                </div>
            </form>
        </div>

    </div>
</section>
<section class="addiotinaly">
    <div class="blur-screen"></div>
    <div class="burger-menu">
        <nav class="pad-burger">
            <a href="#about" id="bt-about">About</a>
        </nav>
        <nav class="pad-burger">
            <a href="#skills" id="bt-skills">Skills</a>
        </nav>
        <nav class="pad-burger">
            <a href="#portfolio" id="bt-portfolio">Portfolio</a>
        </nav>
        <nav class="pad-burger">
            <a href="#work" id="bt-work">Work Experience</a>
        </nav>
        <nav class="pad-burger">
            <a href="#contacts" id="bt-contacts">Contacts</a>
        </nav>
    </div>
    <div class="viewer">
        <img class="viewer-image" src="./site_slides/SiteNovak.psd.png" loading="lazy"></img>
    </div>
</section>`;document.querySelector("#layout").innerHTML=u;g();p();h();_();m();
