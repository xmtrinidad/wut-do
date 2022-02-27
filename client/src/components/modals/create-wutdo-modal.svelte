<script>
  import { createEventDispatcher } from 'svelte';
  import Backdrop from './backdrop.svelte';

  let wutdo_title;
  let wutdo_description;
  const dispatch = createEventDispatcher();
  

  function onModalClose() {
    dispatch('close-modal', {});
  }

  function onSubmit() {
    dispatch('submit', {title: wutdo_title, description: wutdo_description});
  }
</script>

<Backdrop />
<div class="create-wutdo-modal">
  <h1>wyd?</h1>
  <button class="close-btn" on:click="{onModalClose}">NM</button>
  <div class="input-container">
    <label for="wyd_title">TiTlE:</label>
    <input bind:value={wutdo_title} type="text" id="wyd_title">
  </div>
  <div class="input-container">
    <label for="wyd_description">DeScRiPtIoN:</label>
    <textarea bind:value={wutdo_description} type="text" id="wyd_description"></textarea>
  </div>
  <button on:click="{onSubmit}" class="submit-btn">SUBMIT</button>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ewert&display=swap');

  .create-wutdo-modal {
    position: absolute;
    background-color: #fff;
    width: 500px;
    height: 300px;
    font-family: 'Ewert', cursive;
    padding: 16px;
    /* TROLL RADIUS */
    border-radius: 20px 40px 80px 160px;
  }

  h1 {
    font-size: 1.5rem;
  }

  .input-container {
    margin: 12px 0;
  }

  

  .submit-btn {
    width: 100%;
    height:300px;
  }

  .close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
  }
</style>