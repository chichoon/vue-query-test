function getAll() {
  return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
}

function get(userId: string) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json());
}

export default { getAll, get };
