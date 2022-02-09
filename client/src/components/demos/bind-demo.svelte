<script>
  let circleColor = 'hotpink';
</script>


<div class="bind-demo">
  <h1>Bind Demo</h1>
  <div class="circle" style="background-color: {circleColor}"></div>
  <div class="input-container">
    <label for="color_input">Change Color</label>
    <input bind:value={circleColor} placeholder={circleColor} type="text" id="color_input">
  </div>
</div>

<style>
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  .circle {
    margin-top: 8px;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: hotpink;
  }
</style>