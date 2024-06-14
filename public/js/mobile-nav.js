const navButton = document.getElementById("nav-button")
const nav = document.querySelector("nav")

navButton.addEventListener('click', () => {
  nav.classList.toggle('nav-active')
  navButton.classList.toggle('nav-active')
})
