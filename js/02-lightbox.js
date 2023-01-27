import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

function createGallery(items) {
  return items
    .map((item) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
                />
                </a>
        </div>
`;
    })
    .join("");
}
galleryContainer.innerHTML = createGallery(galleryItems);
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
