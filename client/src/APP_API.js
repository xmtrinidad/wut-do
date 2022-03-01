export const APP_API = {
  testThing: () => {
    postThingBro('/api/createWutDo', 'user1', '123');
  }
}

const postThingBro = async (url, username, password) => {
  const post = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });
};