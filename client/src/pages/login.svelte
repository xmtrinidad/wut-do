<script>
</script>

<div class="wrapper">
  <div class="image" />
  <div class="login">
    <form class="login-form">
      <label for="username">username</label>
      <input type="text" name="username" /><label for="password">password</label><input
        type="password"
        name="password"
      /><button type="submit">submit</button>
    </form>
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
