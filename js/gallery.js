document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('#gallery ul li img');
    const featuredImage = document.querySelector('#gallery figure img');
    const imageCaption = document.querySelector('#gallery figcaption');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            featuredImage.src = thumbnail.src.replace('-small', '-large');
            imageCaption.textContent = thumbnail.alt;
        });
    });
});
