/* ======= start typed js animation ==========*/
var typed = new Typed(".type-auto", {
    strings: ["Developer", "Designer" , "Larry Daniels"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });

/* !======= ============== start counter =========== =========*/

var nums = document.querySelectorAll(".content-item .num");
var section = document.querySelector(".counter");
var started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - window.innerHeight / 2) {
    if (!started) {
      nums.forEach((num) => startCount(num));
      started = true;
    }
  }
};

function startCount(el) {
  var goal = parseInt(el.dataset.goal);
  var duration = 2000; 
  var step = Math.max(1, Math.ceil(goal / (duration / 20))); 
  
  var count = setInterval(() => {
    var current = parseInt(el.textContent);
    el.textContent = current + step > goal ? goal : current + step;
    if (parseInt(el.textContent) >= goal) {
      clearInterval(count);
      el.textContent = goal; 
    }
  }, 20); 
}


/* !======= ============== End counter =========== =========*/
/* !======= ============== chnage color of navbar =========== =========*/
window.addEventListener("scroll", function () {

  const navbar = document.querySelector(".my-nav");
  const aboutSection = document.querySelector("#about");


  const aboutPosition = aboutSection.offsetTop;


  if (window.scrollY >= aboutPosition) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// =============== chnage color navbar  ==========

window.addEventListener("resize", function () {
  const navbar = document.querySelector(".my-nav");
  if (window.innerWidth <= 991) {
    navbar.classList.add("small-screen");
  } else {
    navbar.classList.remove("small-screen");
  }
});

window.dispatchEvent(new Event('resize'));


document.querySelector(".navbar-toggler").addEventListener("click", function () {
  const navbar = document.querySelector(".my-nav");
  navbar.classList.toggle("dropdown-open");
});

// ======================================

// ====================  grow progress  ================== 


document.addEventListener("DOMContentLoaded", function () {
  const progressSections = document.querySelectorAll('.progress');
  const aboutSection = document.getElementById('about'); 
  let hasAnimated = false; 

  
  const animateProgress = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      progressSections.forEach(progress => {
          const value = progress.getAttribute('aria-valuenow');
          const progressBar = progress.querySelector('.progress-bar');
          const targetWidth = value; 
          let width = 0;

          const interval = setInterval(() => {
              if (width >= targetWidth) {
                  clearInterval(interval);
              } else {
                  width += 2; 
                  if (width > targetWidth) width = targetWidth; 
                  progressBar.style.width = width + '%';
                  progressBar.setAttribute('aria-valuenow', width);
              }
          }, 10);  
      });
  };


  window.addEventListener('scroll', () => {
      const sectionRect = aboutSection.getBoundingClientRect(); 
      if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
          animateProgress(); 
      }
  });
});

// ================== loading screen =============

window.addEventListener("load", function() {

  setTimeout(function() {
    
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("main-content").style.display = "block";

    
      if (typeof bootstrap !== 'undefined' && bootstrap.ScrollSpy) {
          const scrollSpyElement = document.querySelector('[data-bs-spy="scroll"]');
          if (scrollSpyElement) {
              new bootstrap.ScrollSpy(scrollSpyElement, {
                  target: '#navbar', 
                  offset: 100
              });
          }
      }
  }, 700);
});


