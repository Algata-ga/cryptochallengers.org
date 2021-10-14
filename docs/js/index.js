$(window).on("load",function(){
    $(".loader").fadeOut("slower");
  });
         
         
         
         addEventListener("load", function() {
              setTimeout(hideURLbar, 0);
          }, false);
  
          function hideURLbar() {
              window.scrollTo(0, 1);
          }
  
  
          $(function() {
            var header = $(".bg-dark");
          
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
                if (scroll >= 50) {
                    header.addClass("scrolled");
                } else {
                    header.removeClass("scrolled");
                }
            });
          
        });
  
        var typed = new Typed('#typed', {
          
          
          strings: ['#WeAreChallengers'],
          smartBackspace: true ,// Default value
          startDelay: 10,
          typeSpeed:100,
          backSpeed: 100,
          startDelay:500,
          loop:true,
          
        });
        
        
  
  //contact form
  
  /*validation
  $(document).ready(function(){
    $("#submit-form").validate({
      rules:{
        name:{
          required:true,
        },
        email:{
          email:true
        },
        message:{
          required:true,
          minlength:10
        }
        
      }
    })
  })
  */
  
  /*form-submition
  $("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbymM0eObSYynWca7LC3jmVAm3gD-A2qOQXG4n8YsWaqY28gJVXb7E1zOPuwLDhuT_F6/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")
  
        }
    })
  })
  */
  $(document).ready(function(){
    $("#submit-form").validate({
      rules:{
        name:{
          required:true,
        },
        email:{
          email:true
        },
        message:{
          required:true,
          minlength:10
        }
      },
  
      submitHandler: function(form) {
        $.ajax({
          url:"https://script.google.com/macros/s/AKfycbw7zHeNRhilb3V3bQ9A9hbNeCVv9HCA026AIUPSLh1HcgI4LPblDRL8HIPIbfI_qlrC/exec",
          data:$("#submit-form").serialize(),
          method:"post",
          success:function (response){
              alert("Form submitted successfully")
              window.location.reload()
              //window.location.href="https://google.com"
          },
          error:function (err){
              alert("Something Error")
  
          }
        });
      }
  
  
    });
  })
  
  
  

  $('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
      0:{
        items:1
      },
      500:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  }) 
  
  
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  });

  
  
  
  
  //animation
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();