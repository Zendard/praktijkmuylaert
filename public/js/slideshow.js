let img1 = document.getElementById("img-1")
let img2 = document.getElementById("img-2")
let img3 = document.getElementById("img-3")

let timeoutID

function nextImage() {
  img1.id = "img-2"
  img2.id = "img-3"
  img3.id = "img-1"

  img1 = document.getElementById("img-1")
  img2 = document.getElementById("img-2")
  img3 = document.getElementById("img-3")

  timeoutID = setTimeout(nextImage, 7500)
}

setTimeout(nextImage, 3000)

