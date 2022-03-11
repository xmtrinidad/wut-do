<script>
  import { layout, isActive, url, goto } from '@roxi/routify';
  import { routes } from '../../.routify/routes';
  const theRoutes = [
    { path: './', name: 'home' },
    { path: './login', name: 'login' },
    { path: './wutdo', name: 'wutdo' }
  ];
</script>

<header>
  <div class="header-left">
    <span class="app-title-or-whatever">WUT DO - NOT AN AWS APP</span>
  </div>
  <div class="header-right">
    <ul class="pages">
      {#each theRoutes as route}
        <li>
          <a class="link" class:active={$isActive(route.path)} href={$url(route.path)}>
            {route.name}
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
    list-style-type: none;
  }
</style>
