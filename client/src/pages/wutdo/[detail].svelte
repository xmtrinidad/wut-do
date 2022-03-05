<script>
  import { params } from '@roxi/routify'
  console.log($params)
  // do API thing to get the wut do detail from the DB
</script>

<div class="wutdo">
  <h2 class="wutdo-title">Wut Do Title</h2>
  <ul>
    <li>Wut do 1</li>
    <li>Wut do 2</li>
    <li>Wut do 3</li>
  </ul>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap');

  .wutdo {
    width: 700px;
    margin: 0 auto;
    background-color: #303030;
    color: #fff;
  }

  .wutdo-title {
    font-size: 4.33945567rem;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    text-align: center;
    animation: glow 1s ease-in-out infinite alternate;
  }

    @keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }
    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  }
</style>