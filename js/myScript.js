// Header Sticky Nav jQuery
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 60) {
          $(".header_top").css({"background":"#fff","position":"sticky","top":"0","box-shadow": "rgba(0, 0, 0, 0.07) 0px 0px 4px 4px"});
        }
  
        else{
            $(".header_top").css({"background":"#f4f4f4","box-shadow": "none"});  	
        }
    })
  });


// Header Drop Down Menu jQuery
$(document).ready(function(){
    $(".nav_menu_box .show_list_items,.show_drop_down_menu_container_first").mouseover(function(){
        $('.show_drop_down_menu_container_first').show();
        $('.show_drop_down_menu_container_second').hide();
    });
    $(".show_drop_down_menu_container_first").mouseout(function(){
        $('.show_drop_down_menu_container_first').hide();
    });
  });


  $(document).ready(function(){
    $(".nav_menu_box .show_list_items_second,.show_drop_down_menu_container_second").mouseover(function(){
        $('.show_drop_down_menu_container_second').show();
        $('.show_drop_down_menu_container_first').hide();
    });
    $(".show_drop_down_menu_container_second").mouseout(function(){
        $('.show_drop_down_menu_container_second').hide();
    });
  });




// Four Text and Image  Tab jQuery

$(document).ready(function(){   
 $('#store_setup_box').toggleClass('certified_shopify_active');
    $('.certified_shopify_rightBox_one').toggleClass('certified_shopify_rightBox_active');
    
  // first box show

 $('#store_setup_box').on({
        "mouseover" : function(){
            $('#store_setup_box').addClass('certified_shopify_active');
            $('.certified_shopify_rightBox_one').addClass('certified_shopify_rightBox_active');
            $('.certified_shopify_rightBox_one img').css('transform','scale(0.9)');
            $('.certified_shopify_rightBox_two').removeClass('certified_shopify_rightBox_active');
            $('.certified_shopify_rightBox_three').removeClass('certified_shopify_rightBox_active');
            $('.certified_shopify_rightBox_four').removeClass('certified_shopify_rightBox_active');
            $('#shopify_theme_development').removeClass('certified_shopify_active');
      },
            
     "mouseleave" : function(){
                // $('#store_setup_box').removeClass('certified_shopify_active');
                $('.certified_shopify_rightBox_one').addClass('certified_shopify_rightBox_active');
                },
           
           });


// second box show

$('#shopify_theme_development').on({
    "mouseover" : function(){
      
        $('#shopify_theme_development').addClass('certified_shopify_active');
        $('.certified_shopify_rightBox_two img').css('transform','scale(0.9)');
        $('.certified_shopify_rightBox_two').addClass('certified_shopify_rightBox_active');
        $('.certified_shopify_rightBox_one').removeClass('certified_shopify_rightBox_active');
        $('.certified_shopify_rightBox_three').removeClass('certified_shopify_rightBox_active');
        $('.certified_shopify_rightBox_four').removeClass('certified_shopify_rightBox_active');
        $('#store_setup_box').removeClass('certified_shopify_active');
        $('#shopify_app_development').removeClass('certified_shopify_active');
        $('#shopify_mobile_application').removeClass('certified_shopify_active');
        },
        
        "mouseleave" : function(){
            // $('#shopify_theme_development').removeClass('certified_shopify_active');
        $('.certified_shopify_rightBox_two').addClass('certified_shopify_rightBox_active');
            },
       
       });
    
 
    
// three box show
    $('#shopify_app_development').on({
        "mouseover" : function(){
            $('#shopify_app_development').addClass('certified_shopify_active');
            $('.certified_shopify_rightBox_three img').css('transform','scale(1.0)');
            $('.certified_shopify_rightBox_three').addClass('certified_shopify_rightBox_active');
            $('.certified_shopify_rightBox_one').removeClass('certified_shopify_rightBox_active');
            $('.certified_shopify_rightBox_two').removeClass('certified_shopify_rightBox_active');
            $('.certified_shopify_rightBox_four').removeClass('certified_shopify_rightBox_active');
            $('#store_setup_box').removeClass('certified_shopify_active');
            $('#shopify_theme_development').removeClass('certified_shopify_active');
            $('#shopify_mobile_application').removeClass('certified_shopify_active');
            },
            
            "mouseleave" : function(){
                // $('#shopify_app_development').removeClass('certified_shopify_active');
                $('.certified_shopify_rightBox_three').addClass('certified_shopify_rightBox_active');
                },
        
        });

// four box show

        $('#shopify_mobile_application').on({

         "mouseover" : function(){
            $('#shopify_mobile_application').addClass('certified_shopify_active');
            $('.certified_shopify_rightBox_four img').css('transform','scale(0.8)');
            $('.certified_shopify_rightBox_four').addClass('certified_shopify_rightBox_active');
            $('.certified_shopify_rightBox_one').removeClass('certified_shopify_rightBox_active');
            $('.certified_shopify_rightBox_two').removeClass('certified_shopify_rightBox_active');
            $('.certified_shopify_rightBox_three').removeClass('certified_shopify_rightBox_active');
            $('#store_setup_box').removeClass('certified_shopify_active');
            $('#shopify_app_development').removeClass('certified_shopify_active');
            $('#shopify_theme_development').removeClass('certified_shopify_active');
           
            },
            
            "mouseleave" : function(){
            // $('#shopify_mobile_application').removeClass('certified_shopify_active');
            $('.certified_shopify_rightBox_four').addClass('certified_shopify_rightBox_active');
                },

            });


});


// mobile drawer js start

var drawer = function () {
    if (!Element.prototype.closest) {
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      }
      Element.prototype.closest = function (s) {
        var el = this;
        var ancestor = this;
        if (!document.documentElement.contains(el)) return null;
        do {
          if (ancestor.matches(s)) return ancestor;
          ancestor = ancestor.parentElement;
        } while (ancestor !== null);
        return null;
      };
    }
    var settings = {
      speedOpen: 50,
      speedClose: 350,
      activeClass: 'is-active',
      visibleClass: 'is-visible',
      selectorTarget: '[data-drawer-target]',
      selectorTrigger: '[data-drawer-trigger]',
      selectorClose: '[data-drawer-close]',

    };


    var toggleccessibility = function (event) {
      if (event.getAttribute('aria-expanded') === 'true') {
        event.setAttribute('aria-expanded', false);
      } else {
        event.setAttribute('aria-expanded', true);
      }
    };


    var openDrawer = function (trigger) {
      var target = document.getElementById(trigger.getAttribute('aria-controls'));
      target.classList.add(settings.activeClass);
      document.documentElement.style.overflow = 'hidden';
      toggleccessibility(trigger);


      setTimeout(function () {
        target.classList.add(settings.visibleClass);
      }, settings.speedOpen);
    };

    var closeDrawer = function (event) {
      var closestParent = event.closest(settings.selectorTarget),
        childrenTrigger = document.querySelector('[aria-controls="' + closestParent.id + '"');
      closestParent.classList.remove(settings.visibleClass);
      document.documentElement.style.overflow = '';
      toggleccessibility(childrenTrigger);
      setTimeout(function () {
        closestParent.classList.remove(settings.activeClass);
      }, settings.speedClose);
    };
    var clickHandler = function (event) {
      var toggle = event.target,
        open = toggle.closest(settings.selectorTrigger),
        close = toggle.closest(settings.selectorClose);


      if (open) { openDrawer(open); }
      if (close) { closeDrawer(close); }
      if (open || close) { event.preventDefault(); }
    };


    var keydownHandler = function (event) {
      if (event.key === 'Escape' || event.keyCode === 27) {
        var drawers = document.querySelectorAll(settings.selectorTarget),
          i;
        for (i = 0; i < drawers.length; ++i) {
          if (drawers[i].classList.contains(settings.activeClass)) {
            closeDrawer(drawers[i]);
          }
        }
      }
    };

    document.addEventListener('click', clickHandler, false);
    document.addEventListener('keydown', keydownHandler, false);
};

drawer();
