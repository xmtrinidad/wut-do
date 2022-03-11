<script>
  import { setContext } from 'svelte';
  let username;
  let password;
  async function handleClick() {
    console.log(username, password);
    const wait = await postThingBro(username, password);
    const response = await wait.json();
    console.log(response);
  }
  async function postThingBro(username, password) {
    const post = await fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    return post;
  }

  async function getUsersClick() {
    const get = await (await fetch('/user/users')).json();
    console.log(get);
  }
</script>

<div class="wrapper">
  <div class="image" />
  <div class="login">
    <form class="login-form">
      <label for="username">username</label>
      <input type="text" name="username" id="username" autocomplete="username" bind:value={username} /><label
        for="password">password</label
      ><input
        type="password"
        name="password"
        id="password"
        autocomplete="current-password"
        bind:value={password}
      /><button type="submit" on:click|preventDefault={handleClick}>submit</button>
    </form>
    <button on:click={getUsersClick}>get all users</button>
  </div>
</div>

<style>
  .wrapper {
    height: calc(100vh - 6.5rem);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  .image {
    height: 100%;
    background: center / contain no-repeat url('../assets/images/eden-constantino-bTukYI4DjOs-unsplash.webp');
    grid-column: 1 / 8;
    background-color: #bada55;
  }
  .login {
    height: 100%;
    display: grid;
    place-items: center center;
    grid-column: 8 / -1;
    background: #e5e5e5;
  }
  .login-form {
    display: flex;
    flex-direction: column;
  }
</style>
