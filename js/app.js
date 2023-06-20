async function postData(url, data = {}) {
    // Default options are marked with *
    const response = await fetch(url)
        .then(response => response.json())
        .then(data => {
           
            console.log(data); 
            
        })
        .catch(error => {
            
            console.error('Error:', error);
        });
    }
postData('http://146.185.209.31:9191/api/business_automation/');
 
$(document).ready(function(){
// open modals
    var Links = $('.b-service-btn').map(function() {
        var link = $(this).attr('href');
         $(this).on( "click", function() {
            $(`.b-modal${link}`).removeClass('d-none');
            $(`.b-modal${link}`).addClass('d-block');
          });
          $('.b-close-btn').on( "click", function() {
            $(`.b-modal${link}`).removeClass('d-block');
            $(`.b-modal${link}`).addClass('d-none');
          });
          $('.header__menu').find('li').on( "click", function() {
            $(`.b-modal.d-block`).map(function() {
                $(this).removeClass('d-block');
                $(this).addClass('d-none');
            })
          });
      });
        $('.c-serviceOrder').on( "click", function() {
            var link = $(this).attr('href');
            $('#orderService').removeClass('d-none');
            $('#orderService').addClass('d-block');
            $('.b-close-btn').on( "click", function() {
                $('#orderService').removeClass('d-block');
                $('#orderService').addClass('d-none ');
            });
        
        });
       

        // show hamburger menu
 
        if($(window).width() < 1085){
            $(".b-mobile-header").removeClass('d-none').addClass('d-block');
            $(".b-mobile-menu").removeClass('d-none').addClass('d-block');
           
            $("header .wrapper").removeClass('d-block').addClass('d-none');
         }
         $('#hamburgerMenu').click(function() {
            $(this).toggleClass('active');
            $('.b-mobile-menu').toggleClass('c-menu-shown')
          });
         
        

    //плавующий хедер

    const onScrollHeader = () => { 
        const header = $('header, .b-mobile-header') 
        let prevScroll = $(window).scrollTop() 
        let currentScroll 
        $(window).scroll(() => { 
          currentScroll = $(window).scrollTop() 
          const headerHidden = () => header.hasClass('header_hidden')
          if (currentScroll > prevScroll && !headerHidden()) { 
            header.addClass('header_hidden') 
          }
          if (currentScroll < prevScroll && headerHidden()) { 
            header.removeClass('header_hidden') 
          }
          prevScroll = currentScroll;
          
        })
       
      }
      if ($(window).width() < 1085) { 
        $('header').addClass('d-none') 
      }
      onScrollHeader();
    
 // smooth scroll
    $(document).on('click', 'a[href^="#"]', function (event) {
        
        event.preventDefault();
        $('.b-mobile-menu').toggleClass('c-menu-shown');
        $('#hamburgerMenu').toggleClass('active');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });



    //slick - slider
    $('.reviews_body').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        appendArrows: $('.reviews_body'),
        prevArrow: '<div class="b-btn__slider_prev"> <svg width="31" height="141" viewBox="0 0 31 141" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.327 141L0 70.5L26.327 0L31 12.5137L9.34607 70.5L31 128.486L26.327 141Z" fill="#5B48EE"/></svg></div>',
        nextArrow: '<div class="b-btn__slider_next"><svg width="31" height="141" viewBox="0 0 31 141" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.67304 141L31 70.5L4.67304 0L0 12.5137L21.6539 70.5L0 128.486L4.67304 141Z" fill="#5B48EE"/></svg></div>',
    });
    


    //обработчик форм
    $("#contactUs").submit(function(e) {
            e.preventDefault(); 
            $('.l-form_primary-btn').addClass( "d-none" )
            $('.l-form_loading').removeClass( "d-none" ).addClass( "d-block" )
        
            $(this).find('input[type=submit], button[type=submit]').prop('disabled', true);
                var form = $(this);
                var actionUrl = form.attr('action');
          
            $.ajax({
                type: form.attr('method'),
                url: actionUrl,
                data: form.serialize(),
                success: function(data)
                {
                    $('.l-form_loading').removeClass( "d-block" ).addClass( "d-none " )
                   
                    $('.l-form_success_msg').removeClass( "d-none" )
                    $('.l-form_success_msg').addClass( "d-block" )
                    $('.l-form_primary-btn').prop('disabled', false)
                    $('#contactUs')[0].reset();
                }
                // проверки на ошибки
            }); 
        });
        $("#contactUsFooter").submit(function(e) {
            e.preventDefault(); 
            $('.l-form_primary-btn').addClass( "d-none" )
            $('.l-form_loading').removeClass( "d-none" ).addClass( "d-block" )
        
            $(this).find('input[type=submit], button[type=submit]').prop('disabled', true);
                var form = $(this);
                var actionUrl = form.attr('action');
          
            $.ajax({
                type: form.attr('method'),
                url: actionUrl,
                data: form.serialize(),
                success: function(data)
                {
                    $('.l-form_loading').removeClass( "d-block" ).addClass( "d-none " )
                   
                    $('.l-form_success_msg').removeClass( "d-none" )
                    $('.l-form_success_msg').addClass( "d-block" )
                    $('.l-form_primary-btn').prop('disabled', false)
                    $('#contactUsFooter')[0].reset();
                }
                // проверки на ошибки
            }); 
        });
});