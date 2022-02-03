<script>
  // import Router, { location, link } from 'svelte-spa-router';
  // import { wrap } from 'svelte-spa-router/wrap';
  import Login from './pages/login.svelte';
  import Home from './pages/home.svelte';
  import AppHeader from './components/app-header.svelte';
  import { Router, Link, Route } from 'svelte-routing';
  export let url = '';
</script>

<AppHeader></AppHeader>
<main>
  <Router {url}>
    
    <nav>
      <!-- @Matt Kilcup how do slots work in the Svelte?? thinking of passing these things down nto AppHeader -->
      <!-- <Link to="/">Home</Link>
      <Link to="login">Login</Link> -->
    </nav>
    <div>
      <Route path="login" component={Login} />
      <Route path="/" component={Home} />
    </div>
  </Router>
</main>

<style>
</style>
