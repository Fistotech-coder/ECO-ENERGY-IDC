const CARD_ANIMATION_DURATION = 1500; // match your CSS transition (1.5s)

// ROUND CONTAINER - Add these new variables
let autoPlaySequence = false;
let autoPlayIndex = 0;
let autoPlayTimer = null;
const AUTO_PLAY_DURATION = 2500; // Time each product shows (2.5 seconds)


// *********************************************************************



const link = document.getElementById('tub-360-link');

link.addEventListener('click', () => {
  window.open(link.href, '_blank');
});

link.addEventListener('touchend', () => {
  window.open(link.href, '_blank');
});

const linkSweetBox4SideIML = document.getElementById('sweetbox-4side-iml-360-link');

linkSweetBox4SideIML.addEventListener('click', () => {
  window.open(linkSweetBox4SideIML.href, '_blank');
});

linkSweetBox4SideIML.addEventListener('touchend', () => {
  window.open(linkSweetBox4SideIML.href, '_blank');
});


const linkSweetBox5SideIML = document.getElementById('sweetbox-5side-iml-360-link');

linkSweetBox5SideIML.addEventListener('click', () => {
  window.open(linkSweetBox5SideIML.href, '_blank');
});

linkSweetBox5SideIML.addEventListener('touchend', () => {
  window.open(linkSweetBox5SideIML.href, '_blank');
});


const linkrs = document.getElementById('rs-360-link');

linkrs.addEventListener('click', () => {
  window.open(linkrs.href, '_blank');
});

linkrs.addEventListener('touchend', () => {
  window.open(linkrs.href, '_blank');
});

const linkOval = document.getElementById('oval-360-link');

linkOval.addEventListener('click', () => {
  window.open(linkOval.href, '_blank');
});

linkOval.addEventListener('touchend', () => {
  window.open(linkOval.href, '_blank');
});

const linkSB = document.getElementById('sb-360-link');

linkSB.addEventListener('click', () => {
  window.open(linkSB.href, '_blank');
});

linkSB.addEventListener('touchend', () => {
  window.open(linkSB.href, '_blank');
});


const linkSBIML = document.getElementById('sb-iml-360-link');

linkSBIML.addEventListener('click', () => {
  window.open(linkSBIML.href, '_blank');
});

linkSBIML.addEventListener('touchend', () => {
  window.open(linkSBIML.href, '_blank');
});


const linkRound = document.getElementById('product-360-link');

linkRound.addEventListener('click', () => {
  window.open(linkRound.href, '_blank');
});

linkRound.addEventListener('touchend', () => {
  window.open(linkRound.href, '_blank');
});


  





// 🔥 CONTACT PAGE MOBILE CLICK FIX
document.addEventListener("DOMContentLoaded", function () {

  // 1️⃣ Disable pointer events for all images (backgrounds)
  // document.querySelectorAll('.page img').forEach(img => {
  //   img.style.pointerEvents = 'none';
  // });

  // 2️⃣ Enable pointer events ONLY for clickable elements
  document.querySelectorAll(
    ' #locationBtn1, #locationBtn, .popup_images10, #instagram, #facebook, #youtube, #website, #fisto'
  ).forEach(el => {
    el.style.pointerEvents = 'auto';
    el.style.touchAction = 'manipulation';
    el.style.zIndex = '9999';
   
    // Stop flipbook swipe from blocking taps
    el.addEventListener('touchstart', e => {
      e.stopPropagation();
    }, { passive: true });
  });

});


