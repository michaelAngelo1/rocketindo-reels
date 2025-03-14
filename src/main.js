import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="reels-container">
    <div class="reel" id="skincare">
      <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Cover_24_Jan.webp?v=1737733090" alt="landing page">
    </div>
    <div class="reel" id="skincare">
      <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Skincare_24_Jan.jpg?v=1737733088" alt="skincare">
      <div class="go-shopping">
        <div class="go-shopping-text">Go Shopping</div>
      </div>
    </div>
    <div class="reel" id="haircare">
      <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Haircare_24_Jan.jpg?v=1737733087" alt="haircare">
    </div>
    <div class="reel" id="bodycare">
      <video src="https://cdn.shopify.com/videos/c/o/v/2662e3fa7a094e1badb6e4a0708e11e7.mp4" alt="bodycare" autoplay loop muted playsinline></video>
      <div class="ig-ads-caption-container">
        <div class="username-container">
          <div class="logo-circle">L</div>
          <div class="username-column-container">
            <div class="username-verified">
              <div class="username">Fordive</div>
              <div class="verified">✅</div>
            </div>
            <div class="sponsored">Sponsored</div>
          </div>
        </div>
        <div class="description">Fordive is a local perfume label with utmost priority for farthest projection</div>
        <div class="shop-now"><div>Shop Now</div></div>
      </div>
    </div>
    <div class="reel" id="perfume">
      <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Perfume_24_Jan.webp?v=1737733091" alt="perfume">
    </div>
    <div class="reel" id="liptint">
      <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Liptint_24_Jan.jpg?v=1737733088" alt="liptint">
    </div>
    <div class="reel" id="maternity">
      <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Maternity_Desktop.webp?v=1741596258" alt="maternity">
    </div>
  </div>
`
