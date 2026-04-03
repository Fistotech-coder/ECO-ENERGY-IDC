
// ********************************ROUND CONTAINER ANIMATION CODE START********************************** 

// const containerModels = [
//     {
//         id: "03-250ml",
//         cardImg: "../global assets/Images/Round-container/03-250ml/03-250-ml-card-img.svg",
//         containerImg: "../global assets/Images/Round-container/03-250ml/03-250-ml-round-container-img.webp",
//         nameImg: "../global assets/Images/Round-container/03-250ml/03-250-ml.svg",
//         textImg: "../global assets/Images/Round-container/03-250ml/03-250-ml-text.svg"
//     },
//     {
//         id: "04-300ml",
//         cardImg: "../global assets/Images/Round-container/04-300ml/04-300-ml-card-img.svg",
//         containerImg: "../global assets/Images/Round-container/04-300ml/04-300-ml-round-container-img.webp",
//         nameImg: "../global assets/Images/Round-container/04-300ml/04-300-ml.svg",
//         textImg: "../global assets/Images/Round-container/04-300ml/04-300-ml-text.svg"
//     },
//     {
//         id: "03-500ml",
//         cardImg: "../global assets/Images/Round-container/03-500ml/03-500-ml-card-img.svg",
//         containerImg: "../global assets/Images/Round-container/03-500ml/03-500-ml-round-container-img.webp",
//         nameImg: "../global assets/Images/Round-container/03-500ml/03-500-ml.svg",
//         textImg: "../global assets/Images/Round-container/03-500ml/03-500-ml-text.svg"
//     },
//     {
//         id: "05-600ml",
//         cardImg: "../global assets/Images/Round-container/05-600ml/05-600-ml-card-img.svg",
//         containerImg: "../global assets/Images/Round-container/05-600ml/05-600-ml-round-container-img.webp",
//         nameImg: "../global assets/Images/Round-container/05-600ml/05-600-ml.svg",
//         textImg: "../global assets/Images/Round-container/05-600ml/05-600-ml-text.svg"
//     },
//     {
//         id: "05-750ml",
//         cardImg: "../global assets/Images/Round-container/05-750ml/05-750-ml-card-img.svg",
//         containerImg: "../global assets/Images/Round-container/05-750ml/05-750-ml-round-container-img.webp",
//         nameImg: "../global assets/Images/Round-container/05-750ml/05-750-ml.svg",
//         textImg: "../global assets/Images/Round-container/05-750ml/05-750-ml-text.svg"
//     },
//     {
//         id: "05-1000ml",
//         cardImg: "../global assets/Images/Round-container/05-1000ml/05-1000-ml-card-img.svg",
//         containerImg: "../global assets/Images/Round-container/05-1000ml/05-1000-ml-round-container-img.webp",
//         nameImg: "../global assets/Images/Round-container/05-1000ml/05-1000-ml.svg",
//         textImg: "../global assets/Images/Round-container/05-1000ml/05-1000-ml-text.svg"
//     }
// ];

const containerModels = [
    {
        id: "03-250ml",
        cardImg: "../global assets/Images/Round-container/03-250ml/03-250-ml-card-img.svg",
        containerImg: "../global assets/Images/Round-container/03-250ml/03-250-ml-round-container-img.webp",
        nameImg: "../global assets/Images/Round-container/03-250ml/03-250-ml.svg",
        textImg: "../global assets/Images/Round-container/03-250ml/03-250-ml-text.svg",
        lightboxUrl: "../lightBox/index.html#03-250-ml-round-container"
    },
    {
        id: "04-300ml",
        cardImg: "../global assets/Images/Round-container/04-300ml/04-300-ml-card-img.svg",
        containerImg: "../global assets/Images/Round-container/04-300ml/04-300-ml-round-container-img.webp",
        nameImg: "../global assets/Images/Round-container/04-300ml/04-300-ml.svg",
        textImg: "../global assets/Images/Round-container/04-300ml/04-300-ml-text.svg",
        lightboxUrl: "../lightBox/index.html#04-300-ml-round-container"
    },
    {
        id: "03-500ml",
        cardImg: "../global assets/Images/Round-container/03-500ml/03-500-ml-card-img.svg",
        containerImg: "../global assets/Images/Round-container/03-500ml/03-500-ml-round-container-img.webp",
        nameImg: "../global assets/Images/Round-container/03-500ml/03-500-ml.svg",
        textImg: "../global assets/Images/Round-container/03-500ml/03-500-ml-text.svg",
        lightboxUrl: "../lightBox/index.html#03-500-ml-round-container"
    },
    {
        id: "05-600ml",
        cardImg: "../global assets/Images/Round-container/05-600ml/05-600-ml-card-img.svg",
        containerImg: "../global assets/Images/Round-container/05-600ml/05-600-ml-round-container-img.webp",
        nameImg: "../global assets/Images/Round-container/05-600ml/05-600-ml.svg",
        textImg: "../global assets/Images/Round-container/05-600ml/05-600-ml-text.svg",
        lightboxUrl: "../lightBox/index.html#05-600-ml-round-container"
    },
    {
        id: "05-750ml",
        cardImg: "../global assets/Images/Round-container/05-750ml/05-750-ml-card-img.svg",
        containerImg: "../global assets/Images/Round-container/05-750ml/05-750-ml-round-container-img.webp",
        nameImg: "../global assets/Images/Round-container/05-750ml/05-750-ml.svg",
        textImg: "../global assets/Images/Round-container/05-750ml/05-750-ml-text.svg",
        lightboxUrl: "../lightBox/index.html#05-750-ml-round-container"
    },
    {
        id: "05-1000ml",
        cardImg: "../global assets/Images/Round-container/05-1000ml/05-1000-ml-card-img.svg",
        containerImg: "../global assets/Images/Round-container/05-1000ml/05-1000-ml-round-container-img.webp",
        nameImg: "../global assets/Images/Round-container/05-1000ml/05-1000-ml.svg",
        textImg: "../global assets/Images/Round-container/05-1000ml/05-1000-ml-text.svg",
        lightboxUrl: "../lightBox/index.html#05-1000-ml-round-container"
    }
];

// ─── State ────────────────────────────────────────────────────────────────────
let modelIndex = 0;
let isRoundAnimating = false;
const TOTAL = containerModels.length;

// ─── DOM Slots ────────────────────────────────────────────────────────────────
const slot0 = {
    wrapper: document.getElementById('card-slot-0'),
    card: document.getElementById('round-slot-0-card'),
    cont: document.getElementById('round-slot-0-container')
};

const slot1 = {
    wrapper: document.getElementById('card-slot-1'),
    card: document.getElementById('round-slot-1-card'),
    cont: document.getElementById('round-slot-1-container')
};

const slot2 = {
    wrapper: document.getElementById('card-slot-2'),
    card: document.getElementById('round-slot-2-card'),
    cont: document.getElementById('round-slot-2-container')
};

// slots[0] = LEFT, slots[1] = CENTER, slots[2] = RIGHT
// This array rotates on every slide
let slots = [slot0, slot1, slot2];

// Bottom section elements
const bottomImg = document.getElementById('round-current-container');
const bottomName = document.getElementById('round-current-container-name-text');
const bottomDesc = document.getElementById('round-current-container-text');

const roundprevBtn = document.getElementById('round-previous-button');
const roundnextBtn = document.getElementById('round-next-button');

// ─── Position CSS classes ─────────────────────────────────────────────────────
const POSITIONS = ['card-far-left', 'card-left', 'card-center', 'card-right', 'card-far-right'];

// ─── Helper Functions ─────────────────────────────────────────────────────────

function setPosition(slot, posClass) {
    slot.wrapper.classList.remove(...POSITIONS);
    slot.wrapper.classList.add(posClass);
}

function disableTransition(slot) {
    slot.wrapper.classList.add('no-transition');
}

function enableTransition(slot) {
    slot.wrapper.classList.remove('no-transition');
}

function loadSlot(slot, mIdx) {
    const model = containerModels[mIdx];
    slot.card.src = model.cardImg;
    slot.cont.src = model.containerImg;
}

function getModelIndex(offset) {
    return ((modelIndex + offset) % TOTAL + TOTAL) % TOTAL;
}

// ─── Initialize Carousel ──────────────────────────────────────────────────────
function initCarousel() {

    // 1. Stop any running autoplay
    clearInterval(autoplayInterval);
    autoplayInterval = null;

    // 2. Reset state
    modelIndex       = 0;
    isRoundAnimating = false;
    slots            = [slot0, slot1, slot2];

    // 3. Load images into slots
    loadSlot(slots[0], getModelIndex(-1));
    loadSlot(slots[1], getModelIndex(0));
    loadSlot(slots[2], getModelIndex(1));

    // 4. Snap positions instantly
    disableTransition(slots[0]);
    disableTransition(slots[1]);
    disableTransition(slots[2]);

    setPosition(slots[0], 'card-left');
    setPosition(slots[1], 'card-center');
    setPosition(slots[2], 'card-right');

    // 5. Re-enable transitions after snap
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            enableTransition(slots[0]);
            enableTransition(slots[1]);
            enableTransition(slots[2]);
        });
    });

    // 6. Update bottom section
    updateBottom();

    // 7. Restart autoplay fresh
    autoplayInterval = setInterval(goNext, 5000);
}

// ─── GO NEXT ──────────────────────────────────────────────────────────────────
// When clicking NEXT:
// - RIGHT card slides to CENTER
// - CENTER card slides to LEFT  
// - LEFT card exits to FAR-LEFT, then recycles to FAR-RIGHT, then slides to RIGHT
function goNext() {
    if (isRoundAnimating) return;
    isRoundAnimating = true;

    const recycledSlot = slots[0];

    // Pre-load the new next image
    loadSlot(recycledSlot, getModelIndex(2));

    // Instantly move recycled slot to far-right (it's invisible, no visual jump)
    disableTransition(recycledSlot);
    setPosition(recycledSlot, 'card-far-right');
    void recycledSlot.wrapper.offsetWidth;

    // Animate all three simultaneously
    setPosition(slots[1], 'card-left');
    setPosition(slots[2], 'card-center');

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            enableTransition(recycledSlot);
            setPosition(recycledSlot, 'card-right'); // slides in from right
        });
    });

    setTimeout(() => {
        modelIndex = getModelIndex(1);
        slots = [slots[1], slots[2], recycledSlot];
        isRoundAnimating = false;
        updateBottom();
    }, 700);
}
// ─── GO PREVIOUS ──────────────────────────────────────────────────────────────
// When clicking PREV:
// - LEFT card slides to CENTER
// - CENTER card slides to RIGHT
// - RIGHT card exits to FAR-RIGHT, then recycles to FAR-LEFT, then slides to LEFT
function goPrev() {
    if (isRoundAnimating) return;
    isRoundAnimating = true;

    const recycledSlot = slots[2];

    // Pre-load the new prev image
    loadSlot(recycledSlot, getModelIndex(-2));

    // Instantly move recycled slot to far-left (it's invisible, no visual jump)
    disableTransition(recycledSlot);
    setPosition(recycledSlot, 'card-far-left');
    void recycledSlot.wrapper.offsetWidth;

    // Animate all three simultaneously
    setPosition(slots[1], 'card-right');
    setPosition(slots[0], 'card-center');

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            enableTransition(recycledSlot);
            setPosition(recycledSlot, 'card-left'); // slides in from left
        });
    });

    setTimeout(() => {
        modelIndex = getModelIndex(-1);
        slots = [recycledSlot, slots[0], slots[1]];
        isRoundAnimating = false;
        updateBottom();
    }, 700);
}

// ─── Update Bottom Section ────────────────────────────────────────────────────
function updateBottom() {
    // Remove animation classes
    bottomImg.classList.remove('slide-in-active-left-img');
    bottomName.classList.remove('slide-in-active-left');
    bottomDesc.classList.remove('slide-in-active');
    
    // Force reflow
    void bottomImg.offsetWidth;
    
    // Update sources
    const model = containerModels[modelIndex];
    bottomImg.src = model.containerImg;
    bottomName.src = model.nameImg;
    bottomDesc.src = model.textImg;
    
    // Add animation classes
    bottomImg.classList.add('slide-in-active-left-img');
    bottomName.classList.add('slide-in-active-left');
    bottomDesc.classList.add('slide-in-active');

    const roundLightboxLink = document.getElementById('round-container-360-link');
    if (roundLightboxLink && model.lightboxUrl) {
        roundLightboxLink.href = model.lightboxUrl;
    }
}

// ─── Event Listeners ──────────────────────────────────────────────────────────
// roundnextBtn.addEventListener('click', () => {
//     goNext();
//     resetAutoplay();
// });

// roundprevBtn.addEventListener('click', () => {
//     goPrev();
//     resetAutoplay();
// });

// ─── Autoplay ─────────────────────────────────────────────────────────────────
let autoplayInterval = null;

function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(goNext, 5000);
}

// ─── Initialize ─────
// initCarousel();



// ********************************ROUND CONTAINER ANIMATION CODE END********************************** 


// **********************************Ice Cream Round Cup Animation code start*********************************
// ================================
// ICE CREAM ROUND — CAROUSEL JS
// ================================

const iceCreamRoundProducts = [
  {
    index: 0,
    backgroundImg:        "../global assets/Images/Ice-cream-round/100ml/background-img.webp",
    textImg:              "../global assets/Images/Ice-cream-round/100ml/iml-ice-cream-round.svg",
    currentContainerImg:  "../global assets/Images/Ice-cream-round/100ml/100ml-container.webp",
    previousContainerImg: "../global assets/Images/Ice-cream-round/125ml/125ml-container.webp",
    nextContainerImg:     "../global assets/Images/Ice-cream-round/115ml/115ml-container.webp",
    containerNameImg:     "../global assets/Images/Ice-cream-round/100ml/100ml.svg",
    imlMoqImg:            "../global assets/Images/Ice-cream-round/100ml/iml-moq.svg",
    productCodeImg:       "../global assets/Images/Ice-cream-round/100ml/product-code.svg",
    contentImg:           "../global assets/Images/Ice-cream-round/100ml/content.svg",
    lightboxUrl:          "../lightBox/index.html#100-ml-ice-cream-round-container"
  },
  {
    index: 1,
    backgroundImg:        "../global assets/Images/Ice-cream-round/115ml/background-img.webp",
    textImg:              "../global assets/Images/Ice-cream-round/115ml/iml-ice-cream-round.svg",
    currentContainerImg:  "../global assets/Images/Ice-cream-round/115ml/115ml-container.webp",
    previousContainerImg: "../global assets/Images/Ice-cream-round/100ml/100ml-container.webp",
    nextContainerImg:     "../global assets/Images/Ice-cream-round/125ml/125ml-container.webp",
    containerNameImg:     "../global assets/Images/Ice-cream-round/115ml/115ml.svg",
    imlMoqImg:            "../global assets/Images/Ice-cream-round/115ml/iml-moq.svg",
    productCodeImg:       "../global assets/Images/Ice-cream-round/115ml/product-code.svg",
    contentImg:           "../global assets/Images/Ice-cream-round/115ml/content.svg",
    lightboxUrl:          "../lightBox/index.html#115-ml-ice-cream-round-container"
  },
  {
    index: 2,
    backgroundImg:        "../global assets/Images/Ice-cream-round/125ml/background-img.webp",
    textImg:              "../global assets/Images/Ice-cream-round/125ml/iml-ice-cream-round.svg",
    currentContainerImg:  "../global assets/Images/Ice-cream-round/125ml/125ml-container.webp",
    previousContainerImg: "../global assets/Images/Ice-cream-round/115ml/115ml-container.webp",
    nextContainerImg:     "../global assets/Images/Ice-cream-round/100ml/100ml-container.webp",
    containerNameImg:     "../global assets/Images/Ice-cream-round/125ml/125ml.svg",
    imlMoqImg:            "../global assets/Images/Ice-cream-round/125ml/iml-moq.svg",
    productCodeImg:       "../global assets/Images/Ice-cream-round/125ml/product-code.svg",
    contentImg:           "../global assets/Images/Ice-cream-round/125ml/content.svg",
    lightboxUrl:          "../lightBox/index.html#125-ml-ice-cream-round-container"
  },
];

let iceCreamRoundCurrentIndex  = 0;
let iceCreamRoundIsAnimating   = false;
let iceCreamRoundAutoplayTimer = null;
let iceCreamRoundActiveBgLayer = "a";

const iceCreamRoundEl = {
  bgLayerA:      document.getElementById("ice-cream-round-bg-layer-a"),
  bgLayerB:      document.getElementById("ice-cream-round-bg-layer-b"),
  textImg:       document.getElementById("ice-cream-round-text-img"),
  track:         document.getElementById("ice-cream-round-track"),
  prevContainer: document.getElementById("ice-cream-round-previous-container-img"),
  currContainer: document.getElementById("ice-cream-round-current-container-img"),
  nextContainer: document.getElementById("ice-cream-round-next-container-img"),
  containerName: document.getElementById("ice-cream-round-container-name"),
  imlMoq:        document.getElementById("ice-cream-round-iml-moq"),
  productCode:   document.getElementById("ice-cream-round-product-code"),
  content:       document.getElementById("ice-cream-round-content"),
  nextBtn:       document.getElementById("ice-cream-round-next-btn"),
  previousBtn:   document.getElementById("ice-cream-round-previous-btn"),
};

// ── Background crossfade ──────────────────────────────────────
function iceCreamRoundCrossfadeBg(newSrc) {
  if (iceCreamRoundActiveBgLayer === "a") {
    iceCreamRoundEl.bgLayerB.src           = newSrc;
    iceCreamRoundEl.bgLayerB.style.opacity = "1";
    iceCreamRoundEl.bgLayerA.style.opacity = "0";
    iceCreamRoundActiveBgLayer             = "b";
  } else {
    iceCreamRoundEl.bgLayerA.src           = newSrc;
    iceCreamRoundEl.bgLayerA.style.opacity = "1";
    iceCreamRoundEl.bgLayerB.style.opacity = "0";
    iceCreamRoundActiveBgLayer             = "a";
  }
}

// ── Track slide ───────────────────────────────────────────────
// The track sits at left:-100% in CSS.
// translateX(0)    = track at natural position  → prev slot visible
// translateX(-33%) = centre slot visible        ← default/resting
// translateX(-66%) = next slot visible

function iceCreamRoundSlideTrackOut(direction) {
  const t = iceCreamRoundEl.track;
  t.style.transition = "transform 0.42s cubic-bezier(0.4,0,0.6,1)";
  // next → slide left (negative), prev → slide right (positive)
  t.style.transform  = direction === "next"
    ? "translateX(-66.666%)"
    : "translateX(0%)";
}

function iceCreamRoundSnapAndSlideIn() {
  const t = iceCreamRoundEl.track;
  // snap to centre with no animation
  t.style.transition = "none";
  t.style.transform  = "translateX(-33.333%)";
  t.offsetWidth; // force reflow
  // gentle settle (stays at centre — just for the "land" feel)
  t.style.transition = "transform 0.38s cubic-bezier(0.2,0,0.2,1)";
  t.style.transform  = "translateX(-33.333%)";
}

// ── Swap all images ───────────────────────────────────────────
function iceCreamRoundSwapImages(product) {
  iceCreamRoundEl.textImg.src        = product.textImg;
  iceCreamRoundEl.prevContainer.src  = product.previousContainerImg;
  iceCreamRoundEl.currContainer.src  = product.currentContainerImg;
  iceCreamRoundEl.nextContainer.src  = product.nextContainerImg;
  iceCreamRoundEl.containerName.src  = product.containerNameImg;
  iceCreamRoundEl.imlMoq.src         = product.imlMoqImg;
  iceCreamRoundEl.productCode.src    = product.productCodeImg;
  iceCreamRoundEl.content.src        = product.contentImg;
}

// ── Staggered text reveal ─────────────────────────────────────
const iceCreamRoundRevealOrder = [
  "textImg", "containerName", "imlMoq", "productCode", "content"
];

function iceCreamRoundFireReveals() {
  iceCreamRoundRevealOrder.forEach((key, i) => {
    const el = iceCreamRoundEl[key];
    el.classList.remove("icr-reveal");
    el.style.animationDelay = "0ms";
    el.offsetWidth; // reflow
    el.style.animationDelay = (i * 90) + "ms";
    el.classList.add("icr-reveal");
  });
}

// ── Dot update ────────────────────────────────────────────────
function iceCreamRoundUpdateDots() {
  document.querySelectorAll(".ice-cream-round-dot").forEach(dot => {
    dot.classList.toggle("ice-cream-round-dot--active",
      +dot.dataset.i === iceCreamRoundCurrentIndex);
  });
}

// ── Master transition ─────────────────────────────────────────
function iceCreamRoundTransitionTo(newIndex, direction) {
  if (iceCreamRoundIsAnimating) return;
  iceCreamRoundIsAnimating = true;

  const product = iceCreamRoundProducts[newIndex];

  // 1. Fade background immediately
  iceCreamRoundCrossfadeBg(product.backgroundImg);

  // 2. Slide track out
  iceCreamRoundSlideTrackOut(direction);

  // 3. Mid-point: swap images + slide back in + reveal texts
setTimeout(() => {
    iceCreamRoundCurrentIndex = newIndex;
    iceCreamRoundSwapImages(product);
    iceCreamRoundSnapAndSlideIn();
    iceCreamRoundFireReveals();
    iceCreamRoundUpdateDots();

    // ── ADD THIS LINE ONLY ──
    const icrLink = document.getElementById('ice-cream-round-360-link');
    if (icrLink && product.lightboxUrl) icrLink.href = product.lightboxUrl;

}, 340);

  // 4. Unlock
  setTimeout(() => { iceCreamRoundIsAnimating = false; }, 860);
}

// ── Navigation ────────────────────────────────────────────────
function iceCreamRoundGoNext() {
  const next = (iceCreamRoundCurrentIndex + 1) % iceCreamRoundProducts.length;
  iceCreamRoundTransitionTo(next, "next");
}
function iceCreamRoundGoPrev() {
  const prev = (iceCreamRoundCurrentIndex - 1 + iceCreamRoundProducts.length) % iceCreamRoundProducts.length;
  iceCreamRoundTransitionTo(prev, "prev");
}

// ── Autoplay ──────────────────────────────────────────────────
function iceCreamRoundStartAutoplay() {
  iceCreamRoundAutoplayTimer = setInterval(iceCreamRoundGoNext, 4000);
}
function iceCreamRoundStopAutoplay() {
  clearInterval(iceCreamRoundAutoplayTimer);
  iceCreamRoundAutoplayTimer = null;
}
function iceCreamRoundResetAutoplay() {
  iceCreamRoundStopAutoplay();
  iceCreamRoundStartAutoplay();
}

// ── Init ──────────────────────────────────────────────────────
function iceCreamRoundInit() {

    // 1. Stop any running autoplay
    iceCreamRoundStopAutoplay();

    // 2. Reset state
    iceCreamRoundCurrentIndex  = 0;
    iceCreamRoundIsAnimating   = false;
    iceCreamRoundActiveBgLayer = "a";

    const first = iceCreamRoundProducts[0];

    // 3. Reset background to layer A
    iceCreamRoundEl.bgLayerA.src           = first.backgroundImg;
    iceCreamRoundEl.bgLayerA.style.opacity = "1";
    iceCreamRoundEl.bgLayerB.style.opacity = "0";

    // 4. Reset all images to first product
    iceCreamRoundSwapImages(first);

    // 5. Snap track to centre instantly (no animation)
    iceCreamRoundEl.track.style.transition = "none";
    iceCreamRoundEl.track.style.transform  = "translateX(-33.333%)";
    iceCreamRoundEl.track.offsetWidth;     // force reflow

    // 6. Fire entrance reveal animations
    iceCreamRoundFireReveals();
    iceCreamRoundUpdateDots();


        // ── ADD THIS LINE ONLY ──
    const icrLink = document.getElementById('ice-cream-round-360-link');
    if (icrLink) icrLink.href = iceCreamRoundProducts[0].lightboxUrl;

    
    // 7. Start autoplay fresh
    iceCreamRoundStartAutoplay();
}


// ✅ ADD THESE RIGHT AFTER iceCreamRoundInit closing bracket
iceCreamRoundEl.nextBtn.addEventListener("click", () => {
    iceCreamRoundGoNext();
    iceCreamRoundResetAutoplay();
});

iceCreamRoundEl.previousBtn.addEventListener("click", () => {
    iceCreamRoundGoPrev();
    iceCreamRoundResetAutoplay();
});

// ✅ ADD THESE RIGHT AFTER iceCreamRoundInit closing bracket
roundnextBtn.addEventListener('click', () => {
    goNext();
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(goNext, 5000);
});

roundprevBtn.addEventListener('click', () => {
    goPrev();
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(goNext, 5000);
});








// ===== MOBILE TOUCH FIX FOR ROUND CONTAINER BUTTONS =====
(function() {
    function addTouchSupport(elementId, clickHandler) {
        var el = document.getElementById(elementId);
        if (!el) return;

        el.addEventListener('touchstart', function(e) {
            e.stopPropagation();
        }, { passive: true });

        el.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            clickHandler();
        }, { passive: false });
    }

    // Round Container buttons
    addTouchSupport('round-next-button', function() {
        goNext();
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(goNext, 5000);
    });

    addTouchSupport('round-previous-button', function() {
        goPrev();
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(goNext, 5000);
    });

    // Ice Cream Round buttons
    addTouchSupport('ice-cream-round-next-btn', function() {
        iceCreamRoundGoNext();
        iceCreamRoundResetAutoplay();
    });

    addTouchSupport('ice-cream-round-previous-btn', function() {
        iceCreamRoundGoPrev();
        iceCreamRoundResetAutoplay();
    });

    // Square Bucket bottom items
    document.querySelectorAll('.square-bucket-bottom-item').forEach(function(el, i) {
        el.addEventListener('touchstart', function(e) {
            e.stopPropagation();
        }, { passive: true });

        el.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (!squareBucketIsAnimating) {
                squareBucketSwitchToItem(i);
            }
        }, { passive: false });
    });
})();







// ****************************sweet box Container animation code start***************************************
/* ============================================================
   SWEETBOX CAROUSEL — sweetbox-animation.js
   Scroll-based right panel with smooth position movement
   ============================================================ */

// ─────────────────────────────────────────────────────────────
// 1. PRODUCT DATA ARRAY
// ─────────────────────────────────────────────────────────────
const SB_PRODUCTS = [
  {
    id: "SB-16-250-G",
    lightboxId: "../lightBox/index.html#SB-16-250",  
    containerImg: "../global assets/Images/Sweetbox/SB-16-250-G/SB-16-250-G-container-img.webp",
    sideImg:      "../global assets/Images/Sweetbox/SB-16-250-G/SB-16-250-G-side-img.svg",
    nameImg:      "../global assets/Images/Sweetbox/SB-16-250-G/SB-16-250-G.svg",
    contentImg:   "../global assets/Images/Sweetbox/SB-16-250-G/content.svg",
    topIcon:      "../global assets/Images/Sweetbox/SB-16-250-G/top-icon.svg",
    bottomIcon:   "../global assets/Images/Sweetbox/SB-16-250-G/bottom-icon.svg",
    heightIcon:   "../global assets/Images/Sweetbox/SB-16-250-G/height-icon.svg",
    pcsIcon:      "../global assets/Images/Sweetbox/SB-16-250-G/pcs-per-box-icon.svg",
  },
  {
    id: "SB-16-500-G",
    lightboxId: "../lightBox/index.html#SB-16-500",  // ← ADD THIS
    containerImg: "../global assets/Images/Sweetbox/SB-16-500-G/SB-16-500-G-container-img.webp",
    sideImg:      "../global assets/Images/Sweetbox/SB-16-500-G/SB-16-500-G-side-img.svg",
    nameImg:      "../global assets/Images/Sweetbox/SB-16-500-G/SB-16-500-G.svg",
    contentImg:   "../global assets/Images/Sweetbox/SB-16-500-G/content.svg",
    topIcon:      "../global assets/Images/Sweetbox/SB-16-500-G/top-icon.svg",
    bottomIcon:   "../global assets/Images/Sweetbox/SB-16-500-G/bottom-icon.svg",
    heightIcon:   "../global assets/Images/Sweetbox/SB-16-500-G/height-icon.svg",
    pcsIcon:      "../global assets/Images/Sweetbox/SB-16-500-G/pcs-per-box-icon.svg",
  },
  {
    id: "SB-16-1000-G",
    lightboxId: "../lightBox/index.html#SB-16-1000",  // ← ADD THIS
    containerImg: "../global assets/Images/Sweetbox/SB-16-1000-G/SB-16-1000-G-container-img.webp",
    sideImg:      "../global assets/Images/Sweetbox/SB-16-1000-G/SB-16-1000-G-side-img.svg",
    nameImg:      "../global assets/Images/Sweetbox/SB-16-1000-G/SB-16-1000-G.svg",
    contentImg:   "../global assets/Images/Sweetbox/SB-16-1000-G/content.svg",
    topIcon:      "../global assets/Images/Sweetbox/SB-16-1000-G/top-icon.svg",
    bottomIcon:   "../global assets/Images/Sweetbox/SB-16-1000-G/bottom-icon.svg",
    heightIcon:   "../global assets/Images/Sweetbox/SB-16-1000-G/height-icon.svg",
    pcsIcon:      "../global assets/Images/Sweetbox/SB-16-1000-G/pcs-per-box-icon.svg",
  },
];

// ─────────────────────────────────────────────────────────────
// 2. LEFT PANEL SEQUENCE
// ─────────────────────────────────────────────────────────────
const SB_SEQ = [
  { id: "SB-16-container-image", enter: "sb-enter-fade",     exit: "sb-exit-fade",    delay: 0   },
  { id: "SB-16-text",           enter: "sb-enter-name",     exit: "sb-exit-name",    delay: 110 },
  { id: "SB-16-content",        enter: "sb-enter-content",  exit: "sb-exit-content", delay: 210 },
  { id: "SB-16-food-safe",      enter: "sb-enter-foodsafe", exit: "sb-exit-content", delay: 310 },
  { id: "SB-16-top-icon",       enter: "sb-enter-top",      exit: "sb-exit-top",     delay: 400 },
  { id: "SB-16-bottom-icon",    enter: "sb-enter-left",     exit: "sb-exit-left",    delay: 445 },
  { id: "SB-16-height-icon",    enter: "sb-enter-right",    exit: "sb-exit-right",   delay: 490 },
  { id: "SB-16-pcs-per-box",    enter: "sb-enter-bottom",   exit: "sb-exit-bottom",  delay: 535 },
  { id: "SB-16-iml-lid",        enter: "sb-enter-popup",    exit: "sb-exit-popup",   delay: 620 },
];

const EXIT_STAGGER = 38;

// ─────────────────────────────────────────────────────────────
// 3. STATE
// ─────────────────────────────────────────────────────────────
let sbActive    = 0;
let sbAnimating = false;
let sbTimer     = null;

// Slot order: sbSlots[0]=left(previous), sbSlots[1]=center(active), sbSlots[2]=right(next)
// Initialize with product 0 at CENTER position
let sbSlots = [SB_PRODUCTS.length - 1, 0, 1];

// All slot CSS classes
const SLOT_CLASSES = [
  "sb-slot-0", "sb-slot-1", "sb-slot-2",
  "sb-slot-exit-up", "sb-slot-enter-bottom",
  "sb-slot-exit-down", "sb-slot-enter-top"   // ← add these
];

// ─────────────────────────────────────────────────────────────
// 4. HELPER — remove all slot classes from element
// ─────────────────────────────────────────────────────────────
function sbClearSlotClasses(el) {
  SLOT_CLASSES.forEach(c => el.classList.remove(c));
}

// ─────────────────────────────────────────────────────────────
// 5. RIGHT PANEL — INIT
// ─────────────────────────────────────────────────────────────
function sbInitRightPanel() {
  sbSlots.forEach((productIdx, slot) => {
    const el = document.getElementById(`SB-16-side-${productIdx}`);
    if (!el) return;
    sbClearSlotClasses(el);
    el.classList.add(`sb-slot-${slot}`);
  });
}

// ─────────────────────────────────────────────────────────────
// 6. RIGHT PANEL — SCROLL ONE STEP
//
//    How it works (pure position-based, no fade/keyframes):
//
//    BEFORE:  slot0=active(top)  slot1=middle  slot2=bottom
//
//    Step 1:  slot0 image → exit-up class (slides to top:-33.333%)
//             slot1 image → sb-slot-0 class (slides up to top:0%)
//             slot2 image → sb-slot-1 class (slides up to top:33.333%)
//             All via CSS transition (smooth movement)
//
//    Step 2:  After 480ms:
//             — Remove exit-up from old slot0 image
//             — Place it at enter-bottom (top:100%, NO transition)
//
//    Step 3:  After 50ms more:
//             — Give it sb-slot-2 (transition kicks in, slides to 66.666%)
//
//    Step 4:  Rotate sbSlots array: [A,B,C] → [B,C,A]
//
// ─────────────────────────────────────────────────────────────
function sbScrollRight(onComplete) {
  const exitingProductIdx  = sbSlots[0];
  const movingToTopIdx     = sbSlots[1];
  const movingToMiddleIdx  = sbSlots[2];

  const elExit     = document.getElementById(`SB-16-side-${exitingProductIdx}`);
  const elToTop    = document.getElementById(`SB-16-side-${movingToTopIdx}`);
  const elToMiddle = document.getElementById(`SB-16-side-${movingToMiddleIdx}`);

  // All three move at the same time
  sbClearSlotClasses(elExit);
  elExit.classList.add("sb-slot-exit-up");

  sbClearSlotClasses(elToTop);
  elToTop.classList.add("sb-slot-0");

  sbClearSlotClasses(elToMiddle);
  elToMiddle.classList.add("sb-slot-1");

  // ── 80ms: just enough for exit to start, then teleport + slide in ──
  setTimeout(() => {
    sbClearSlotClasses(elExit);
    elExit.classList.add("sb-slot-enter-bottom");  // instant jump to bottom

    void elExit.offsetHeight;  // force reflow

    sbClearSlotClasses(elExit);
    elExit.classList.add("sb-slot-2");  // slide into position immediately

    sbSlots = [movingToTopIdx, movingToMiddleIdx, exitingProductIdx];

    setTimeout(() => {
      if (onComplete) onComplete();
    }, 560);
  }, 80);  // ← almost no wait
}


function sbScrollLeft(onComplete) {
  // Move: slot2→exit-down, slot1→slot2, slot0→slot1, new item enters from top into slot0
  const exitingProductIdx  = sbSlots[2];   // bottom exits
  const movingToBottomIdx  = sbSlots[1];   // center → bottom
  const movingToCenterIdx  = sbSlots[0];   // top → center

  const elExit     = document.getElementById(`SB-16-side-${exitingProductIdx}`);
  const elToBottom = document.getElementById(`SB-16-side-${movingToBottomIdx}`);
  const elToCenter = document.getElementById(`SB-16-side-${movingToCenterIdx}`);

  // Exit bottom slot downward
  sbClearSlotClasses(elExit);
  elExit.classList.add("sb-slot-exit-down");  // ← new CSS class needed (Step 4)

  sbClearSlotClasses(elToBottom);
  elToBottom.classList.add("sb-slot-2");

  sbClearSlotClasses(elToCenter);
  elToCenter.classList.add("sb-slot-1");

  setTimeout(() => {
    sbClearSlotClasses(elExit);
    elExit.classList.add("sb-slot-enter-top"); // instant jump to top (new CSS, Step 4)
    void elExit.offsetHeight;
    sbClearSlotClasses(elExit);
    elExit.classList.add("sb-slot-0");

    sbSlots = [exitingProductIdx, movingToCenterIdx, movingToBottomIdx];

    setTimeout(() => { if (onComplete) onComplete(); }, 560);
  }, 80);
}
// ─────────────────────────────────────────────────────────────
// 7. RIGHT PANEL — MULTI-STEP SCROLL
//    If clicked item is 2 slots away, scroll twice sequentially
// ─────────────────────────────────────────────────────────────
function sbScrollToProduct(targetIndex, onAllDone) {
  const currentSlot = sbSlots.indexOf(targetIndex);

  if (currentSlot === 1) {
    if (onAllDone) onAllDone();
    return;
  }

  if (currentSlot === 2) {
    // Target is BELOW active → scroll forward (down)
    sbScrollRight(() => { if (onAllDone) onAllDone(); });
  } else if (currentSlot === 0) {
    // Target is ABOVE active → scroll backward (up) — REVERSE!
    sbScrollLeft(() => { if (onAllDone) onAllDone(); });
  }
}

// ─────────────────────────────────────────────────────────────
// 8. RIGHT PANEL — CLICK HANDLER
// ─────────────────────────────────────────────────────────────
function sbBindRightClicks() {
  SB_PRODUCTS.forEach((_, pIdx) => {
    const el = document.getElementById(`SB-16-side-${pIdx}`);
    if (!el) return;

    el.addEventListener("click", () => {
      if (sbAnimating) return;
      if (sbSlots[1] === pIdx) return; // already active (CENTER position)

      sbStopTimer();
      sbGoTo(pIdx);
      sbStartTimer();
    });
  });
}

// ─────────────────────────────────────────────────────────────
// 9. MAIN TRANSITION — GoTo
//    Exit left → scroll right → enter left
// ─────────────────────────────────────────────────────────────
function sbGoTo(targetIndex) {
  if (sbAnimating) return;
  sbAnimating = true;
  sbActive = targetIndex;

  // Start left panel exit AND right panel scroll at same time
  sbPlayExit(() => {
    // After exit, swap sources and play enter
    sbPlayEnter(SB_PRODUCTS[targetIndex]);
  });

  // Right panel scrolls simultaneously
  sbScrollToProduct(targetIndex, null);
}

// ─────────────────────────────────────────────────────────────
// 10. LEFT PANEL — EXIT
// ─────────────────────────────────────────────────────────────
function sbPlayExit(onComplete) {
  const reversed = [...SB_SEQ].reverse();
  const totalMs  = (reversed.length - 1) * EXIT_STAGGER + 320;

  reversed.forEach(({ id, exit }, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    setTimeout(() => {
      sbClearAnim(el);
      el.style.opacity = "";
      el.classList.add(exit);
      el.addEventListener("animationend", () => {
        sbClearAnim(el);
        el.classList.add("sb-anim"); // hide
      }, { once: true });
    }, i * EXIT_STAGGER);
  });

  setTimeout(onComplete, totalMs);
}

// ─────────────────────────────────────────────────────────────
// 11. LEFT PANEL — ENTER
// ─────────────────────────────────────────────────────────────
function sbPlayEnter(product) {
  // Swap image sources while hidden
  const map = [
    ["SB-16-container-image", "containerImg"],
    ["SB-16-text",            "nameImg"],
    ["SB-16-content",         "contentImg"],
    ["SB-16-top-icon",        "topIcon"],
    ["SB-16-bottom-icon",     "bottomIcon"],
    ["SB-16-height-icon",     "heightIcon"],
    ["SB-16-pcs-per-box",     "pcsIcon"],
  ];
  map.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.src = product[key];
  });

  // ── UPDATE LIGHTBOX LINK ──────────────────────────────
  const sbLink = document.getElementById("SB-16-360-link");
  if (sbLink && product.lightboxId) {
    sbLink.href = product.lightboxId;
  }
  // ──────────────────────────────────────────────────────

  SB_SEQ.forEach(({ id, enter, delay }) => {
    const el = document.getElementById(id);
    if (!el) return;
    setTimeout(() => {
      sbClearAnim(el);
      el.classList.remove("sb-anim");
      el.classList.add(enter);
      el.addEventListener("animationend", () => {
        sbClearAnim(el);
        el.style.opacity = "1";
      }, { once: true });
    }, delay);
  });

  // Unlock after full sequence
  const lastDelay = SB_SEQ[SB_SEQ.length - 1].delay + 600;
  setTimeout(() => { sbAnimating = false; }, lastDelay);
}
// ─────────────────────────────────────────────────────────────
// 12. HELPER — strip enter/exit animation classes
// ─────────────────────────────────────────────────────────────
function sbClearAnim(el) {
  [...el.classList]
    .filter(c => c.startsWith("sb-enter") || c.startsWith("sb-exit"))
    .forEach(c => el.classList.remove(c));
}

// ─────────────────────────────────────────────────────────────
// 13. AUTO-ADVANCE TIMER
// ─────────────────────────────────────────────────────────────
function sbStartTimer() {
  sbStopTimer();
  sbTimer = setInterval(() => {
    const next = (sbActive + 1) % SB_PRODUCTS.length;
    sbGoTo(next);
  }, 5000);
}

function sbStopTimer() {
  if (sbTimer) { clearInterval(sbTimer); sbTimer = null; }
}

// ─────────────────────────────────────────────────────────────
// 14. INIT
// ─────────────────────────────────────────────────────────────
function sbInit() {
  // Hide all left-panel elements
  SB_SEQ.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) el.classList.add("sb-anim");
  });

  // Setup right panel slots
  sbInitRightPanel();

  // Bind right image clicks
  sbBindRightClicks();

  // ── SET INITIAL LIGHTBOX LINK ─────────────────────────
  const sbLink = document.getElementById("SB-16-360-link");
  if (sbLink) {
    sbLink.href = SB_PRODUCTS[0].lightboxId;
  }
  // ──────────────────────────────────────────────────────

  // First enter animation
  setTimeout(() => sbPlayEnter(SB_PRODUCTS[0]), 120);

  // Start auto timer
  sbStartTimer();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", sbInit);
} else {
  sbInit();
}
// ****************************sweet box Container animation code end***************************************





// ****************************sweet box TE Container animation code Start***************************************


// ****************************sweet box TE Container animation code Start***************************************

const SBTE_PRODUCTS = [
  {
    id: "R-250-TE-JUMBO",
    lightboxId: "../lightBox/index.html#R-250-TE-JUMBO",
    containerImg: "../global assets/Images/Sweetbox-TE/R-250-TE-JUMBO/R-250-TE-JUMBO-container-img.webp",
    nameImg:      "../global assets/Images/Sweetbox-TE/R-250-TE-JUMBO/R-250-TE-JUMBO.svg",
    contentImg:   "../global assets/Images/Sweetbox-TE/R-250-TE-JUMBO/content.svg",
    topIcon:      "../global assets/Images/Sweetbox-TE/R-250-TE-JUMBO/top-icon.svg",
    bottomIcon:   "../global assets/Images/Sweetbox-TE/R-250-TE-JUMBO/bottom-icon.svg",
    heightIcon:   "../global assets/Images/Sweetbox-TE/R-250-TE-JUMBO/height-icon.svg",
    pcsIcon:      "../global assets/Images/Sweetbox-TE/R-250-TE-JUMBO/pcs-per-box-icon.svg",
  },
  {
    id: "SB-TE-250-G",
    lightboxId: "../lightBox/index.html#SB-TE-250-G",
    containerImg: "../global assets/Images/Sweetbox-TE/SB-TE-250-G/SB-TE-250-G-container-img.webp",
    nameImg:      "../global assets/Images/Sweetbox-TE/SB-TE-250-G/SB-TE-250-G.svg",
    contentImg:   "../global assets/Images/Sweetbox-TE/SB-TE-250-G/content.svg",
    topIcon:      "../global assets/Images/Sweetbox-TE/SB-TE-250-G/top-icon.svg",
    bottomIcon:   "../global assets/Images/Sweetbox-TE/SB-TE-250-G/bottom-icon.svg",
    heightIcon:   "../global assets/Images/Sweetbox-TE/SB-TE-250-G/height-icon.svg",
    pcsIcon:      "../global assets/Images/Sweetbox-TE/SB-TE-250-G/pcs-per-box-icon.svg",
  },
  {
    id: "R-500-TE-JUMBO",
    lightboxId: "../lightBox/index.html#R-500-TE-JUMBO",
    containerImg: "../global assets/Images/Sweetbox-TE/R-500-TE-JUMBO/R-500-TE-JUMBO-container-img.webp",
    nameImg:      "../global assets/Images/Sweetbox-TE/R-500-TE-JUMBO/R-500-TE-JUMBO.svg",
    contentImg:   "../global assets/Images/Sweetbox-TE/R-500-TE-JUMBO/content.svg",
    topIcon:      "../global assets/Images/Sweetbox-TE/R-500-TE-JUMBO/top-icon.svg",
    bottomIcon:   "../global assets/Images/Sweetbox-TE/R-500-TE-JUMBO/bottom-icon.svg",
    heightIcon:   "../global assets/Images/Sweetbox-TE/R-500-TE-JUMBO/height-icon.svg",
    pcsIcon:      "../global assets/Images/Sweetbox-TE/R-500-TE-JUMBO/pcs-per-box-icon.svg",
  },
  {
    id: "SB-TE-500-G",
    lightboxId: "../lightBox/index.html#SB-TE-500-G",
    containerImg: "../global assets/Images/Sweetbox-TE/SB-TE-500-G/SB-TE-500-G-container-img.webp",
    nameImg:      "../global assets/Images/Sweetbox-TE/SB-TE-500-G/SB-TE-500-G.svg",
    contentImg:   "../global assets/Images/Sweetbox-TE/SB-TE-500-G/content.svg",
    topIcon:      "../global assets/Images/Sweetbox-TE/SB-TE-500-G/top-icon.svg",
    bottomIcon:   "../global assets/Images/Sweetbox-TE/SB-TE-500-G/bottom-icon.svg",
    heightIcon:   "../global assets/Images/Sweetbox-TE/SB-TE-500-G/height-icon.svg",
    pcsIcon:      "../global assets/Images/Sweetbox-TE/SB-TE-500-G/pcs-per-box-icon.svg",
  },
  {
    id: "R-1000-TE-JUMBO",
    lightboxId: "../lightBox/index.html#R-1000-TE-JUMBO",
    containerImg: "../global assets/Images/Sweetbox-TE/R-1000-TE-JUMBO/R-1000-TE-JUMBO-container-img.webp",
    nameImg:      "../global assets/Images/Sweetbox-TE/R-1000-TE-JUMBO/R-1000-TE-JUMBO.svg",
    contentImg:   "../global assets/Images/Sweetbox-TE/R-1000-TE-JUMBO/content.svg",
    topIcon:      "../global assets/Images/Sweetbox-TE/R-1000-TE-JUMBO/top-icon.svg",
    bottomIcon:   "../global assets/Images/Sweetbox-TE/R-1000-TE-JUMBO/bottom-icon.svg",
    heightIcon:   "../global assets/Images/Sweetbox-TE/R-1000-TE-JUMBO/height-icon.svg",
    pcsIcon:      "../global assets/Images/Sweetbox-TE/R-1000-TE-JUMBO/pcs-per-box-icon.svg",
  },
  {
    id: "SB-TE-1000-G",
    lightboxId: "../lightBox/index.html#SB-TE-1000-G",
    containerImg: "../global assets/Images/Sweetbox-TE/SB-TE-1000-G/SB-TE-1000-G-container-img.webp",
    nameImg:      "../global assets/Images/Sweetbox-TE/SB-TE-1000-G/SB-TE-1000-G.svg",
    contentImg:   "../global assets/Images/Sweetbox-TE/SB-TE-1000-G/content.svg",
    topIcon:      "../global assets/Images/Sweetbox-TE/SB-TE-1000-G/top-icon.svg",
    bottomIcon:   "../global assets/Images/Sweetbox-TE/SB-TE-1000-G/bottom-icon.svg",
    heightIcon:   "../global assets/Images/Sweetbox-TE/SB-TE-1000-G/height-icon.svg",
    pcsIcon:      "../global assets/Images/Sweetbox-TE/SB-TE-1000-G/pcs-per-box-icon.svg",
  },
];

const SBTE_SEQ = [
  { id: "SBTE-container-image", enter: "sb-enter-fade",     exit: "sb-exit-fade",    delay: 0   },
  { id: "SBTE-text",            enter: "sb-enter-name",     exit: "sb-exit-name",    delay: 110 },
  { id: "SBTE-content",         enter: "sb-enter-content",  exit: "sb-exit-content", delay: 210 },
  { id: "SBTE-food-safe",       enter: "sb-enter-foodsafe", exit: "sb-exit-content", delay: 310 },
  { id: "SBTE-top-icon",        enter: "sb-enter-top",      exit: "sb-exit-top",     delay: 400 },
  { id: "SBTE-bottom-icon",     enter: "sb-enter-left",     exit: "sb-exit-left",    delay: 445 },
  { id: "SBTE-height-icon",     enter: "sb-enter-right",    exit: "sb-exit-right",   delay: 490 },
  { id: "SBTE-pcs-per-box",     enter: "sb-enter-bottom",   exit: "sb-exit-bottom",  delay: 535 },
  { id: "SBTE-iml-lid",         enter: "sb-enter-popup",    exit: "sb-exit-popup",   delay: 620 },
];

const SBTE_TOTAL        = SBTE_PRODUCTS.length;
const SBTE_EXIT_STAGGER = 38;

/* ── Circular order: always 0→1→2→3→4→5→0→1→… ─────────── */
let sbteRing    = [0, 1, 2, 3, 4, 5];   // fixed circular order
let sbteCenter  = 0;                      // product-index at center (slot-2)
let sbteAnimating = false;
let sbteTimer     = null;

const SBTE_SLOT_CLASSES = [
  "sbte-slot-0","sbte-slot-1","sbte-slot-2","sbte-slot-3","sbte-slot-4",
  "sbte-slot-exit-up","sbte-slot-exit-down",
  "sbte-slot-enter-bottom","sbte-slot-enter-top",
  "sbte-slot-hidden"
];

function sbteClearSlotClasses(el) {
  if (!el) return;
  SBTE_SLOT_CLASSES.forEach(c => el.classList.remove(c));
}

/* ── Helper: get 5 visible product indices centered on `center` ── */
function sbteGetVisible(center) {
  const arr = [];
  for (let offset = -2; offset <= 2; offset++) {
    arr.push((center + offset + SBTE_TOTAL) % SBTE_TOTAL);
  }
  return arr; // [slot0, slot1, slot2(active), slot3, slot4]
}

/* ── Helper: get the 1 hidden product index ───────────────────── */
function sbteGetHidden(center) {
  const vis = new Set(sbteGetVisible(center));
  for (let i = 0; i < SBTE_TOTAL; i++) {
    if (!vis.has(i)) return i;
  }
  return -1;
}

/* ── Apply slot classes based on current center ───────────────── */
function sbteApplySlots(center, skipTransition) {
  const visible = sbteGetVisible(center);

  // Disable transitions briefly if needed
  if (skipTransition) {
    for (let i = 0; i < SBTE_TOTAL; i++) {
      const el = document.getElementById(`SBTE-side-${i}`);
      if (el) el.style.transition = 'none';
    }
  }

  visible.forEach((prodIdx, slotIdx) => {
    const el = document.getElementById(`SBTE-side-${prodIdx}`);
    if (!el) return;
    sbteClearSlotClasses(el);
    el.classList.add(`sbte-slot-${slotIdx}`);
  });

  // Hide the one not visible
  const hiddenIdx = sbteGetHidden(center);
  if (hiddenIdx >= 0) {
    const el = document.getElementById(`SBTE-side-${hiddenIdx}`);
    if (el) {
      sbteClearSlotClasses(el);
      el.classList.add("sbte-slot-hidden");
    }
  }

  if (skipTransition) {
    // Force reflow then restore transitions
    document.getElementById(`SBTE-side-0`)?.offsetHeight;
    requestAnimationFrame(() => {
      for (let i = 0; i < SBTE_TOTAL; i++) {
        const el = document.getElementById(`SBTE-side-${i}`);
        if (el) el.style.transition = '';
      }
    });
  }

  sbteCenter = center;
}

/* ── INIT ─────────────────────────────────────────────────────── */
function sbteInitRightPanel() {
  sbteApplySlots(sbteCenter, true);
}

/* ══════════════════════════════════════════════════════════════
   SCROLL UP by N steps (content moves upward)
   - Top items exit UP
   - New items enter from BOTTOM
   ══════════════════════════════════════════════════════════════ */
function sbteScrollUpBy(steps, onComplete) {
  const oldCenter  = sbteCenter;
  const newCenter  = (sbteCenter + steps + SBTE_TOTAL) % SBTE_TOTAL;
  const oldVisible = sbteGetVisible(oldCenter);
  const newVisible = sbteGetVisible(newCenter);
  const oldSet     = new Set(oldVisible);
  const newSet     = new Set(newVisible);

  // Items that leave (were visible, now not)
  const exiting  = oldVisible.filter(idx => !newSet.has(idx));
  // Items that enter (weren't visible, now are)
  const entering = newVisible.filter(idx => !oldSet.has(idx));
  // Items that stay (visible in both)
  const staying  = newVisible.filter(idx => oldSet.has(idx));

  // 1. Exiting → animate out upward
  exiting.forEach(idx => {
    const el = document.getElementById(`SBTE-side-${idx}`);
    if (!el) return;
    sbteClearSlotClasses(el);
    el.classList.add("sbte-slot-exit-up");
  });

  // 2. Staying → slide to new slot position
  staying.forEach(idx => {
    const el = document.getElementById(`SBTE-side-${idx}`);
    if (!el) return;
    const newSlot = newVisible.indexOf(idx);
    sbteClearSlotClasses(el);
    el.classList.add(`sbte-slot-${newSlot}`);
  });

  // 3. Entering → instantly place below viewport (no transition)
  entering.forEach(idx => {
    const el = document.getElementById(`SBTE-side-${idx}`);
    if (!el) return;
    sbteClearSlotClasses(el);
    el.style.transition = 'none';
    el.classList.add("sbte-slot-enter-bottom");
  });

  // 4. After micro-delay, animate entering items to their slots
  setTimeout(() => {
    entering.forEach(idx => {
      const el = document.getElementById(`SBTE-side-${idx}`);
      if (!el) return;
      // Force reflow so the instant position is applied
      el.offsetHeight;
      el.style.transition = '';
      const newSlot = newVisible.indexOf(idx);
      sbteClearSlotClasses(el);
      el.classList.add(`sbte-slot-${newSlot}`);
    });

    // 5. After animation settles, clean up exiting
    setTimeout(() => {
      exiting.forEach(idx => {
        const el = document.getElementById(`SBTE-side-${idx}`);
        if (!el) return;
        sbteClearSlotClasses(el);
        el.classList.add("sbte-slot-hidden");
      });
      sbteCenter = newCenter;
      if (onComplete) onComplete();
    }, 550);
  }, 30);
}

/* ══════════════════════════════════════════════════════════════
   SCROLL DOWN by N steps (content moves downward)
   - Bottom items exit DOWN
   - New items enter from TOP
   ══════════════════════════════════════════════════════════════ */
function sbteScrollDownBy(steps, onComplete) {
  const oldCenter  = sbteCenter;
  const newCenter  = (sbteCenter - steps + SBTE_TOTAL) % SBTE_TOTAL;
  const oldVisible = sbteGetVisible(oldCenter);
  const newVisible = sbteGetVisible(newCenter);
  const oldSet     = new Set(oldVisible);
  const newSet     = new Set(newVisible);

  const exiting  = oldVisible.filter(idx => !newSet.has(idx));
  const entering = newVisible.filter(idx => !oldSet.has(idx));
  const staying  = newVisible.filter(idx => oldSet.has(idx));

  // 1. Exiting → animate out downward
  exiting.forEach(idx => {
    const el = document.getElementById(`SBTE-side-${idx}`);
    if (!el) return;
    sbteClearSlotClasses(el);
    el.classList.add("sbte-slot-exit-down");
  });

  // 2. Staying → slide to new slot position
  staying.forEach(idx => {
    const el = document.getElementById(`SBTE-side-${idx}`);
    if (!el) return;
    const newSlot = newVisible.indexOf(idx);
    sbteClearSlotClasses(el);
    el.classList.add(`sbte-slot-${newSlot}`);
  });

  // 3. Entering → instantly place above viewport (no transition)
  entering.forEach(idx => {
    const el = document.getElementById(`SBTE-side-${idx}`);
    if (!el) return;
    sbteClearSlotClasses(el);
    el.style.transition = 'none';
    el.classList.add("sbte-slot-enter-top");
  });

  // 4. After micro-delay, animate entering items to their slots
  setTimeout(() => {
    entering.forEach(idx => {
      const el = document.getElementById(`SBTE-side-${idx}`);
      if (!el) return;
      el.offsetHeight;
      el.style.transition = '';
      const newSlot = newVisible.indexOf(idx);
      sbteClearSlotClasses(el);
      el.classList.add(`sbte-slot-${newSlot}`);
    });

    // 5. Clean up
    setTimeout(() => {
      exiting.forEach(idx => {
        const el = document.getElementById(`SBTE-side-${idx}`);
        if (!el) return;
        sbteClearSlotClasses(el);
        el.classList.add("sbte-slot-hidden");
      });
      sbteCenter = newCenter;
      if (onComplete) onComplete();
    }, 550);
  }, 30);
}

/* ══════════════════════════════════════════════════════════════
   DETERMINE DIRECTION & STEPS FROM CLICK
   
   Example: visible = [5,6,1,2,3], center=1
   Click 3 (slot 4) → scroll UP by 2 steps
     → 5 exits up, 6 exits up, 4 enters bottom, 3 enters bottom (but 3 already there)
     → new visible = [1,2,3,4,5], center=3
   
   Click 5 (slot 0) → scroll DOWN by 2 steps  
     → 2 exits down, 3 exits down, 0 enters top
     → new visible = [3,4,5,0,1], center=5
   ══════════════════════════════════════════════════════════════ */

function sbteGetDirection(clickedIdx) {
  const visible = sbteGetVisible(sbteCenter);
  const slotPos = visible.indexOf(clickedIdx);

  if (slotPos !== -1) {
    // Clicked on a visible item
    if (slotPos < 2) {
      // Above center → scroll DOWN, steps = how far above center
      return { direction: "down", steps: 2 - slotPos };
    } else if (slotPos > 2) {
      // Below center → scroll UP, steps = how far below center
      return { direction: "up", steps: slotPos - 2 };
    }
    // slotPos === 2 means clicked on active, shouldn't reach here
    return { direction: "up", steps: 0 };
  }

  // Hidden item clicked — find shortest circular path
  const fwd = (clickedIdx - sbteCenter + SBTE_TOTAL) % SBTE_TOTAL;
  const bwd = (sbteCenter - clickedIdx + SBTE_TOTAL) % SBTE_TOTAL;

  if (fwd <= bwd) {
    return { direction: "up", steps: fwd };
  } else {
    return { direction: "down", steps: bwd };
  }
}

/* ── CLICK HANDLER ──────────────────────────────────────────── */
function sbteBindRightClicks() {
  SBTE_PRODUCTS.forEach((_, pIdx) => {
    const el = document.getElementById(`SBTE-side-${pIdx}`);
    if (!el) return;
    el.addEventListener("click", () => {
      if (sbteAnimating) return;
      if (sbteCenter === pIdx) return;
      sbteStopTimer();
      sbteGoTo(pIdx);
      sbteStartTimer();
    });
  });
}

/* ── GOTO ───────────────────────────────────────────────────── */
function sbteGoTo(targetIdx) {
  if (sbteAnimating) return;
  sbteAnimating = true;

  const { direction, steps } = sbteGetDirection(targetIdx);

  // Left panel exit → enter
  sbtePlayExit(() => {
    sbtePlayEnter(SBTE_PRODUCTS[targetIdx]);
  });

  // Right panel scroll
  if (direction === "up") {
    sbteScrollUpBy(steps, () => {});
  } else {
    sbteScrollDownBy(steps, () => {});
  }
}

/* ── LEFT PANEL EXIT ───────────────────────────────────────── */
function sbtePlayExit(onComplete) {
  const reversed = [...SBTE_SEQ].reverse();
  const totalMs  = (reversed.length - 1) * SBTE_EXIT_STAGGER + 320;

  reversed.forEach(({ id, exit }, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    setTimeout(() => {
      sbteClearAnim(el);
      el.style.opacity = "";
      el.classList.add(exit);
      el.addEventListener("animationend", () => {
        sbteClearAnim(el);
        el.classList.add("sbte-anim");
      }, { once: true });
    }, i * SBTE_EXIT_STAGGER);
  });

  setTimeout(onComplete, totalMs);
}

/* ── LEFT PANEL ENTER ──────────────────────────────────────── */
function sbtePlayEnter(product) {
  const map = [
    ["SBTE-container-image", "containerImg"],
    ["SBTE-text",            "nameImg"],
    ["SBTE-content",         "contentImg"],
    ["SBTE-top-icon",        "topIcon"],
    ["SBTE-bottom-icon",     "bottomIcon"],
    ["SBTE-height-icon",     "heightIcon"],
    ["SBTE-pcs-per-box",     "pcsIcon"],
  ];
  map.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.src = product[key];
  });

  const sbteLink = document.getElementById("SBTE-360-link");
  if (sbteLink && product.lightboxId) sbteLink.href = product.lightboxId;

  SBTE_SEQ.forEach(({ id, enter, delay }) => {
    const el = document.getElementById(id);
    if (!el) return;
    setTimeout(() => {
      sbteClearAnim(el);
      el.classList.remove("sbte-anim");
      el.classList.add(enter);
      el.addEventListener("animationend", () => {
        sbteClearAnim(el);
        el.style.opacity = "1";
      }, { once: true });
    }, delay);
  });

  const lastDelay = SBTE_SEQ[SBTE_SEQ.length - 1].delay + 600;
  setTimeout(() => { sbteAnimating = false; }, lastDelay);
}

/* ── CLEAR ANIM CLASSES ───────────────────────────────────── */
function sbteClearAnim(el) {
  [...el.classList]
    .filter(c => c.startsWith("sb-enter") || c.startsWith("sb-exit"))
    .forEach(c => el.classList.remove(c));
}

/* ── AUTO TIMER ───────────────────────────────────────────── */
function sbteStartTimer() {
  sbteStopTimer();
  sbteTimer = setInterval(() => {
    if (sbteAnimating) return;
    const nextCenter = (sbteCenter + 1) % SBTE_TOTAL;
    sbteGoTo(nextCenter);
  }, 5000);
}

function sbteStopTimer() {
  if (sbteTimer) { clearInterval(sbteTimer); sbteTimer = null; }
}

/* ── INIT ─────────────────────────────────────────────────── */
function sbteInit() {
  SBTE_SEQ.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) el.classList.add("sbte-anim");
  });

  sbteCenter = 0;
  sbteInitRightPanel();
  sbteBindRightClicks();

  const sbteLink = document.getElementById("SBTE-360-link");
  if (sbteLink) sbteLink.href = SBTE_PRODUCTS[0].lightboxId;

  setTimeout(() => sbtePlayEnter(SBTE_PRODUCTS[0]), 120);
  sbteStartTimer();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", sbteInit);
} else {
  sbteInit();
}

/* ── RESET ───────────────────────────────────────────────── */
function sbteReset() {
  sbteStopTimer();
  sbteCenter    = 0;
  sbteAnimating = false;
  sbteInitRightPanel();
  SBTE_SEQ.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) { sbteClearAnim(el); el.classList.add("sbte-anim"); el.style.opacity = ""; }
  });
  const sbteLink = document.getElementById("SBTE-360-link");
  if (sbteLink) sbteLink.href = SBTE_PRODUCTS[0].lightboxId;
  setTimeout(() => sbtePlayEnter(SBTE_PRODUCTS[0]), 120);
  sbteStartTimer();
}

// ****************************sweet box TE Container animation code end***************************************
// ****************************sweet box TE Container animation code end***************************************
