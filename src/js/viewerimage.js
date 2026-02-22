export function initViewer() {
    const slide1 = document.getElementById("slide-one");
    const slide2 = document.getElementById("slide-two");
    const slide3 = document.getElementById("slide-three");
    const screen = document.querySelector(".blur-screen");

    const list = [slide1, slide2, slide3];

    const url = {
        "slide-one": "/site_slides/slide-moz.png",
        "slide-two": "/site_slides/slide-nexVault.png",
        "slide-three": "/site_slides/SiteNovak.psd.png"
    };

    const viewer = document.querySelector(".viewer");
    const viewerImg = document.querySelector(".viewer-image");

    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
        screen.classList.toggle("is-active", isOpen);
        screen.classList.toggle("is-pointer", isOpen);
        viewer.classList.toggle("is-active", isOpen);
        viewerImg.classList.toggle("is-pointer", isOpen);
    }

    viewerImg.addEventListener("click", toggleMenu);

    list.forEach((target) => {
        
        target.addEventListener("click", () => {
            viewerImg.src = url[target.id];
            toggleMenu();
        })
    });
}