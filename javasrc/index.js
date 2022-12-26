// alert("javascript started");
//for search bar
let searchform=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()  =>{

    searchform.classList.toggle('active');
    //  searchform.classList.remove('actve');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}


// for cart bar

let shoppingCart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = ()  =>{

    shoppingCart.classList.toggle('active');
    searchform.classList.remove('actve');
    // shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}

// login form

 let loginForm=document.querySelector('.login-form');
 document.querySelector('#login-btn').onclick = ()  =>{

     loginForm.classList.toggle('active');
     searchform.classList.remove('actve');
     shoppingCart.classList.remove('active');
    //  loginForm.classList.remove('active');
     navbar.classList.remove('active');

 }

 let navbar=document.querySelector('.navbar');
 document.querySelector('#menu-btn').onclick = ()  =>{

     navbar.classList.toggle('active');
     searchform.classList.remove('actve');
     shoppingCart.classList.remove('active');
     loginForm.classList.remove('active');
    //  navbar.classList.remove('active');

 }


 window.onscroll= () =>{
    searchform.classList.remove('actve');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
 }

 var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disbaleOnInteraction:false,
    },
    centeredSlides:true,
   
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 20,
      },
      1020: {
        slidesPerView: 3,
        // spaceBetween: 40,
      },
     
    },
  });

//   var swiper = new Swiper(".review-slider", {
//     loop:true,
//     spaceBetween: 20,
//     autoplay:{
//         delay:7500,
//         disbaleOnInteraction:false,
//     },
//     centeredSlides:true,
   
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
        
//       },
//       768: {
//         slidesPerView: 2,
//         // spaceBetween: 20,
//       },
//       1020: {
//         slidesPerView: 3,
//         // spaceBetween: 40,
//       },
     
//     },
//   });
