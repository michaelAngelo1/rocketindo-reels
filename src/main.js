import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="reels-container">
    <div class="reel" id="skincare">
      <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Cover_24_Jan.webp?v=1737733090" alt="landing page">
    </div>
    <div class="reel" id="skincare">
      <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Skincare_24_Jan.jpg?v=1737733088" alt="skincare">
    </div>
    <div class="reel" id="haircare">
      <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Haircare_24_Jan.jpg?v=1737733087" alt="haircare">
    </div>
    <div class="reel" id="bodycare">
      <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Bodycare_24_Jan.jpg?v=1737733088" alt="bodycare">
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
const reelsContainer = document.querySelector('.reels-container');
const reels = document.querySelectorAll('.reel');
let currentIndex = 0;

reelsContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default scroll

    if (event.deltaY > 0) {
        // Scrolling down (right)
        if (currentIndex < reels.length - 1) {
            currentIndex++;
        }
    } else {
        // Scrolling up (left)
        if (currentIndex > 0) {
            currentIndex--;
        }
    }

    reelsContainer.scrollTo({
        left: reels[currentIndex].offsetLeft,
        behavior: 'smooth',
    });
});