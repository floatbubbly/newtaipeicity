/**** Counter ****/
jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
 });

/*** main-menu ***/
(function($) {
  $(".button-menu").on("click", function() {
    $(this).toggleClass("open");
    $(".main-menu").toggleClass("nav-open");
    $(".main-menu ul").toggleClass("animate");
  });

  $(".main-menu ul li a ").on("click", function() {
    $(".main-menu").removeClass("nav-open");

  });

})(jQuery);



/*** slick ***/
$(".MainSlider").slick({
    /*dots: true,*/
    arrows: true,
    adaptiveHeight: true,
    autoplay: true
});
$(".sport-info-slider").slick({
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    autoplay: false
});
$(".construction-slider").slick({
    dots: true,
    autoplay: true,
    arrows: false
});
$(".sm-slider").slick({
    dots: false,
    autoplay: true,
    arrows: false
});




/***  text animate ***/
$('.ml3').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function(el, i) {
      return 150 * (i+1)
    }
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



/*** select style ***/
    $('select').change(function(){ // color select box default values
    $('select').css('color', '#4267b2');
    
    $('.br').css('display', 'none');
    $('.raq').css('display', 'none');
    $('.rfp').css('display', 'none');
    var $request = $('.request option:selected').val();
    if ( $request == '0' ) { // display different info for different requests
      $('.raq').css('display', 'block');
    } else if ( $request == '1' ) {
      $('.rfp').css('display', 'block');
    } else if ( $request == '2' ) {
      $('.br').css('display', 'block');
    } else { }
  });




/*** 點擊按鈕滑動到指定區塊***/
$(document).ready(function (){
    $(".menu1").click(function (){
        $('html, body').animate({
            scrollTop: $(".traffic-block").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $(".menu2").click(function (){
        $('html, body').animate({
            scrollTop: $(".construction-block").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $(".menu3").click(function (){
        $('html, body').animate({
            scrollTop: $(".art-block").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $(".menu4").click(function (){
        $('html, body').animate({
            scrollTop: $(".social-block").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $(".menu5").click(function (){
        $('html, body').animate({
            scrollTop: $(".honor-block").offset().top
        }, 2000);
    });
});

/**** accordion ****/
//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function(){
    var d = document,
    accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
    setAria,
    setAccordionAria,
    switchAccordion,
    touchSupported = ('ontouchstart' in window),
    pointerSupported = ('pointerdown' in window);
  
  skipClickDelay = function(e){
    e.preventDefault();
    e.target.click();
  }

        setAriaAttr = function(el, ariaType, newProperty){
        el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function(el1, el2, expanded){
        switch(expanded) {
      case "true":
        setAriaAttr(el1, 'aria-expanded', 'true');
        setAriaAttr(el2, 'aria-hidden', 'false');
        break;
      case "false":
        setAriaAttr(el1, 'aria-expanded', 'false');
        setAriaAttr(el2, 'aria-hidden', 'true');
        break;
      default:
                break;
        }
    };
//function
switchAccordion = function(e) {
  console.log("triggered");
    e.preventDefault();
    var thisAnswer = e.target.parentNode.nextElementSibling;
    var thisQuestion = e.target;
    if(thisAnswer.classList.contains('is-collapsed')) {
        setAccordionAria(thisQuestion, thisAnswer, 'true');
    } else {
        setAccordionAria(thisQuestion, thisAnswer, 'false');
    }
    thisQuestion.classList.toggle('is-collapsed');
    thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');
    
    thisAnswer.classList.toggle('animateIn');
    };
    for (var i=0,len=accordionToggles.length; i<len; i++) {
        if(touchSupported) {
      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
    }
    if(pointerSupported){
      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
    }
    accordionToggles[i].addEventListener('click', switchAccordion, false);
  }
})();

/***** ScrollTrigger *****/


window.counter = function () {
  // this refers to the html element with the data-scroll-showCallback tag
  var span = this.querySelector('span');
  var current = parseInt(span.textContent);

  span.textContent = current + 1;
};

  document.addEventListener('DOMContentLoaded', function () {
    var trigger = new ScrollTrigger ({
        addHeight: true
    });
});

/************* Pie chart *****************/
// http://www.chartjs.org/docs/#doughnut-pie-chart-introduction

$(function() {

  $('.canvas').on('inview', function(event, isInView) {
    if (isInView) {
      var data = [
        {
            value: 300,
            color:"#fec3de",
            /*highlight: "#FF5A5E",
            label: "Red"*/
        },
        {
            value: 80,
            color: "#cccccc",
            /*highlight: "#5AD3D1",
            label: "Green"*/
        },
        {
            value: 70,
            color: "#fca2cb",
            /*highlight: "#FFC870",
            label: "Yellow"*/
        }
    ];


    var ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx).Pie(data);
    } else {
      var data = [
        {
            value: 300,
            color:"#fec3de",
            /*highlight: "#FF5A5E",
            label: "Red"*/
        },
        {
            value: 80,
            color: "#cccccc",
            /*highlight: "#5AD3D1",
            label: "Green"*/
        },
        {
            value: 70,
            color: "#fca2cb",
            /*highlight: "#FFC870",
            label: "Yellow"*/
        }
    ];

    }
  });

});


/*****************barchart inview *********************/
$(function() {
$('.chart__bar').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('chart__bar-ani');
    } else {
      /*$(this).removeClass('fadeInUp');*/
      $(this).removeClass('chart__bar-ani');
    }
  });

});


/*****************map tab**********************/
$( function() {
    $( "#tabs" ).tabs();
  } );


/***************poptab**************************/
var TabBlock = {
  s: {
    animLen: 200
  },
  
  init: function() {
    TabBlock.bindUIActions();
    TabBlock.hideInactive();
  },
  
  bindUIActions: function() {
    $('.tabBlock-tabs').on('click', '.tabBlock-tab', function(){
      TabBlock.switchTab($(this));
    });
  },
  
  hideInactive: function() {
    var $tabBlocks = $('.tabBlock');
    
    $tabBlocks.each(function(i) {
      var 
        $tabBlock = $($tabBlocks[i]),
        $panes = $tabBlock.find('.tabBlock-pane'),
        $activeTab = $tabBlock.find('.tabBlock-tab.is-active');
      
      $panes.hide();
      $($panes[$activeTab.index()]).show();
    });
  },
  
  switchTab: function($tab) {
    var $context = $tab.closest('.tabBlock');
    
    if (!$tab.hasClass('is-active')) {
      $tab.siblings().removeClass('is-active');
      $tab.addClass('is-active');
   
      TabBlock.showPane($tab.index(), $context);
    }
   },
  
  showPane: function(i, $context) {
    var $panes = $context.find('.tabBlock-pane');
   
    // Normally I'd frown at using jQuery over CSS animations, but we can't transition between unspecified variable heights, right? If you know a better way, I'd love a read it in the comments or on Twitter @johndjameson
    $panes.slideUp(TabBlock.s.animLen);
    $($panes[i]).slideDown(TabBlock.s.animLen);
  }
};

$(function() {
  TabBlock.init();
});