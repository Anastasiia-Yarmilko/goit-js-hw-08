import galleryData from './gallery-items.js';

const refs = {
    gallery: document.querySelector('.js-gallery'),
    lightbox: document.querySelector('.lightbox'),
    lightboxContent: document.querySelector('.lightbox__content'),
    lightboxImage: document.querySelector('.lightbox__image'),
    lightboxOverlay: document.querySelector('.lightbox__overlay'),
    closeLightbox: document.querySelector('.lightbox__button'),
}

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
galleryData.forEach(({ preview, original, description }) => {
    refs.gallery.insertAdjacentHTML('afterbegin',
        `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`
    )
}

)

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.
// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image. Это необходимо для того, чтобы при следующем открытии модального окна, пока грузится изображение, мы не видели предыдущее.
