import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="reels-container">
    <div class="reel" id="skincare">
      <div class="slideshow-container">
        <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Cover_24_Jan.webp?v=1737733090" alt="landing page">
        <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Cover_24_Jan.webp?v=1737733090" alt="landing page">
        <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Cover_24_Jan.webp?v=1737733090" alt="landing page">
        <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Cover_24_Jan.webp?v=1737733090" alt="landing page">
      </div>
    </div>
    <div class="reel" id="skincare">
      <div class="slideshow-container">
        <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Skincare_24_Jan.jpg?v=1737733088" alt="skincare">
        <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Skincare_24_Jan.jpg?v=1737733088" alt="skincare">
        <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Skincare_24_Jan.jpg?v=1737733088" alt="skincare">
        <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Skincare_24_Jan.jpg?v=1737733088" alt="skincare">
      </div>
    </div>
    <div class="reel" id="haircare">
      <img src="https://cdn.shopify.com/s/files/1/0723/1396/2741/files/Haircare_24_Jan.jpg?v=1737733087" alt="haircare">
    </div>
    <div class="reel" id="bodycare">
      <video src="https://cdn.shopify.com/videos/c/o/v/2662e3fa7a094e1badb6e4a0708e11e7.mp4" alt="bodycare" autoplay loop muted playsinline></video>
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

const hearts = document.querySelectorAll(".icon-with-numbers-fav"); // Select all elements

hearts.forEach(heart => {
  const heartImg = heart.querySelector("img");
  const originalSrc = heartImg.src;
  const alternateSrc = "https://cdn.shopify.com/s/files/1/0723/1396/2741/files/favorite_24dp_E93C40.png?v=1742271082";

  const heartNum = heart.querySelector(".fav-number");
  // const originalHeartNum = heartNum.textContent;
  // const incremented = parseInt(heartNum.textContent) + 1;

  heartImg.addEventListener('click', function(event) {
    heartImg.style.transition = "opacity 0.3s ease-in-out";

    if (heartImg.src === originalSrc) {
      heartImg.style.opacity = 0;
      setTimeout(() => {
        heartImg.src = alternateSrc;
        heartImg.style.opacity = 1;
        heartNum.textContent = parseInt(heartNum.textContent) + 1;
      }, 100);
    } else {
      heartImg.style.opacity = 0;
      setTimeout(() => {
        heartImg.src = originalSrc;
        heartImg.style.opacity = 1;
        heartNum.textContent = parseInt(heartNum.textContent) - 1;
      }, 100);
    }
  });
});
