import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="reels-container">
    <div class="reel" id="skincare">
      <h1>Skincare<h1>
      <div class="ig-ads-caption-container">
        <div class="username-container">
          <div class="logo-circle">L</div>
          <div class="username-column-container">
            <div class="username-verified">
              <div class="username">Evoke</div>
              <div class="verified">☑️</div>
            </div>
            <div class="sponsored">Sponsored</div>
          </div>
        </div>
        <div class="description">Evoke is gud</div>
        <div class="shop-now"><div>Shop Now</div></div>
      </div>
    </div>
    <div class="reel" id="haircare">Haircare</div>
    <div class="reel" id="bodycare">Bodycare</div>
    <div class="reel" id="perfume">Perfume</div>
    <div class="reel" id="liptint">Liptint</div>
    <div class="reel" id="maternity">Maternity</div>
  </div>
`
