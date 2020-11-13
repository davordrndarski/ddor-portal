/* Kolaboracija */
$('#kolaboracija').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout:3000,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1200:{
            items:4
        }
    }
})

/* Oglasi Slajder */
$('#oglasi_slide').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  navText: [
    '<i class="fas fa-angle-left" aria-hidden="true"></i>',
    '<i class="fas fa-angle-right" aria-hidden="true"></i>'
  ],
  responsive:{
      0:{
          items:1
      }
  }
})

/* Glavna Strana Slider */
$(document).ready(function() {
    var bigimage = $("#big");
    var thumbs = $("#thumbs");
    //var totalslides = 10;
    var syncedSecondary = true;
  
    bigimage
      .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        '<i class="fas fa-angle-left" aria-hidden="true"></i>',
        '<i class="fas fa-angle-right" aria-hidden="true"></i>'
      ]
    })
      .on("changed.owl.carousel", syncPosition);
  
    thumbs
      .on("initialized.owl.carousel", function() {
      thumbs
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
      .owlCarousel({
      items: 3,
      dots: true,
      nav: true,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 1,
      responsiveRefreshRate: 100
    })
      .on("changed.owl.carousel", syncPosition2);
  
    function syncPosition(el) {

      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
  
      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }
      //to this
      thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = thumbs.find(".owl-item.active").length - 1;
      var start = thumbs
      .find(".owl-item.active")
      .first()
      .index();
      var end = thumbs
      .find(".owl-item.active")
      .last()
      .index();
  
      if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }
  
    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        bigimage.data("owl.carousel").to(number, 100, true);
      }
    }
  
    thumbs.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      bigimage.data("owl.carousel").to(number, 300, true);
    });
  });
  

  /* fancyBox */
  $(".fancybox").fancybox();
  
/* Mobile */
	$('#nav-icon1').click(function(){
    $(this).toggleClass('open');
    $('body').toggleClass('overflow');
    $('.middle_links').toggleClass('show');
  });

  /* Modal Pop Up Third Section */
  $('#third #pohvali_kolegu').click(function(){
    $('#third #modal_pohvali_kolegu').toggleClass('open_kolega');
    $('body').toggleClass('overflow');
  });
  
	$('.close_pohvala').click(function(){
    $('#modal_pohvali_kolegu').toggleClass('open_kolega');
    $('body').toggleClass('overflow');
  });

  /* Search */
	$('.search').click(function(){
    $('.input_search').toggleClass('open_search');
  });
  $('.fa-times').click(function(){
    $('.input_search').removeClass('open_search');
  });
  

  /* Mobile Accordion Menu */

	if (window.innerWidth < 768) {
    $('.middle_links ul li.dropdown').click(function(){
      $(this).find('ul.drop_level_one').slideToggle();
    });
    $('.middle_links ul li.dropdown .main_link').click(function(e) {
        e.preventDefault();
    });
	}

  // Accordion

  $(".set > a, .set-1 a, .set-2 a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content, .content-1, .content-2")
        .slideUp(200);
      $(".set > a i, .set-1 > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i, .set-1 > a i, .set-2 a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a, .set-1 > a").removeClass("active");
      $(this).addClass("active");
      $(".content, .content-1, .content-2").slideUp(200);
      $(this)
        .siblings(".content, .content-1, .content-2")
        .slideDown(200);
    }
  });
        
// Tabs
$('.tabs-nav a').on('click', function(event){
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-stage div').hide();
  $($(this).attr('href')).show();
});
// Prvi tab aktivan po defoltu
$('.tabs-stage div').hide();
$('.tabs-stage div:first').show();
$('.tabs-nav li:first').addClass('tab-active');



// Tabovi Listanje

$('ul.tabs-listanje li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.tabs-listanje li').removeClass('current');
  $('.tab-content-listanje').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
})

$('ul.tabs-listanje-inner li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.tabs-listanje-inner li').removeClass('current');
  $('.tab-content-listanje-inner').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
})




/* Pop Up */

	$('#trigger_popup').click(function(e){
    e.preventDefault();
    $('#pop_up_confirmation').toggleClass('open_conf');
    $('body').toggleClass('overflow');
  });
 
	$('span.close_me').click(function(){
    $('#pop_up_confirmation').removeClass('open_conf');
  });


  


	// $('#prijavi_ideju').click(function(){
  //   $('#modal_prijavi_ideju').toggleClass('open_ideja');
  //   $('body').toggleClass('overflow');
  // });
  
	// $('#modal_prijavi_ideju .close').click(function(){
  //   $('#modal_prijavi_ideju').toggleClass('open_ideja');
  //   $('body').toggleClass('overflow');
  // });
  
	// $('.person-pop-holder .close_person').click(function(){
  //   $('.person-pop').toggleClass('open_person');
  //   $('body').toggleClass('overflow');
  // });

  // $('.hover-gallery .click_loop').click(function(){
  //   $('.foto-pop-up').toggleClass('open_foto');
  //   $('body').toggleClass('overflow');
  // });
  
	// $('.okey-close').click(function(){
  //   $('.foto-pop-up').toggleClass('open_foto');
  //   $('body').toggleClass('overflow');
  // });