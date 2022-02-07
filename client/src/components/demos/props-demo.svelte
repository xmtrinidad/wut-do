<script>
  export let things;
</script>

<!-- {src} is short for src={src} -->
<div class="props-demo">
  <div class="things">

    {#each things as thing}
      <div class="thing">
        <h1>{thing.title}</h1>
        <div class="thing-body">
          <p>{thing.description}</p>
        </div>
        <div class="thing-footer">
          <button>Thing BUTTON</button>
        </div>
      </div>
    {/each}

  </div>
</div>

<style>
  .things {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  .thing {
    width: 400px;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .thing-body {
    margin: 12px 0;
  }
</style>

