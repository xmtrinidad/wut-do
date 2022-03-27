<script>
  const boxes = [
    { width: 75, height: 75 },
    { width: 150, height: 200 },
    { width: 250, height: 250 }
  ];
</script>

<div class="const-demo">

  <div class="boxes">
    {#each boxes as box}
      <div class="box" style="width: {box.width}px; height: {box.height}px">
        {box.width * box.height}
      </div>
    {/each}
  </div>
  
</div>

<style>
  .const-demo {
    margin: 24px 0;
  }

  .boxes {
    display: flex;
    gap: 50px;
  }

  .box {
    border: 3px solid #000;
  }
</style>