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
const imagePreviewConatiner = document.querySelector(".image-preview-container");
const previewImage = document.querySelector(".preview-image");
const images = document.querySelectorAll(".gallery-image");
images.forEach((image) => {
    image.addEventListener("click", () => {
       previewImage.src = image.src;
       imagePreviewConatiner.classList.add("show");
    });
});
const downloadButton = document.querySelector(".download-pic");
const canclePreviewButton = document.querySelector(".cancel-preview");
downloadButton.addEventListener("click", () => {
    downloadButton.href = previewImage.src;
    downloadButton.download = "downloaded-image.jpg";
});
canclePreviewButton.addEventListener("click", () => {
      imagePreviewConatiner.classList.remove("show");
  });