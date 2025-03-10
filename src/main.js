import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="reels-container">
    <div class="reel">Skincare</div>
    <div class="reel">Haircare</div>
    <div class="reel">Bodycare</div>
    <div class="reel">Perfume</div>
    <div class="reel">Liptint</div>
    <div class="reel">Maternity</div>
  </div>
`
