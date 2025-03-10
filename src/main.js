import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="reels-container">
    <div class="reel" id="skincare">
      <div>Skincare</div>
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
const reelsContainer = document.querySelector('.reels-container');

reelsContainer.addEventListener('scroll', () => {
  const scrollLeft = reelsContainer.scrollLeft;
  const reelWidth = reelsContainer.offsetWidth;
  const currentReel = Math.floor(scrollLeft / reelWidth);
  const scrollPercentage = (scrollLeft % reelWidth) / reelWidth;
  const rotationAngle = scrollPercentage * 60 - 30; // Adjust angle as needed

  reelsContainer.style.transform = `perspective(1000px) rotateY(${rotationAngle}deg)`;
});