$('.toggler_icon').click(function() {
   $('.site_nav').toggleClass('active');
});
$(function() {
   $('.lazy').Lazy({
      afterLoad: function(element) {
         $(element).removeClass('loader');
      }
   });
});
$(".search_icon").click(function() {
   $(".search_form").toggleClass('active');
});
var swiper = new Swiper(".product_container", {
   spaceBetween: 30,
   slidesPerView: 'auto',
   loop: true,
   centeredSlides: true,
   autoplay: {
      delay: 5000,
   },
   speed: 500,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

$('.min-range').on("change", function() {
   var rangeValue = parseInt($(this).val());
   $(this).siblings().children("input[type='number']").val(rangeValue);

})
$('.range_number').submit(function(e) {
   e.preventDefault();
   let rangeNumber = $(this).children("input[type='number']").val();
   $(this).siblings("input[type='range']").val(rangeNumber);
});
$('.collection_sidebar_item h4').click(function() {
   $(this).siblings(".collection_sidebar_wrpr").slideToggle(100);
   $(this).parents(".collection_sidebar_item").siblings().children('.collection_sidebar_wrpr').slideUp(100);
});


var swiper = new Swiper(".single_product_main", {
   slidesPerView: 1,
   centeredSlides: true,
   spaceBetween: 20,
   speed: 500,
   zoom: true,
   loop: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   autoplay: {
      delay: 5000,
   },
   breakpoints: {
      500: {
         slidesPerView: 2,
      }
   }
});
let modal = `<div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
         <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <div class="modal_container flex items-center">
               <div class="modal_sidebar h-full text-capitalize text-center flex flex-column items-center gap-20 p-20">
                  <picture>
                     <img src="images/banners/modal_dis.jpg" alt="">
                  </picture>
               </div>
               <div class="modal_main flex flex-column gap-25 items-center justify-center text-center p-20">
                  <p class="modal_top_text text-black font-700 text-uppercase">enter your email below to unlock</p>
                  <p class="modal_center_text text-black font-400 text-capitalize">where should we send your 30% off?</p>
                  <form class="flex flex-column gap-5 w-full">
                     <input type="email" name="" id="" placeholder="Enter Your Email Here">
                     <input type="submit" value="GET MY $10 OFF">
                  </form>
                  <button type="button" class="close underline no_thanks" data-dismiss="modal">no thanks</button>
                  <p class="modal_bottom_text">First time reosterants only. •110 off on 125+ orders. and entering your email alsomakes you eligible to recetve future promotional emails.</p>
               </div>
            </div>
         </div>
      </div>
   </div>`
$(window).on("load", function() {
   // $("body").prepend(modal);
})


$(window).on('load', function() {
   $('#myModal').modal('show');
});
$(".check_field_field").blur(function() {
   $(this).val() != "" ? $(this).addClass("focused") : $(this).removeClass("focused");
});
$('.faq_items h4').click(function() {
   $(this).siblings('p').slideToggle();
});
$('.filter_btn').click(function() {
   $('.collection_sidebar').toggleClass('active');
});

$('.search_form input[type="text"]').bind('keyup', function() {
   var value = $(this).val();
   if (value != '') {
      $('.search_result').fadeIn(100);
      $('body').css({
         'overflow-y': 'hidden',
         'padding-right': '5px'
      });
   } else {
      $('.search_result').fadeOut(100);
      $('body').css({
         'overflow-y': 'auto',
         'padding-right': '0'
      });
   }
});

