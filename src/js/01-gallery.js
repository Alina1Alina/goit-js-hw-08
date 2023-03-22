import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

const gallery = document.querySelector('.gallery')

let listEl = ''

galleryItems.forEach((item) => { 
  const addGallery = `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`
    listEl += addGallery
    console.log(addGallery);
})

gallery.insertAdjacentHTML('afterbegin', listEl)

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250
});
