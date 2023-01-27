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

galleryContainer.addEventListener("click", showBigImg);

function showBigImg(event) {
  event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
    `);

  instance.show();

  galleryContainer.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
