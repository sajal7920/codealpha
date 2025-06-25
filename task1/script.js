let currentIndex = 0;
const images = Array.from(document.querySelectorAll(".gallery img"));

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  currentIndex = images.indexOf(img);
  lightboxImg.src = img.src;
  lightbox.style.display = "block";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  const imageDivs = document.querySelectorAll('.gallery .image');

  imageDivs.forEach(div => {
    if (category === 'all' || div.classList.contains(category)) {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });
}
