<script>
  import { isActive, url, goto } from '@roxi/routify';
  import { routes } from '../../.routify/routes';
  const theRoutes = [];
  routes.forEach(route => {
    route.path === '/index' ? (route.name = 'home') : route;
    theRoutes.push({ path: route.path, name: route.name });
  });
</script>

<header>
  <div class="header-left">
    <span class="app-title-or-whatever">WUT DO - NOT AN AWS APP</span>
  </div>
  <div class="header-right">
    <ul class="pages">
      {#each theRoutes as aRoute}
        <!-- Svelte magic. If isActive is true, the "active" class is applied. -->
        <li class:active={$isActive(aRoute.path)}>
          <a href={$url(aRoute.path)}>
            {aRoute.name}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</header>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Quintessential&display=swap');

  header {
    display: flex;
    background-color: hotpink;
    padding: 16px;
    justify-content: space-between;
    align-items: center;
    /* Random font just because of the :power_move: */
    color: #fff;
    font-family: 'Quintessential', cursive;
  }

  .app-title-or-whatever {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .active {
    font-weight: bold;
  }
  .pages {
    display: flex;
    margin: 0px 1em 0 auto;
  }
  .pages li {
    margin: 0 0.5em;
  }
</style>
