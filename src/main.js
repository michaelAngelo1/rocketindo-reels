import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="reels-container">
    <div class="reel" id="skincare">
      <div>Skincare</div>
      <div class="ig-ads-caption-container">
        <div class="username-container">
          <div class="logo-circle">L</div>
          <div class="username-column-container">
            <div class="username-verified">
              <div class="username">Skincare</div>
              <div class="verified">☑️</div>
            </div>
            <div class="sponsored">Sponsored</div>
          </div>
        </div>
        <div class="description">Lorem ipsum dolor sit amet</div>
        <div class="shop-now"><div>Shop Now</div></div>
      </div>
    </div>
    <div class="reel" id="haircare">
      <div>Haircare</div>
      <div class="ig-ads-caption-container">
        <div class="username-container">
          <div class="logo-circle">L</div>
          <div class="username-column-container">
            <div class="username-verified">
              <div class="username">Haircare</div>
              <div class="verified">☑️</div>
            </div>
            <div class="sponsored">Sponsored</div>
          </div>
        </div>
        <div class="description">Lorem ipsum dolor sit amet</div>
        <div class="shop-now"><div>Shop Now</div></div>
      </div>
    </div>
    <div class="reel" id="bodycare">
      <div>Bodycare</div>
      <div class="ig-ads-caption-container">
        <div class="username-container">
          <div class="logo-circle">L</div>
          <div class="username-column-container">
            <div class="username-verified">
              <div class="username">Bodycare</div>
              <div class="verified">☑️</div>
            </div>
            <div class="sponsored">Sponsored</div>
          </div>
        </div>
        <div class="description">Lorem ipsum dolor sit amet</div>
        <div class="shop-now"><div>Shop Now</div></div>
      </div>
    </div>
    <div class="reel" id="perfume">
      <div>Perfume</div>
      <div class="ig-ads-caption-container">
        <div class="username-container">
          <div class="logo-circle">L</div>
          <div class="username-column-container">
            <div class="username-verified">
              <div class="username">Perfume</div>
              <div class="verified">☑️</div>
            </div>
            <div class="sponsored">Sponsored</div>
          </div>
        </div>
        <div class="description">Lorem ipsum dolor sit amet</div>
        <div class="shop-now"><div>Shop Now</div></div>
      </div>
    </div>
    <div class="reel" id="liptint">
      <div>Liptint</div>
      <div class="ig-ads-caption-container">
        <div class="username-container">
          <div class="logo-circle">L</div>
          <div class="username-column-container">
            <div class="username-verified">
              <div class="username">Liptint</div>
              <div class="verified">☑️</div>
            </div>
            <div class="sponsored">Sponsored</div>
          </div>
        </div>
        <div class="description">Lorem ipsum dolor sit amet</div>
        <div class="shop-now"><div>Shop Now</div></div>
      </div>
    </div>
    <div class="reel" id="maternity">
      <div>Maternity</div>
      <div class="ig-ads-caption-container">
        <div class="username-container">
          <div class="logo-circle">L</div>
          <div class="username-column-container">
            <div class="username-verified">
              <div class="username">Maternity</div>
              <div class="verified">☑️</div>
            </div>
            <div class="sponsored">Sponsored</div>
          </div>
        </div>
        <div class="description">Lorem ipsum dolor sit amet</div>
        <div class="shop-now"><div>Shop Now</div></div>
      </div>
    </div>
  </div>
`
