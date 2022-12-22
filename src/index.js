import SimpleLightbox from 'simplelightbox';

import getRefs from './js/get-refs';
import { BASE__URL, fetchImages } from './js/api-service';
import renderGallery from './js/render';

const refs = getRefs();
const ADD_URL = '&image_type=photo&orientation=horizontal&safesearch=true';
refs.searchForm.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreClick);
let searchQuery = '';

let images = [];

refs.loadMoreBtn.hidden = true;

async function onFormSubmit(e) {
  e.preventDefault();
  searchQuery = e.currentTarget.searchQuery.value;

  const url = BASE__URL + searchQuery + ADD_URL;

  console.log('searchQuery', searchQuery);
  console.log('url', url);

  await fetchImages(url).then(images => renderGallery(images));

  let lightbox = new SimpleLightbox('.gallery a', {
    // captions: true,
    // captionsData: 'alt',
    // captionSelector: 'img',
    // captionPosition: 'bottom',
    // captionDelay: 250,
  });
  

  //refs.loadMoreBtn.hidden = false;

  //searchQuery = '';
}

function onLoadMoreClick() {
  refs.loadMoreBtn.hidden = true;
}
