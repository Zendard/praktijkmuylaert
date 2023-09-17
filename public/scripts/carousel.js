let slideIndex = 0;
const slides = document.getElementsByClassName("img-slide");
showSlides();

function showSlides() {
	for (i = 0; i < 3; i++) {
		if (i != slideIndex) {
			slides[i].classList.remove("fade-in");
			slides[i].classList.add("fade-out");
			setTimeout(displayNone.bind(null, i), 2000);
		} else {
			slides[i].style.display = "block";
			slides[i].classList.remove("fade-out");
			slides[i].classList.add("fade-in");
		}
	}
	slideIndex++;
	if (slideIndex > 2) {
		slideIndex = 0;
	}
	setTimeout(showSlides, 5000);
}

function displayNone(slide) {
	slides[slide].style.display = "none";
}
