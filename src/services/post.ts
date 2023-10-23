function get(postId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) => res.json());
}

function getAll() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
}

function getFromUserId(userId: number) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then((res) => res.json());
}

export default { get, getAll, getFromUserId };
