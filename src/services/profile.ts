function getAll() {
  return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
}

function get(id: string) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json());
}

export default { getAll, get };
