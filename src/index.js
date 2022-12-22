// const refs = {
//   searchForm: document.querySelector('.search-form'),
//   gallery: document.querySelector('.gallery'),
// };

import getRefs from './js/get-refs';
import {  BASE__URL, fetchImages } from './js/api-service';
import renderGallery from './js/render'

const refs = getRefs();

refs.searchForm.addEventListener('submit', onFormSubmit);

let searchQuery = '';
// const BASE__URL =
//   'https://pixabay.com/api/?key=32179167-903c9e169edcad7e661a9574c&q=';
// const ADD_URL = '&image_type=photo&pretty=true';
// const url = BASE__URL + searchQuery + ADD_URL;
//console.log(url);
let images = [];

async function onFormSubmit(e) {
  e.preventDefault();
  searchQuery = e.currentTarget.searchQuery.value;

  const url = BASE__URL + searchQuery;

  console.log('searchQuery', searchQuery);
  console.log('url', url);

  await fetchImages(url).then(images => renderGallery(images));

  //searchQuery = '';
}

// function renderGallery(images) {
//   const markup = images
//     .map(image => {
//       return `
//         <div class="photo-card">
//             <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
//             <div class="info">
//             <p class="info-item">
//                 <b>Likes</b>
//                 <b>${image.likes}</b>

//             </p>
//             <p class="info-item">
//                 <b>Views</b>
//                 <b>${image.views}</b>
//             </p>
//             <p class="info-item">
//                 <b>Comments</b>
//                 <b>${image.comments}</b>

//             </p>
//             <p class="info-item">
//                 <b>Downloads</b>
//                 <b>${image.downloads}</b>
//             </p>
//             </div>
//         </div>`;
//     })
//     .join('');
//   refs.gallery.innerHTML = markup;
// }
