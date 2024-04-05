const users = [
  { id: 1, name: "john" },
  { id: 1, name: "jane" },
];
const posts = [
  { id: 1, title: "Post 1", body: "haksbk", userId: 1 },
  { id: 2, title: "Post 2", body: "haksbk", userId: 3 },
  { id: 4, title: "Post 3", body: "haksbk", userId: 2 },
];

export const getPosts = () => {
  return posts;
};

export const getPost = async (id) => {
  return posts.find((post) => post.id === parseInt(id));
};
export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id));
};
