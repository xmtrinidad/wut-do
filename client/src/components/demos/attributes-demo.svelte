<script>
  const gifs = [
    'https://media2.giphy.com/media/MYN98N5ZNGoA3lJ6yT/giphy.gif',
    'https://media1.giphy.com/media/SANfwj5dMkjWpWyBGK/giphy.gif',
    'https://media3.giphy.com/media/UUgHwIBcib16awR00q/giphy.gif?cid=790b761128184aa57a1b95ba4345fd4b37b8435fb40a0774&rid=giphy.gif&ct=g'
  ];
  let index = 0;
	$: src = gifs[index];

  function onNewGifClick() {
    index++;
    if (!gifs[index]) {
      index = 0;
    }
  }
</script>

<!-- {src} is short for src={src} -->
<div class="attributes-demo">
  <h1>Click + Attribute Change</h1>
  <div class="gif-container">
    <img {src} alt="">
    <button class="new-gif-btn" on:click="{onNewGifClick}">NEW GIF</button>
  </div>
</div>

<style>
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  .gif-container {
    margin-top: 24px;
  }
</style>

