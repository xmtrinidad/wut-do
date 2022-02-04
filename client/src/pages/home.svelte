<script>
  console.log('home page loaded');

  function createWutDo() {
    console.log('create wut do works');
  }

</script>

<div class="home-page">
  <h1>WUT DO - WITH TROLL FONT (NOT ROBOTO)</h1>

  <!-- Learning click events -->
  <button on:click="{createWutDo}" class="add-btn">Add WUT DO</button>

  <!-- Component ideas -->
  <!-- NOT sure if to make this like a dashboard page, then you can click a thing to view previous lists.  Or maybe just one big list of things.  IDK, what you think @Matt Kilcup -->
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

  .home-page {
    font-family: 'Permanent Marker', cursive;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  h1 {
    font-size: 2rem;
  }

  .add-btn {
    padding: 12px;
    margin-top: 12px;
    background-color: #673AB7;
    border-radius: 4px;
    color: #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
</style>


