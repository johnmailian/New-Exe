
$(document).ready(function () {

    $('.works__btns button, .works__btns a').on('focus', function (e) {
      $(this).parents('.works__element').addClass('works__element--active');
    });
  
    $('.works__btns button, .works__btns a').on('blur', function (e) {
      $(this).parents('.works__element').removeClass('works__element--active');
    });

    function moveProgressBar(prgs, prgsLine, tooltip, animationLength = 1500) {
      const progressElement = $(prgs);
      progressElement.each(function (value, item) {
        $(item).find(prgsLine).animate({
          width: item.dataset.progressPercent+'%'
        }, animationLength);
        $(item).find(tooltip).show(animationLength);
      });
    }
    let animate = true;


  $(window).scroll(function (){
    
    if($('.skills').offset().top <= $(window).scrollTop() +150){ if(animate) {
      moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
    }
    animate = false;
      
    }
  });
  $("#carousel1").owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: true,
    items: 5,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        680:{
            items:3
        },
        980:{
          items:5
      }
    }
  });
  
  });

  // $(document).ready(function(){
  //   $(".owl-carousel").owlCarousel();
  // });