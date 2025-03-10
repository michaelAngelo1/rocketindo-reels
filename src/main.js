import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="reels-container">
    <div class="reel" id="skincare">Skincare</div>
    <div class="reel" id="haircare">Haircare</div>
    <div class="reel" id="bodycare">Bodycare</div>
    <div class="reel" id="perfume">Perfume</div>
    <div class="reel" id="liptint">Liptint</div>
    <div class="reel" id="maternity">Maternity</div>
  </div>
`
