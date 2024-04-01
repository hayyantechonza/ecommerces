$(function() {
  // Type Code
  $(".search").submit((event) => {
    event.preventDefault();
  });

  $(".search_input").on('keyup', () => {
    event.preventDefault();
    // Act on the event
    var searchValue = event.target.value;
    var chnageKeyword = $('.search_result h4 span').text(searchValue);
    if (searchValue !== "") {
      $(".search_result").show();
    } else {
      $(".search_result").hide();
    }
  });

  $('.search_result_close').click(() => {
    // Act on the event
    $(".search_result").hide();
    $(".search_input").val("");
  });

  $(".menu_btn").click((e) => {
    e.stopPropagation();
    $(".navbar").toggleClass("active");
  });

  $(".navbar").click((e) => {
    var getNav = e.target;
    if (!$(getNav).closest('.menu').length && !$(getNav).hasClass('menu_btn')) {
      $(".navbar").removeClass("active");
    }
  });

  $(".search_icon").click(() => {
    $(".search").addClass("active")
  });

  $(".search").click((e) => {
    var getNav = e.target;
    if (!$(getNav).closest('.search_box').length && !$(getNav).hasClass('search_result')) {
      $(".search").removeClass("active");
    }
  });

  var heroSlider = new Swiper('.hero_slider', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(".modal").modal("show");

  var quickViewSlider = new Swiper('.quick_view_slider', {
    slidesPerView: 1,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});