const API_KEY = '46775903-5820c4e6d789cb0cb95772c39';
const URL = 'https://pixabay.com/api/?';

export function photos(q, page = 1) {
  const parametrs = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    q,
  });
  return fetch(`${URL}${parametrs}`)
    .then(response => {
      if (!response.ok) {
        iziToast.error({
          title: 'Error',
          message: 'Ups.. Something wrong',
          position: 'topRight',
        });
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => console.log(error));
}
