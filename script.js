const menuOpenButton =document.querySelector("#menu-open-button")
const menuCloseButton =document.querySelector("#menu-close-button")

const menu =document.querySelector(".nav-menu")
menuOpenButton.addEventListener("click",()=>{
      document.body.classList.toggle("show-mobile-menu")
})

// Close menu when the close button clicked
menuCloseButton.addEventListener("click",()=>{
      menuOpenButton.click()
})