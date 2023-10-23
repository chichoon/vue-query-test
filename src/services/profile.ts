function getAll() {
  return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
}

function get(userId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json());
}

export default { getAll, get };
