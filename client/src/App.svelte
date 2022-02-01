<script>
  // import Router, { location, link } from 'svelte-spa-router';
  // import { wrap } from 'svelte-spa-router/wrap';
  import Login from './pages/login.svelte';
  import Home from './pages/home.svelte';
  import { Router, Link, Route } from 'svelte-routing';
  export let url = '';
</script>

<main>
  <Router {url}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="login">Login</Link>
    </nav>
    <div>
      <Route path="login" component={Login} />
      <Route path="/" component={Home} />
    </div>
  </Router>
</main>

<style>
</style>
