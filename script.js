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

    // listener for resize window and in case toggle class to navLink
    addCloseClassToNavLink = () => {
        let windowWidth = window.innerWidth;
        if (windowWidth >= 768) {
            NavLinks.classList.remove('close')
        } else {
            NavLinks.classList.add('close')
        }

    }
    addCloseClassToNavLink();


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












});