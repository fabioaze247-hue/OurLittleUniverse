
// ==================================
// PHOTO GALLERY LIGHTBOX
// ==================================

const photoItems = document.querySelectorAll(".photo-item");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCounter = document.getElementById("lightboxCounter");

const closeButton = document.getElementById("lightboxClose");
const previousButton = document.getElementById("previousPhoto");
const nextButton = document.getElementById("nextPhoto");

const galleryPhotos = Array.from(photoItems).map(item => {
    return item.querySelector("img");
});

let currentPhoto = 0;


function showPhoto(index) {
    currentPhoto = (index + galleryPhotos.length) % galleryPhotos.length;

    lightboxImage.src = galleryPhotos[currentPhoto].src;
    lightboxImage.alt = galleryPhotos[currentPhoto].alt;

    lightboxCounter.textContent =
        `${currentPhoto + 1} / ${galleryPhotos.length}`;
}


function openLightbox(index) {
    showPhoto(index);

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
    closeButton.focus();
}


function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}


photoItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        openLightbox(index);
    });
});


closeButton.addEventListener("click", closeLightbox);

previousButton.addEventListener("click", () => {
    showPhoto(currentPhoto - 1);
});

nextButton.addEventListener("click", () => {
    showPhoto(currentPhoto + 1);
});


// Close when clicking outside the photo
lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});


// Keyboard controls
document.addEventListener("keydown", event => {

    if (!lightbox.classList.contains("active")) return;

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowLeft") {
        showPhoto(currentPhoto - 1);
    }

    if (event.key === "ArrowRight") {
        showPhoto(currentPhoto + 1);
    }

});
