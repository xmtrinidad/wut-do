export const APP_API = {
  createWutDo: async (title, description) => {
    const request = await postThingBro('/api/createWutDo', { title, description });
    console.log(request);
    return request.todos;
  }
};

const postThingBro = async (url, data = {}) => {
  const post = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (post.ok) {
    return post.json();
  } else {
    return post;
  }
};
