<script>
  import AtomThing from './atom-thing.svelte';
</script>

<div class="bohr-model">

  <div class="ring p">

    <div class="ring s">
      <AtomThing></AtomThing>
      <div class="element-center">
        <span class="element-symbol">C</span>
      </div>

    </div>
  </div>
  

</div>

<style>
  /* @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'); */

  .element-center {
    /* font-family: 'Press Start 2P', cursive; */
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.8rem;
  }

  .ring {
    border: 2px solid #000;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .s {
    position: relative;
    width: 100px;
    height: 100px;
  }

  .s :global(.atom-thing) {
    top: 18px;
    left: 0;
  }

  .p {
    width: 140px;
    height: 140px;
  }
</style>