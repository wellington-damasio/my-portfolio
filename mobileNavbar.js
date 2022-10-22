const mobileNavOpenButton = document.querySelector('.mobile-nav__btn')
const mobileNavCloseButton = document.querySelector('.mobile-nav__btn--close')
const mobileNavContainer = document.querySelector('.mobile-nav__container')
const mobileNavWrapper = document.querySelector('.mobile-nav__wrapper')
const mobileNavLink = document.querySelectorAll('.mobile-nav__link')

// ----------------- Logic -----------------
mobileNavOpenButton.addEventListener('click', () => {
    showMobileNavbar()
    toggleBodyScroll()
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