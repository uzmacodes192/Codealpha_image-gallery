function openLightbox(imgSrc) {
  document.getElementById("lightbox").style.display = "block";
  document.getElementById("lightboxImg").src = imgSrc;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function filterImages(type) {
  let images = document.querySelectorAll(".gallery img");

  images.forEach(function(img) {
    if (type === "all") {
      img.style.display = "block";
    } else if (img.classList.contains(type)) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}
