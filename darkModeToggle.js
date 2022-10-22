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