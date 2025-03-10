import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="reels-container">
    <div class="reel" id="skincare">
      <div>Skincare</div>
      <video autoplay muted loop>
        <source src="https://cdn.shopify.com/videos/c/o/v/2662e3fa7a094e1badb6e4a0708e11e7.mp4" type="video/mp4">
      </video>
    </div>
    <div class="reel" id="haircare">
      <div>Haircare</div>
    </div>
    <div class="reel" id="bodycare">
      <div>Bodycare</div>
    </div>
    <div class="reel" id="perfume">
      <div>Perfume</div>
    </div>
    <div class="reel" id="liptint">
      <div>Liptint</div>
    </div>
    <div class="reel" id="maternity">
      <div>Maternity</div>
    </div>
  </div>
`
