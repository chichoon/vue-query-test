function get(todoId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`).then((res) => res.json());
}

function getAll() {
  return fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json());
}

function getFromUserId(userId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`).then((res) => res.json());
}

export default { get, getAll, getFromUserId };
