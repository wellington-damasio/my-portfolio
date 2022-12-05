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