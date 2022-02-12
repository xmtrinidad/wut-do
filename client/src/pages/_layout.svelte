<script>
  import AppHeader from '../components/app-header.svelte';
  import AppFooter from '../components/app-footer.svelte';
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
