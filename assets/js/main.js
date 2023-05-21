/*=============== SHOW MENU ===============*/


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("NAVCAR");
    if (this.scrollY >= 50) header.classList.add("show__nav");
    else header.classList.remove("show__nav");
  }
  window.addEventListener("scroll", scrollHeader);
/*=============== POPULAR SWIPER ===============*/
let POPULAR_SWIPER = new Swiper(".popler_container", {
  loop:true,
  spaceBetween:24,
  slidesPerView:'auto',
  grabCursor:true,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

      breakpoints: {
 
        768: {
          slidesPerView:3,
         
        },
        1024: {
          
          spaceBetween:48,
        },
      },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
  selectors: {
      target: '.featured__card'
  },
  animation: {
      duration: 300
  }
});

/* Link active featured */ 
const linkFeatured =document.querySelectorAll('.featured__item')
function activeFeatured(){
  linkFeatured.forEach(l=> l.classList.remove("active-featured"))
  this.classList.add("active-featured")
}
linkFeatured.forEach(l=>l.addEventListener('click',activeFeatured))
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
