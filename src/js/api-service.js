const BASE__URL =
  'https://pixabay.com/api/?key=32179167-903c9e169edcad7e661a9574c&q=';
// const ADD_URL = '&image_type=photo&pretty=true';
// const url = BASE__URL + searchQuery + ADD_URL;

async function fetchImages(path = '') {
  try {
    const response = await fetch(BASE__URL + path);
    const data = await response.json();
    images = data.hits;
    return images;
  } catch (error) {
    console.log(error.message);
  }
}

export { BASE__URL, fetchImages };
