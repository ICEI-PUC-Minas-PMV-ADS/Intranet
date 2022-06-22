const servicesLink = document.getElementById('services')
const servicesLinkMobile = document.getElementById('servicesMobile')

function scrollToSection(e) {
    e.preventDefault();
    window.scrollTo(0, 1000)
}

servicesLink.addEventListener('click', scrollToSection)
servicesLinkMobile.addEventListener('click', scrollToSection)
