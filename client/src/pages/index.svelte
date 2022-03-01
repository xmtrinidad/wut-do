<script>
  import CreateWutdoModal from '../components/modals/create-wutdo-modal.svelte';
  import { APP_API } from '../APP_API';

  console.log('home page loaded');
  let modalOpen = false;

  function onSubmitWutDo(e) {
    console.log('Submit the wut dooo', e.detail);
    APP_API.testThing();
    modalOpen = false;
  }

</script>

<div class="home-page">
  <h1>WUT DO - WITH TROLL FONT (NOT ROBOTO)</h1>

  <button on:click="{() => modalOpen = true}" class="add-btn">Add WUT DO</button>

  {#if modalOpen}
    <CreateWutdoModal on:submit={onSubmitWutDo} on:close-modal="{() => modalOpen = false}"></CreateWutdoModal>
  {/if}


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


