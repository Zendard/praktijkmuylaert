const nextButton = document.getElementById("next-img")
const prevButton = document.getElementById("prev-img")
let img1 = document.getElementById("img-1")
let img2 = document.getElementById("img-2")
let img3 = document.getElementById("img-3")

nextButton.addEventListener("click", (e)=>{
img1.id="img-2"
img2.id="img-3"
img3.id="img-1"

img1 = document.getElementById("img-1")
img2 = document.getElementById("img-2")
img3 = document.getElementById("img-3")

img3.style.zIndex="0"
img1.style.zIndex="10"
img2.style.zIndex="5"
})

prevButton.addEventListener("click", (e)=>{
img1.id="img-3"
img2.id="img-1"
img3.id="img-2"

img1 = document.getElementById("img-1")
img2 = document.getElementById("img-2")
img3 = document.getElementById("img-3")

img3.style.zIndex="5"
img1.style.zIndex="10"
img2.style.zIndex="0"
})
