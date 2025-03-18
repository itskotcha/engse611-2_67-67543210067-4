const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function() {
        const newSrc = this.src.replace("/100/100", "/600/400");
        mainImage.src = newSrc;
    });
});
