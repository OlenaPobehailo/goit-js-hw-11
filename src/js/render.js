import getRefs from "./get-refs";
const refs = getRefs();

 export default function renderGallery(images) {
    const markup = images
      .map(image => {
        return `
          <div class="photo-card">
              <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
              <div class="info">
              <p class="info-item">
                  <b>Likes</b>
                  <b>${image.likes}</b>
  
              </p>
              <p class="info-item">
                  <b>Views</b>
                  <b>${image.views}</b>
              </p>
              <p class="info-item">
                  <b>Comments</b>
                  <b>${image.comments}</b>
  
              </p>
              <p class="info-item">
                  <b>Downloads</b>
                  <b>${image.downloads}</b>
              </p>
              </div>
          </div>`;
      })
      .join('');
    refs.gallery.innerHTML = markup;
  }
  