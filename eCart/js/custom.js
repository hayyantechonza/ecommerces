$(".cart, .cart_svg").click(function(e) {
   $('.cart_sidebar').toggleClass('active');
});

$('.menu_toggler').focus(function() {
   $('.menu').addClass('active')
});
$('.menu_toggler').blur(function() {
   $('.menu').removeClass('active')
});
$('.menu_icon ').click(function() {
   $('.menu').removeClass('active')
});

$('.search_input').focus(function() {
   $('.search_result').fadeIn(100);
});

$('.search_input').blur(function() {
   $('.search_result').fadeOut(100);
});
// $(window).scroll(function(event) {
//     let $headerHeight = $('header').height();
//     if ($(document).scrollTop() > $headerHeight) {
//         $('header').addClass("fixed");
//     } else if ($(document).scrollTop() < 0.1) {
//         $('header').removeClass("fixed")
//     }
// });
$(function() {
   $('.lazy').Lazy({
      afterLoad: function(element) {
         $(element).removeClass('loader');
      }
   });
});
var swiper = new Swiper(".brows_cate_container", {
   spaceBetween: 10,
   slidesPerView: 'auto',
   loop: true,
   zoom: true,
   speed: 800,
   navigation: {
      nextEl: ".swiper-button-next.cat_slider",
      prevEl: ".swiper-button-prev.cat_slider",
   },
   autoplay: {
      delay: 2000,
   }
});

$('.toast').fadeOut(-1);

$(".filteration_item").click(function() {
   $('.products_sidebar').fadeToggle(200);
});
$(".filter_wrpr button").click(function() {
   $(this).siblings('.filter_item').slideToggle(200);
   $(this).parent().siblings().find(".filter_item").slideUp(200);
});
$(".filter_btn").click(function() {
   $(".product_filter").css('right', '0px');
});
$(".filter_btn_close").click(function() {
   $(".product_filter").css('right', '-320px');
});


var swiper = new Swiper(".product_slide_img", {
   watchSlidesProgress: true,
   speed: 800,
   spaceBetween: 10,
   direction: "horizontal",
   loop: true,
   slidesPerView: 4,
   breakpoints: {
      601: {
         direction: "vertical",
         slidesPerView: "auto",
      },
   },
});
var swiper2 = new Swiper(".product_main_img", {
   spaceBetween: 10,
   zoom: true,
   speed: 800,
   loop: true,
   thumbs: {
      swiper: swiper,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});
$(".product_all_desc_item h4").click(function() {
   $(this).siblings("article").slideToggle();
   $(this).parent().siblings().find('article').slideUp();
   $(this).toggleClass("active");
   $(this).parent().siblings().find("h4").removeClass("active");
});
let count = 1;
$('.count').text(count <= 9 ? "0" + count : count);
$('.plus').click(function() {
   count++;
   let $formate = count <= 9 ? "0" + count : count;
   $('.count').text($formate);
});
$('.minus').click(function() {
   if (count <= 0) {
      return
   } else {
      count--;
      let $formate = count <= 9 ? "0" + count : count;
      $('.count').text($formate);
   }

});


var swiper = new Swiper(".single_pro", {
   speed: 500,
   loop: true,
   spaceBetween: 25,
   slidesPerView: "auto",
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

$(".payment_item h4").click(function() {
   $(this).parent().addClass("active");
   $(this).parent().siblings().removeClass("active");
   $(this).siblings(".payment_form_prent").slideDown();
   $(this).parent().siblings().find(".payment_form_prent").slideUp();
});


$('.checkout_nav_item').click(function(e) {
   $(this).addClass('active').siblings().removeClass('active');
   $('.checkout_wrpr').removeClass("active");
   var getIndext = $(this).attr('data-id');
   $('.checkout_wrpr[id="' + getIndext + '"]').addClass('active');
   e.preventDefault();
});

$('.checkout_form_btn.next').click(function(e) {
   $('.checkout_wrpr.active').next().addClass("active");
   $('.checkout_wrpr.active').prev().removeClass("active");
});
$('.checkout_form_btn.prev').click(function(e) {
   $('.checkout_wrpr.active').prev().addClass("active");
   $('.checkout_wrpr.active').next().removeClass("active");
});


$(document).ready(function() {
   var CurrentPage = $(".currentPage").val();

   if (CurrentPage == 'cart-page') {
      $('select').niceSelect();
   } else {
      return;
   }
});

var swiper = new Swiper(".event_main", {
   slidesPerView: 2,
   grid: {
      rows: 3,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 2000,
   },
   breakpoints: {
      1101: {
         slidesPerView: 5,
         grid: {
            rows: 2,
         },
      },
      993: {
         slidesPerView: 4,
         grid: {
            rows: 2,
         },
      },
      769: {
         slidesPerView: 3,
         grid: {
            rows: 2,
         },
      },
      600: {
         slidesPerView: 4,
         grid: {
            rows: 3,
         },
      },
      500: {
         slidesPerView: 3,
         grid: {
            rows: 3,
         },
      },
   },
});
$(".show_pas").click(function() {

   $(".pass").children("input").attr('type', 'text');
   $(this).removeClass("active").siblings("svg").addClass("active");
});
$(".hide_pass").click(function() {

   $(".pass").children("input").attr('type', 'password');
   $(".show_pass").addClass("active");
   $(this).removeClass("active").siblings("svg").addClass("active");
});
$('.login_form').submit(function(e) {
   let formError = $('.error');
   if (inputVal.val() == '') {
      $(formError).css('display', 'block');
      e.preventDefault()
   } else {
      alert("form submit")
   }
});
var swiper = new Swiper(".our_brand_container", {
   slidesPerView: "auto",
   spaceBetween: 30,
   centeredSlides: true,
   grabCursor: true,
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 5000,
   },
});



var swiper = new Swiper(".deal_with_cat", {
   slidesPerView: "auto",
   spaceBetween: 30,
   grabCursor: true,
   loop: true,
   centeredSlides: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
   },
});