<script>
  const stonks = true;
  let stonksHTML = stonks ? `
    <div>
      <h1>STONKS</h1>
      <img src="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F029%2F959%2FScreen_Shot_2019-06-05_at_1.26.32_PM.jpg" alt="">
    </div>
  ` : `
    <div>
      <h1>NOT STONKS</h1>
      <img src="https://i.kym-cdn.com/photos/images/facebook/001/779/895/752.jpg" alt="">
    </div>
  `;
</script>

<!-- {src} is short for src={src} -->
<div class="html-render-demo">
  {@html stonksHTML}
</div>

<style>
  h1 {
    
  }

  /* Applying styles to string HTML doesn't work without global, this is the apparent solution https://stackoverflow.com/questions/59669571/svelte-dynamic-html-elements-do-not-have-css-applied */
  .html-render-demo :global(h1) {
    font-size: 2rem;
    font-weight: bold;
    border: 2px solid red;
  }
</style>

