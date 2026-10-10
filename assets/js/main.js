;(function($){

$(document).ready(function(){

//========== POPUP AREA ============= //
$(".click-here").on('click', function() {
  $(".custom-model-main").addClass('model-open');
}); 
$(".close-btn, .bg-overlay").click(function(){
  $(".custom-model-main").removeClass('model-open');
});

//========== PAGE PROGRESS STARTS ============= // 
  var progressPath = document.querySelector(".progress-wrap path");
  if (progressPath) {
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
  }
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
//========== PAGE PROGRESS STARTS ============= // 

//========== VIDEO POPUP STARTS ============= //
   if ($(".popup-youtube").length > 0) {
    $(".popup-youtube").magnificPopup({
    type: "iframe",
    });
    }
//========== VIDEO POPUP ENDS ============= //
AOS.init;
AOS.init({disable: 'mobile'});

//========== NICE SELECT ============= //
$('select').niceSelect();

});
//========== COUNTER UP============= //
const ucounter = $('.counter');
if (ucounter.length > 0) {
 ucounter.countUp();  
};
//========== TESTIMONIAL AREA ============= //
// testimonial //
$('.all-content-testimonial').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    items:10,
    navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>",],
    autoplay:true,
    smartSpeed:2000,
    autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
    0:{
      items:1,                
    },
    600:{
      items:1,
    },
    1000:{
      items:1,
    }
    }
});

$('.area2-testimonial').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    items:10,
    navText: ["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>",],
    autoplay:true,
    rtl:true,
    smartSpeed:2000,
    autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
    0:{
      items:1,                
    },
    600:{
      items:1,
    },
    1000:{
      items:1,
    }
    }
});

//========== PRELOADER ============= //
$(window).on("load", function (event) {
  setTimeout(function () {
    $(".preloader-parent").fadeToggle();
  }, 200);
});
//========== PRELOADER AREA ============= //

//========== CURSOR AREA ============= //
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})
document.addEventListener('click', () => {
cursor.classList.add("expand");
setTimeout(() => {
cursor.classList.remove("expand");
}, 500)
})

//========== GSAP AREA ============= //

// GSAP TEXT ANIMATION //

if ($('.text-anime-style-1').length) {
  let staggerAmount 	= 0.05,
    translateXValue = 0,
    delayValue 		= 0.5,
     animatedTextElements = document.querySelectorAll('.text-anime-style-1');
  
  animatedTextElements.forEach((element) => {
    let animationSplitText = new SplitText(element, { type: "chars, words" });
      gsap.from(animationSplitText.words, {
      duration: 1,
      delay: delayValue,
      x: 20,
      autoAlpha: 0,
      stagger: staggerAmount,
      scrollTrigger: { trigger: element, start: "top 85%" },
      });
  });		
}

if ($('.text-anime-style-2').length) {				
  let	 staggerAmount 		= 0.05,
     translateXValue	= 20,
     delayValue 		= 0.5,
     easeType 			= "power2.out",
     animatedTextElements = document.querySelectorAll('.text-anime-style-2');
  
  animatedTextElements.forEach((element) => {
    let animationSplitText = new SplitText(element, { type: "chars, words" });
      gsap.from(animationSplitText.chars, {
        duration: 1,
        delay: delayValue,
        x: translateXValue,
        autoAlpha: 0,
        stagger: staggerAmount,
        ease: easeType,
        scrollTrigger: { trigger: element, start: "top 85%"},
      });
  });		
}

if ($('.text-anime-style-3').length) {		
  let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
  
   animatedTextElements.forEach((element) => {
    if (element.animation) {
      element.animation.progress(1).kill();
      element.split.revert();
    }
    element.split = new SplitText(element, {
      type: "lines,words,chars",
      linesClass: "split-line",
    });
    gsap.set(element, { perspective: 400 });

    gsap.set(element.split.chars, {
      opacity: 0,
      x: "50",
    });

    element.animation = gsap.to(element.split.chars, {
      scrollTrigger: { trigger: element,	start: "top 90%" },
      x: "0",
      y: "0",
      rotateX: "0",
      opacity: 1,
      duration: 1,
      ease: Back.easeOut,
      stagger: 0.02,
    });
  });		
}


// Keep document-flow and scroll-triggered effects synchronized with the live layout.
(function () {
  let refreshFrame = null;
  let resizeTimer = null;

  const sectionSelector = [
    ".all-section-area",
    ".header-section-area",
    ".header-textarea",
    ".socila-links-area",
    ".about-boxareas",
    ".about-boxarea",
    "#home",
    "#about",
    "#service",
    "#skills",
    "#portfolio",
    "#feedback",
    "#blog",
    "#contact",
    ".about-section-area",
    ".about-textarea",
    ".pera-content",
    ".list-area",
    ".skills-section-area",
    ".portfolio-section-area",
    ".progress-one_leftbox"
  ].join(", ");

  function updatePageProgress() {
    const progressPath = document.querySelector(".progress-wrap path");
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();
    const scrollableHeight = Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );
    const scrollTop = window.scrollY || window.pageYOffset || 0;
    const progress = scrollableHeight > 0
      ? pathLength - (scrollTop * pathLength) / scrollableHeight
      : pathLength;

    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = progress;
  }

  function refreshLayout() {
    if (refreshFrame !== null) {
      window.cancelAnimationFrame(refreshFrame);
    }

    refreshFrame = window.requestAnimationFrame(function () {
      refreshFrame = null;

      // Read the live document geometry after content, fonts, images, or
      // responsive layout changes have been applied.
      updatePageProgress();

      if (window.ScrollTrigger && typeof window.ScrollTrigger.refresh === "function") {
        window.ScrollTrigger.refresh();
      }

      if (window.AOS) {
        if (typeof window.AOS.refreshHard === "function") {
          window.AOS.refreshHard();
        } else if (typeof window.AOS.refresh === "function") {
          window.AOS.refresh();
        }
      }
    });
  }

  function scheduleLayoutRefresh() {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(refreshLayout, 120);
  }

  // Expose the same reusable refresh for any future content updates.
  window.refreshLayout = refreshLayout;

  window.addEventListener("load", refreshLayout);
  window.addEventListener("resize", scheduleLayoutRefresh, { passive: true });
  window.addEventListener("orientationchange", scheduleLayoutRefresh, { passive: true });
  window.addEventListener("scroll", updatePageProgress, { passive: true });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(refreshLayout);
  }

  document.querySelectorAll("img").forEach(function (image) {
    if (!image.complete) {
      image.addEventListener("load", scheduleLayoutRefresh, { once: true });
      image.addEventListener("error", scheduleLayoutRefresh, { once: true });
    }
  });

  const layoutRoot = document.querySelector(".all-section-area") || document.body;

  if ("ResizeObserver" in window) {
    const layoutObserver = new ResizeObserver(scheduleLayoutRefresh);
    const observedElements = new Set([layoutRoot]);

    document.querySelectorAll(sectionSelector).forEach(function (element) {
      observedElements.add(element);
    });

    observedElements.forEach(function (element) {
      layoutObserver.observe(element);
    });
  }

  // Also detect text/DOM edits that change a section's size without resizing the viewport.
  if ("MutationObserver" in window && layoutRoot) {
    const contentObserver = new MutationObserver(scheduleLayoutRefresh);
    contentObserver.observe(layoutRoot, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }

  refreshLayout();
})();


})(jQuery);


