const HOST = location.protocol + '//' + location.host;

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

async function postData(url, data = {}) {
    const response = await fetch(url)
        .then(response => response.json())
        .then(data => {
           
           
            function putInsideServiceHTML(a,b,c,d,e,f,g) {
                var result_right = '';
                var result_left = '';
                if(a !== ""){
                    d.innerHTML = a;
                }
                if(b !== ""){
                    e.innerHTML = b
                }
                if(c.length !== 0 ){
                    if(c.length <= 11 ){ 
                        for (var i = 0; i < c.length; i++) {
                            result_left += "<li>" + c[i] + "</li>";
                            
                        }
                        f.innerHTML = result_left;
                    }
                    else if (c.length > 11) {
                        for (var k = 0; k < 11; k++) {
                            result_left += "<li>" + c[k] + "</li>";
                            
                        }
                        f.innerHTML = result_left;
                        for (var i = 11; i < c.length; i++) {
                            result_right += "<li>" + c[i] + "</li>";
                            
                        }
                        g.innerHTML += "<ul>" + result_right + "</ul>";
                    }
                    
                }
            }
         
           let mainKey = Object.keys(data)[0];
            switch(mainKey) {
                case 'business_automation':
                    const business_automation = () => {
                        if (data['business_automation'].length !== 0) {
                            function maxID() {
                                var IDarr = [];
                                
                                for(var j = 0; j < data['business_automation'].length; j++) {
                                    IDarr.push(data['business_automation'][j]['id']);
                                }
                                return (IDarr.length - 1);

                            }
                           
                            const business_automation = data.business_automation[maxID()];
                            const title = business_automation['title'];
                            const description = business_automation['description'];
                            const UList = business_automation['points'];

                            var titleHTML = document.querySelector('#businessAutomatisation .b-modal-title ');
                            var descriptionHTML = document.querySelector('#businessAutomatisation .b-modal-description');
                            var UListHTML = document.querySelector('#businessAutomatisation .col-lg-7 ul');
                            var rightColumn = document.querySelector('#businessAutomatisation .col-lg-5');

                            putInsideServiceHTML(title,description,UList,titleHTML,descriptionHTML,UListHTML,rightColumn)
                          
                        }
                        else {return;}
                    }
                    business_automation();
                    break;
                case 'main_page':
                    const main_page = () => {
                        if (data['main_page'].length !== 0 ) {
                            function maxID() {
                                var IDarr = [];
                                
                                for(var j = 0; j < data['main_page'].length; j++) {
                                    IDarr.push(data['main_page'][j]['id']);
                                }
                                return (IDarr.length - 1);

                            }

                            var result_right = '';
                            var result_left = '';
                            const main_page = data.main_page[maxID()];
                            const title = main_page['title']; //a
                            const description = main_page['description']; //b
                            const UList = main_page['points']; //c

                            var titleHTML = document.querySelector('h1'); //d
                            var descriptionHTML = document.querySelector('.b-mainArticle .b-mainArticle__content #description'); //e
                            var UListLeft = document.querySelector('#experts .b-article #UListLeft'); //f
                            var UListRight = document.querySelector('#experts .b-article #UListRight'); //g
                           
                            
                            var result_right = '';
                            var result_left = '';
                            if (title && title !== "") {
                                titleHTML.innerHTML = title;
                              }
                              if (description && description !== "") {
                                descriptionHTML.innerHTML = description;
                              }
                           
                            if(UList.length !== 0 ){
                                var ListLengthToDevide = UList.length - UList.length % 2
                                var ListRight = ListLengthToDevide / 2
                                var ListLeft = UList.length - ListRight

                                for (var i = 0; i < ListRight; i++) {
                                    result_right += '<li>' + UList[i] + '</li>'
                                }
                                for (var i = ListRight; i < UList.length; i++) {
                                    result_left += '<li>' + UList[i] + '</li>'
                                }
                                UListLeft.innerHTML = result_left;
                                UListRight.innerHTML = result_right;
                            }

                          
                        }
                        else {return;}
                    }
                    main_page();
                    break;
                case 'review':
                    const review = () => {
                        if (data['review'].length !== 0) {
                           var reviewsResult = '';
                            const reviewList = data.review;
                            for (var item of reviewList) {
                                const reviewTitle = item['company']; //a
                                const reviewText = item['review']; //b
                                reviewsResult += `<div class="b-article__review_body"><img src="/img/review_frame.svg" class="review-frame"> <div class="b-article__review_title">
                                                    ${reviewTitle}
                                                    </div>
                                                    <div class="b-article__review_text">
                                                    ${reviewText}
                                                    </div>
                                                    </div>`
                            }
                           
                            var reviewsBodyHTML = document.querySelector('#reviews .reviews_body'); //f
                            reviewsBodyHTML.innerHTML = reviewsResult;
                          
                        }
                        else {return;}
                    }
                    review();
                    $('.reviews_body').slick('refresh');
                   break;
                case 'server_outsourcing':
                    const server_outsourcing = () => {
                        if (data['server_outsourcing'].length !== 0) {
                            function maxID() {
                                var IDarr = [];
                                
                                for(var j = 0; j < data['server_outsourcing'].length; j++) {
                                    IDarr.push(data['server_outsourcing'][j]['id']);
                                }
                                return (IDarr.length - 1);

                            }
                           
                            const server_outsourcing = data.server_outsourcing[maxID()];
                            const title = server_outsourcing['title'];
                            const description = server_outsourcing['description'];
                            const UList = server_outsourcing['points'];

                            var titleHTML = document.querySelector('#outsourcingServers .b-modal-title ');
                            var descriptionHTML = document.querySelector('#outsourcingServers .b-modal-description');
                            var UListHTML = document.querySelector('#outsourcingServers .col-lg-7 ul');
                            var rightColumn = document.querySelector('#outsourcingServers .col-lg-5');

                            putInsideServiceHTML(title,description,UList,titleHTML,descriptionHTML,UListHTML,rightColumn)

                          
                        }
                        else {return;}
                    }
                    server_outsourcing();
                    break;
                case 'virtualization':
                    const virtualization = () => {
                        if (data['virtualization'].length !== 0) {
                            function maxID() {
                                var IDarr = [];
                                
                                for(var j = 0; j < data['virtualization'].length; j++) {
                                    IDarr.push(data['virtualization'][j]['id']);
                                }
                                return (IDarr.length - 1);

                            }
                            
                            const virtualization = data.virtualization[maxID()];
                            const title = virtualization['title'];                                              //a
                            const description = virtualization['description'];                                  //b
                            const UList = virtualization['points'];                                             //c

                            var titleHTML = document.querySelector('#virtualisation .b-modal-title ');          //d
                            var descriptionHTML = document.querySelector('#virtualisation .b-modal-description');//e
                            var UListHTML = document.querySelector('#virtualisation .col-lg-7 ul');             //f
                            var rightColumn = document.querySelector('#virtualisation .col-lg-5');              //g

                            putInsideServiceHTML(title,description,UList,titleHTML,descriptionHTML,UListHTML,rightColumn)
                          
                        }
                        else {return;}
                    }
                    virtualization();
                    break;
                case 'computer_monitoring':
                    const computer_monitoring = () => {
                        if (data['computer_monitoring'].length !== 0) {
                            function maxID() {
                                var IDarr = [];
                                
                                for(var j = 0; j < data['computer_monitoring'].length; j++) {
                                    IDarr.push(data['computer_monitoring'][j]['id']);
                                }
                                return (IDarr.length - 1);

                            }
                            
                            const computer_monitoring = data.computer_monitoring[maxID()];
                            const title = computer_monitoring['title'];                                              //a
                            const description = computer_monitoring['description'];                                  //b
                            const UList = computer_monitoring['points'];                                             //c

                            var titleHTML = document.querySelector('#PCSupport .b-modal-title ');          //d
                            var descriptionHTML = document.querySelector('#PCSupport .b-modal-description');//e
                            var UListHTML = document.querySelector('#PCSupport .col-lg-7 ul');             //f
                            var rightColumn = document.querySelector('#PCSupport .col-lg-5');              //g

                            putInsideServiceHTML(title,description,UList,titleHTML,descriptionHTML,UListHTML,rightColumn)
                          
                        }
                        else {return;}
                    }
                    computer_monitoring();
                    break;
                case 'video_surveillance':
                    const video_surveillance = () => {
                        if (data['video_surveillance'].length !== 0) {
                            function maxID() {
                                var IDarr = [];
                                
                                for(var j = 0; j < data['video_surveillance'].length; j++) {
                                    IDarr.push(data['video_surveillance'][j]['id']);
                                }
                                return (IDarr.length - 1);

                            }
                            
                            const video_surveillance = data.video_surveillance[maxID()];
                            const title = video_surveillance['title'];                                              //a
                            const description = video_surveillance['description'];                                  //b
                            const UList = video_surveillance['points'];                                             //c

                            var titleHTML = document.querySelector('#video .b-modal-title ');          //d
                            var descriptionHTML = document.querySelector('#video .b-modal-description');//e
                            var UListHTML = document.querySelector('#video .col-lg-7 ul');             //f
                            var rightColumn = document.querySelector('#video .col-lg-5');              //g

                            putInsideServiceHTML(title,description,UList,titleHTML,descriptionHTML,UListHTML,rightColumn)
                          
                        }
                        else {return;}
                    }
                    video_surveillance();
                    break;
                case 'maintenance_1C':
                    const maintenance_1C = () => {
                        if (data['maintenance_1C'].length !== 0) {
                            function maxID() {
                                var IDarr = [];
                                
                                for(var j = 0; j < data['maintenance_1C'].length; j++) {
                                    IDarr.push(data['maintenance_1C'][j]['id']);
                                }
                                return (IDarr.length - 1);

                            }
                            
                            const maintenance_1C = data.maintenance_1C[maxID()];
                            const title = maintenance_1C['title'];                                              //a
                            const description = maintenance_1C['description'];                                  //b
                            const UList = maintenance_1C['points'];                                             //c

                            var titleHTML = document.querySelector('#maintenance_1C .b-modal-title');          //d
                            var descriptionHTML = document.querySelector('#maintenance_1C .b-modal-description');//e
                            var UListHTML = document.querySelector('#maintenance_1C .col-lg-7 ul');             //f
                            var rightColumn = document.querySelector('#maintenance_1C .col-lg-5');              //g

                            putInsideServiceHTML(title,description,UList,titleHTML,descriptionHTML,UListHTML,rightColumn)
                          
                        }
                        else {return;}
                    }
                    maintenance_1C();
                    break;
                case 'contacts':
                    const contacts = () => {
                        if (data['contacts'].length !== 0) {
                            function maxID() {
                                var IDarr = [];
                                
                                for(var j = 0; j < data['contacts'].length; j++) {
                                    IDarr.push(data['contacts'][j]['id']);
                                }
                                return (IDarr.length - 1);
                                                        }
                            var result = '';
                            const contacts = data.contacts[maxID()].contacts;
                            for (let i = 0; i < contacts.length; i++) {
                                result += contacts[i] + "<br>";
                            }
                            const contactsElement =  document.querySelector('.b-article_contacts_content');
                            contactsElement.innerHTML = result;
        
                            if (data.contacts[maxID()].email !== undefined) {
                                const email = data.contacts[maxID()].email
                                document.querySelector('.b-article_contacts_content a[href^="mailto"]').innerHTML = `<a href="mailto:${email}">${email}</a>`;
                            }
                            if (data.contacts[maxID()].phone !== undefined) {
                                const phone = data.contacts[maxID()].phone
                                document.querySelector('.b-article_contacts_content a[href^="tel"]').innerHTML = `<a href="tel:${phone}">${phone}</a>`;
                            }
                           
                            if (data.contacts[maxID()].adress !== undefined) {
                                const adress = data.contacts[maxID()].adress
                                document.querySelector('.b-article_contacts_content #adress').innerHTML = `<a href="#" id="adress">${adress}</a>`;
                            }
                        }
                        else {return;}
                    }
                    contacts();
                    break;
                case 'maintenance_telephony':
                    const maintenance_telephony = () => {
                        if (data['maintenance_telephony'].length !== 0) {
                            function maxID() {
                                var IDarr = [];
                                
                                for(var j = 0; j < data['maintenance_telephony'].length; j++) {
                                    IDarr.push(data['maintenance_telephony'][j]['id']);
                                }
                                return (IDarr.length - 1);

                            }
                            
                            const maintenance_telephony = data.maintenance_telephony[maxID()];
                            const title = maintenance_telephony['title'];                                              //a
                            const description = maintenance_telephony['description'];                                  //b
                            const UList = maintenance_telephony['points'];                                             //c

                            var titleHTML = document.querySelector('#phoneSupport .b-modal-title ');          //d
                            var descriptionHTML = document.querySelector('#phoneSupport .b-modal-description');//e
                            var UListHTML = document.querySelector('#phoneSupport .col-lg-7 ul');             //f
                            var rightColumn = document.querySelector('#phoneSupport .col-lg-5');              //g

                            putInsideServiceHTML(title,description,UList,titleHTML,descriptionHTML,UListHTML,rightColumn)
                          
                        }
                        else {return;}
                    }
                    maintenance_telephony();
                    break;
                case 'network_equipment':
                    const network_equipment = () => {
                        if (data['network_equipment'].length !== 0) {
                            function maxID() {
                                var IDarr = [];
                                
                                for(var j = 0; j < data['network_equipment'].length; j++) {
                                    IDarr.push(data['network_equipment'][j]['id']);
                                }
                                return (IDarr.length - 1);

                            }
                            
                            const network_equipment = data.network_equipment[maxID()];
                            const title = network_equipment['title'];                                              //a
                            const description = network_equipment['description'];                                  //b
                            const UList = network_equipment['points'];                                             //c

                            var titleHTML = document.querySelector('#setUpNetwork .b-modal-title ');          //d
                            var descriptionHTML = document.querySelector('#setUpNetwork .b-modal-description');//e
                            var UListHTML = document.querySelector('#setUpNetwork .col-lg-7 ul');             //f
                            var rightColumn = document.querySelector('#setUpNetwork .col-lg-5');              //g

                            putInsideServiceHTML(title,description,UList,titleHTML,descriptionHTML,UListHTML,rightColumn)
                          
                        }
                        else {return;}
                    }
                    network_equipment();
                    break;
               

            }
           
        })
            .catch(error => {
                document.querySelector('body').innerHTML = "<div style='width:100vw; height:100vh; background-color:#000000!important; color:#FFFFFF!important; position:fixed!important; top:0;left:0; z-index:9999999'><div class='container mb-5 mt-5'><div class='row'><h3>Сайт временно не доступен, приносим извинения за доставленные неудобства:(</h3> <br> <p>Для связи с нами вы можете обратиться по телефону: <a href='tel:+7-495-799-96-30'>+7-495-799-96-30</a></p> </div></div></div>"
                console.error('Error:', error);
            });
        
       
    }
// postData('http://146.185.209.31:9191/api/business_automation/');
 
// postData('http://146.185.209.31:9191/api/contacts/');

// postData('http://146.185.209.31:9191/api/review/');

// postData('http://146.185.209.31:9191/api/server_outsourcing/');

// postData('http://146.185.209.31:9191/api/virtualization/');

// postData('http://146.185.209.31:9191/api/computer_monitoring/');

// postData('http://146.185.209.31:9191/api/video_surveillance/');

// postData('http://146.185.209.31:9191/api/maintenance_1C/');

// postData('http://146.185.209.31:9191/api/maintenance_telephony/');

// postData('http://146.185.209.31:9191/api/network_equipment/');

// postData('http://146.185.209.31:9191/api/main_page/');


postData(HOST + '/api/business_automation/');
 
postData(HOST + '/api/contacts/');

postData(HOST + '/api/review/');

postData(HOST + '/api/server_outsourcing/');

postData(HOST + '/api/virtualization/');

postData(HOST + '/api/computer_monitoring/');

postData(HOST + '/api/video_surveillance/');

postData(HOST + '/api/maintenance_1C/');

postData(HOST + '/api/maintenance_telephony/');

postData(HOST + '/api/network_equipment/');

postData(HOST + '/api/main_page/');



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

    

    //обработчик форм
    $("#contactUs").submit(function(e) {
            e.preventDefault(); 
            $('.l-form_primary-btn').addClass( "d-none" )
            $('.l-form_loading').removeClass( "d-none" ).addClass( "d-block" )
        
            $(this).find('input[type=submit], button[type=submit]').prop('disabled', true);
                var form = $(this);
                var actionUrl = form.attr('action');
                var userName = $("#user_name").val();
                var userPhone = $("#user_phone").val();
                var userMessage = $("#user_message").val();

                var formData = {"message":`Пользователь оставил свои данные (форма услуг):\nИмя: ${userName} \nТелефон: ${userPhone}\nСообщение: ${userMessage}`};
            $.ajax({
                type: "POST",
                url: location.protocol + '//' + location.host + '/api/send_email/',
                data: formData,
                dataType: "json",
                encode: true,
                done: function()
                {
                    $('.l-form_loading').removeClass( "d-block" ).addClass( "d-none " )
                   
                    $('.l-form_success_msg').removeClass( "d-none" )
                    $('.l-form_success_msg').addClass( "d-block" )
                    $('.l-form_primary-btn').prop('disabled', false)
                    $('#contactUs')[0].reset();
                },
               
            }); 
        });
        $("#contactUsFooter").submit(function(e) {
            e.preventDefault(); 
            $('.l-form_primary-btn').addClass( "d-none" )
            $('.l-form_loading').removeClass( "d-none" ).addClass( "d-block" )
        
            $(this).find('input[type=submit], button[type=submit]').prop('disabled', true);
            var form = $(this);
            var actionUrl = form.attr('action');
            var userName = $("#user_name_footer").val();
            var userPhone = $("#user_phone_footer").val();
            var userMessage = $("#user_message_footer").val();

            var formData = {"message":`Пользователь оставил свои данные (форма из подвала сайта):\nИмя: ${userName} \nТелефон: ${userPhone}\nСообщение: ${userMessage}`};
        $.ajax({
            type: "POST",
            // url: 'http://146.185.209.31:9191/api/send_email/',
            url: location.protocol + '//' + location.host + '/api/send_email/',
            data: formData,
            dataType: "json",
            encode: true,
            done: function()
            {
                $('.l-form_loading').removeClass( "d-block" ).addClass( "d-none " )
                
                $('.l-form_success_msg').removeClass( "d-none" )
                $('.l-form_success_msg').addClass( "d-block" )
                $('.l-form_primary-btn').prop('disabled', false)
                $('#contactUsFooter')[0].reset();
            }
            }); 
        });
});


