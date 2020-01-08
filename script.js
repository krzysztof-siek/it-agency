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


    let windowWidth = window.innerWidth;
    let slideWidth = windowWidth;
    let mobile = true;

    changeSliderWidth = () => {
        windowWidth = window.innerWidth;
        console.log("change" + windowWidth);

        if (windowWidth >= 1200) {
            slideWidth = windowWidth / 3
            imgSlide.style.width = `${slideWidth}px`
            mobile = false;

        } else {
            mobile = true;
            slideWidth = windowWidth;
            imgSlide.style.width = `${slideWidth}px`
        }
        console.log(mobile);
    }


    changeSliderWidth();
    window.addEventListener('resize', changeSliderWidth)

    let translate = 0;

    prevSlide = () => {
        if (mobile) {
            if (translate >= 0) {
                translate = -600
            }
            translate = translate + 100;
            imgSlide.style.transform = `translateX(${translate}%)`
        } else {
            if (translate >= 0) {
                translate = -400
            }
            translate = translate + 100;
            imgSlide.style.transform = `translateX(${translate}%)`
        }

    }


    nextSlide = () => {
        if (mobile) {
            if (translate <= -500) {
                translate = 100
            }
            translate = translate - 100;
            imgSlide.style.transform = `translateX(${translate}%)`

        } else {
            if (translate <= -300) {
                translate = 100
            }
            translate = translate - 100;
            imgSlide.style.transform = `translateX(${translate}%)`
        }

    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);









});