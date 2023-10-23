function get(photoId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`).then((res) => res.json());
}

function getAll() {
  return fetch('https://jsonplaceholder.typicode.com/photos').then((res) => res.json());
}

function getAllPhotosInAlbum(albumId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`).then((res) => res.json());
}

export default { get, getAll, getAllPhotosInAlbum };
