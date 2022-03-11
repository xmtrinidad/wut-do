<script>
  import { onMount } from 'svelte';
  import AppHeader from '../components/app-header.svelte';
  import AppFooter from '../components/app-footer.svelte';
  import { beforeUrlChange } from '@roxi/routify';
  // let user = { username: '' };
  // $: loggedIn = user;
  // onMount(async () => {
  //   const res = await (await fetch('/user/user-deets')).json();
  //   console.log(res);
  //   if (res.success) {
  //     $loggedIn = res.username;
  //   }
  //   // photos = await res.json();
  // });
  // $beforeUrlChange((event, route) => {
  //   console.log(event);
  //   console.log(route);
  //   console.log(user);
  //   if (!loggedIn) {
  //     return false;
  //   } else return true;
  // });
</script>

<main>
  <AppHeader />
  <slot />
  <AppFooter />
</main>

<style>
  main {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }
</style>
