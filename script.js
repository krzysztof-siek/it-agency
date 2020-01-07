window.addEventListener('DOMContentLoaded', (event) => {

    // Nav-Links toggle on small screen
    const OpenBtn = document.querySelector(".nav-button");
    const CloseBtn = document.querySelector('.close-btn')
    const NavLinks = document.querySelector('.nav-links');

    openNavLink = () => {
        NavLinks.classList.remove('close')
        OpenBtn.classList.add('hide')

    }
    closeNavLink = () => {
        NavLinks.classList.add('close')
        OpenBtn.classList.remove('hide')
    }


    OpenBtn.addEventListener('click', openNavLink)
    CloseBtn.addEventListener('click', closeNavLink)

    // end of toggle nav-links


    addCloseClassToNavLink = () => {
        let windowWidth = window.innerWidth;
        if (windowWidth >= 768) {
            NavLinks.classList.remove('close')
        } else {
            NavLinks.classList.add('close')
        }

    }
    addCloseClassToNavLink();


    // listener for resize window and in case toggle class to navLink
    changeWindowSize = () => {
        let windowWidth = window.innerWidth
        if (windowWidth >= 768) {
            NavLinks.classList.remove('close')
            OpenBtn.classList.add('hide')
        } else {
            NavLinks.classList.add('close')
            OpenBtn.classList.remove('hide')
        }


    }

    window.addEventListener('resize', changeWindowSize);


    // Slider in offer section
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const imgSlide = document.querySelector(".img-slide")
    let translate = 0;

    prevSlide = () => {
        if (translate >= 0) {
            translate = -600
        }
        translate = translate + 100;
        imgSlide.style.transform = `translateX(${translate}%)`
        console.log(translate);
        console.log("prev");



    }

    nextSlide = () => {
        if (translate <= -500) {
            translate = 0
        }
        translate = translate - 100;
        imgSlide.style.transform = `translateX(${translate}%)`
        console.log(translate);
        console.log("next");
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);









});