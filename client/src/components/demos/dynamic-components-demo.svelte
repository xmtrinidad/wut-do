<script>
  import MemeCard from "./random-components/meme-card.svelte";
  import BohrModel from "./random-components/bohr/bohr-model.svelte";

  let currentComponent = MemeCard;

  function changeComponent() {
    currentComponent = currentComponent === BohrModel ? MemeCard : BohrModel;
  }
</script>

<div class="dynamic-components-demo">
  <h1>Dynamic Components Demo</h1>
  <button on:click={changeComponent}>Change Component</button>
  
  <svelte:component this={currentComponent}/>
</div>

<style>
  h1 {
    font-size: 2.31rem;
    margin: 16px 0;
  }
</style>