// ------------------------------------------------
//             Mobile Navbar Interactions
// ------------------------------------------------
const mobileNavOpenButton = document.querySelector('.mobile-nav__btn')
const mobileNavCloseButton = document.querySelector('.mobile-nav__btn--close')
const mobileNavContainer = document.querySelector('.mobile-nav__container')
const mobileNavWrapper = document.querySelector('.mobile-nav__wrapper')
const mobileNavLink = document.querySelectorAll('.mobile-nav__link')

// ----------------- Logic -----------------
mobileNavOpenButton.addEventListener('click', () => {
    showMobileNavbar()
    toggleBodyScroll()
    window.scrollTo(0, 0)
})

mobileNavCloseButton.addEventListener('click', () => {
    hideMobileNavbar()
    toggleBodyScroll()
})

mobileNavLink.forEach(link => {
    link.addEventListener('click', () => {
        hideMobileNavbar()
        toggleBodyScroll()
    })
})

// ----------------- Declaring Functions -----------------
function showMobileNavbar() {
    mobileNavContainer.style.right = 0
    mobileNavWrapper.style.zIndex = 1
}

function hideMobileNavbar() {
    mobileNavContainer.style.right = '-100%'
    mobileNavWrapper.style.zIndex = -1
}

function toggleBodyScroll() {
    const bodyClassList = document.body.classList
    if(bodyClassList.contains('noscroll')) {
        bodyClassList.remove('noscroll')
    } else {
        bodyClassList.add('noscroll')
    }
}

// ---------------------------------------
//           Dark Mode Toggle
// ----------------------------------------
const darkModeToggler = document.querySelectorAll('.dark-mode-toggle')
const darkModeSwitcher = document.querySelectorAll('.dark-mode-toggle__switcher')
const bodyClassList = document.body.classList

darkModeToggler.forEach(toggler => {
    toggler.addEventListener('click', () => {
        if(bodyClassList.contains('light-mode')) {
            darkModeSwitcher.forEach(switcher => switcher.style.left = '0.4rem')
            bodyClassList.remove('light-mode')
        } else {
            darkModeSwitcher.forEach(switcher => switcher.style.left = '2.8rem')
            bodyClassList.add('light-mode')
        }
    })
})

// ----------------------------------------------
//      About Me Section Scroll Animation
// ----------------------------------------------
const aboutMeContainer = document.querySelector('.about-me__container')
const aboutMeContent = document.querySelector('.about-me__content')
const aboutMeImage = document.querySelector('.about-me__img')

const revealElementsOnScroll = () => {
    let windowHeight = window.innerHeight
    let elementTop = aboutMeContainer.getBoundingClientRect().top
    let elementVisible = 150

    if(elementTop < windowHeight - elementVisible) {
        aboutMeContent.classList.add('anm-flow-left')
        aboutMeImage.classList.add('anm-flow-down')
    }
}

window.addEventListener('scroll', revealElementsOnScroll)