<script>
  // import Router, { location, link } from 'svelte-spa-router';
  // import { wrap } from 'svelte-spa-router/wrap';

  // Dynamic import these eventually when we learn the ways
  import Login from './pages/login.svelte';
  import Home from './pages/home.svelte';
  import Demo from './pages/demo.svelte';

  import AppHeader from './components/app-header.svelte';
  import { Router, Link, Route } from 'svelte-routing';
  export let url = '';
</script>
<Router {url}>
  <AppHeader>
    <Link to="/">Home</Link>
    <Link to="login">Login</Link>
    <Link to="demo">Demo</Link>
  </AppHeader>
  <main>
    
      
      <nav>
        <!-- @Matt Kilcup how do slots work in the Svelte?? thinking of passing these things down nto AppHeader -->
        <!-- <Link to="/">Home</Link>
        <Link to="login">Login</Link> -->
      </nav>
      <div>
        <Route path="login" component={Login} />
        <Route path="/demo" component={Demo} />
        <Route path="/" component={Home} />
      </div>
  </main>
</Router>

<style>
</style>
