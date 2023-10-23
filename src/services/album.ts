function get(albumId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`).then((res) => res.json());
}

function getAll() {
  return fetch('https://jsonplaceholder.typicode.com/albums').then((res) => res.json());
}

function getFromUserId(userId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`).then((res) => res.json());
}

export default { get, getAll, getFromUserId };
