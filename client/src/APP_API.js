export const APP_API = {
  createWutDo: () => {
    const data = {
      username: 'user123',
      wutdoTitle: 'THIS IS THE TITLE',
      wutdoDesc: 'THIS IS THE DESCRIPTION'
    };
    postThingBro('/api/createWutDo', data);
    
  }
}

const postThingBro = async (url, data) => {
  const post = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data })
  });
};