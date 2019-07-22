jQuery(document).ready(function () {
    analyze(deviceInput.userAgent, parseInt(deviceInput.maxPhoneWidth, 10));
    setTimeout(function () {
        jQuery("#colorbox").remove();
        jQuery('.carousel').carousel({
            interval: 5000
        })
        jQuery('[data-toggle=popover]').popover();
                    jQuery('[data-toggle=popover]').on('click', function (e) {
                    jQuery('[data-toggle=popover]').not(this).popover('hide');
                    });
                    
        if (jQuery(window).width() < 767) {
            jQuery('.upcomingxs').css('visibility', 'hidden');
        }
        jQuery("#upcomingProducts .purchaseSpec button").on("click", function () {
            var currentPart = jQuery(this).parents(".productPlaceHolder").data("part");
            jQuery('#notifyModal').modal();
            jQuery(".notifyPartclick").html(currentPart);
        })
        jQuery(".stockSpecWidget .addCart button").on("click", function () {
            jQuery('#addtocartModal').modal();
        })
        jQuery(".switch input ").on("change", function () {
            jQuery('#sampleconfirmmodal').modal();
            if($('.switch').find('input').prop('checked')){
                jQuery(".modal-body p.content").html("Are you sure, you want to change buying purpose from \"Production\" to \"Sample\" ?")
                
            }
            else{
                jQuery(".modal-body p.content").html("Are you sure, you want to change buying purpose from \"Sample\" to \"Production\" ?")
            }
        })
        jQuery('.nobtn').on("click",function(){
            $('.switch').find('input').prop('checked', true)

        })
        jQuery(".shipToBlock .address a.update").on("click", function () {
            jQuery('#updateaddressModal').modal();
        });
        jQuery("#samplemodalclick").on("click", function () {
            jQuery('#samplemodal').modal();
        });
        jQuery(".newCart").on("click", function () {
            jQuery('#savenewcartmodal').modal();
        });
        jQuery("#restorecart").on("click", function () {
            jQuery('#restorecartmodal').modal();
        });
        jQuery("#deletecart").on("click", function () {
            jQuery('#deletecartmodal').modal();
        });
        jQuery("a.removeCartItem").on("click", function () {
            jQuery('#deletefromcartModal').modal();
        });
        
        jQuery("a.calcShipTax").on("click", function () {
            jQuery('#shippingCalculate').modal();
        });
        jQuery('.addressList .custom-radio input, .addressList .custom-radio label').on('click', function(event){
            jQuery('.addressList').find('label').removeClass('selected');
            jQuery('.b2bpayment').find('.custom-radio').removeClass('selected');
            jQuery('.addressList').find('.cvvDetails').addClass('d-none');
            if(this.nodeName=='LABEL'){
                jQuery(this).toggleClass('selected');
                this.previousElementSibling.checked=true;
                
            }   
            if(jQuery('.custom-control-label.selected').length==1){
                jQuery('.b2bpayment').find('.custom-radio .custom-control-label.selected').parent('.custom-radio').addClass('selected');
                jQuery('.b2bpayment').find('.custom-radio .custom-control-label.selected').siblings('.custom-radio').removeClass('selected');
                
            }
                    
            if(jQuery(this).hasClass('selected')){
                jQuery(this).find('.cvvDetails').removeClass('d-none');
                return false;
            }        
        });
        
        
        jQuery('.handbar').on('click', function () {
            jQuery('#mobile-menu-modal').modal();
        })
        jQuery('.shippingAddSel .addressList a.shipeditbtn').on('click', function () {
            jQuery('#shippingaddresseditmodal').modal();
        })
        jQuery('#searchIcon').on('click', function () {
            jQuery('#dropdown-modal').modal();
            

        })
        jQuery('#requestmodal').on('click', function () {
            jQuery('#quotemodal').modal();
        })
        jQuery('#requestmodal2').on('click', function () {
            debugger;
            jQuery('#quotemodal2').modal();
        })
        jQuery('.requestquote').on('click', function(){
            
            jQuery('#quotethankyoumodal').modal();
        })
        jQuery("a.removeCartItems").on("click", function () {
            jQuery('#deletefromquoteModal').modal();
        });
        
        jQuery("a.Deletelink").on("click", function () {
            jQuery('#deletequotemodal').modal();
        });
        jQuery('.addtoquote').on('click', function(){
            
            jQuery('#quoteaddmodal').modal();
        })
        jQuery('.addressbook.recyclebtn').on('click', function(){
            jQuery('#addressdeletemodal').modal();
        })
        jQuery('.poccmodal').on('click', function(){
            jQuery('#poccmodal').modal();
        })
        jQuery('.savecard.recyclebtn').on('click', function(){
            jQuery('#carddeletemodal').modal();
        })
        jQuery('.ordertrackingmodal').on('click', function(){
            jQuery('#orderstatusmodal').modal();
        })
        jQuery('.editCpn').on('click', function(){
            jQuery('#editcpnmodal').modal();
        })
        jQuery('.addCpn').on('click', function(){
            jQuery('#addcpnmodal').modal();
        })
        
        jQuery(".close").on('click', function () {
            jQuery('<div class="modal-backdrop fade show"></div>').remove();
        })
        jQuery(".mobiledrop").on('click', function () {
            if (!jQuery('.dropdown-menu').hasClass("show")) {
                jQuery('body').append('<div class="modal-backdrop fade show"></div>');
                jQuery('.modal-content').css('height', '350px');

            } else {
                jQuery('.modal-backdrop').remove();
                jQuery('.modal-content').css('height', '135px');
            }
        })
       
        jQuery('#dropdown-modal').on('click', function () {
            jQuery('#searchIcon').show();
        });
        /* Mobile Menu Tab Activation */
        jQuery('#mobileMenuAccordian .collapse, #mobilelowerMenuAccordian  .collapse').on('show.bs.collapse', function () {
            jQuery(this).parents('.nav-item').find('.nav-link').addClass('activeMenuMb');
        }).on('hide.bs.collapse', function () {
            jQuery(this).parents('.nav-item').find('.nav-link').removeClass('activeMenuMb');
        })

        /* Mobile Menu Tab Expansion init */
        var slinky = '';
        jQuery('#mobileMenuAccordian .collapse').on('shown.bs.collapse', function () {
            var currentAcc = jQuery(this).parents('.nav-item').find('.nav-link span').html();
            slinky = jQuery('#menu' + currentAcc).slinky();
            jQuery('.slinky-menu .next').on('click', function () {
                var category = jQuery(this).text().trim();
                jQuery('.header').find('a.back').text(category);
            })
        }).on('hidden.bs.collapse', function () {
            if (slinky && slinky != "")
                slinky.destroy();
        });


        jQuery('ul.productCat li.cat-item').on('click', function () {
            jQuery('li.cat-item').removeClass('cat-itemSel');
            if (jQuery('li.cat-item').find('i').hasClass('icon-st-accordionMinus')) {
                jQuery('li.cat-item').find('i').removeClass('icon-st-accordionMinus');
            }
            jQuery(this).addClass('cat-itemSel');
            jQuery(this).find('i').addClass('icon-st-accordionMinus');
            if (jQuery('ul.subCat').css('display', '')) {
                jQuery('ul.subCat').slideUp();
            }
            jQuery(this).nextAll('ul.subCat:first').slideDown();
        })

        function carouselComponent(className, carousalType) {
            jQuery('.' + className).owlCarousel({
                loop: false,
                margin: 25,
                stagePadding: 8,
                nav: true,
                navText: ["<img src='../icons/carleft.png' width='18px' height='30px'>", "<img src='../icons/carright.png' width='18px' height='30px'>"],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        loop: false,
                        margin: 15,
                        mouseDrag: true,
                        dots: false
                    },
                    600: {
                        items: carousalType === 'product' ? 3 : 1,
                        nav: false,
                        loop: false,
                        margin: 15,
                        mouseDrag: true,
                        dots: false
                    },
                    1023: {
                        items: carousalType === 'product' ? 3 : 2,
                        nav: true,
                        loop: false,
                        slideBy: carousalType === 'product' ? 4 : 3,
                        mouseDrag: false
                    },
                    1200: {
                        items: carousalType === 'product' ? 4 : 3,
                        nav: true,
                        loop: false,
                        margin: 10,
                        slideBy: carousalType === 'product' ? 4 : 3,
                        mouseDrag: false
                    }
                }
            })
        }
        carouselComponent('prod-carousel', 'product');
        //carouselComponent('asso-carousel', 'product');
        carouselComponent('recentcarousel', 'recent');
        
        //start of tabs//
        jQuery('.productListingCat li').click(function () {
            var tab_id = jQuery(this).attr('data-tab');
            jQuery('.tab-content').removeClass('current');
            jQuery('.productListingCat li div').removeClass('current');
            jQuery(this).find("div").addClass('current');
            jQuery("#" + tab_id).addClass('current');
            if (jQuery(window).width() < 767) {
                jQuery('li').find('div.current i:eq(0)').css('visibility', 'hidden');
                jQuery(this).find('div.current i:eq(0)').css('visibility', 'visible');
                jQuery('li').find('div i:eq(1)').css('color', '#001c51');
                jQuery('li').find('div i:eq(1)').html('Upcoming <strong>Products</strong>');
                jQuery('li').find('div.current i:eq(1)').html('Featured <strong>Products</strong>');
            }
        })
        
        jQuery(function(){
            var owl = jQuery('.asso-carousel');
            owl.owlCarousel({
                loop: false,
                margin: 25,
                stagePadding: 8,
                nav: true,
                navText: ["<img src='../icons/carleft.png' width='18px' height='30px'>", "<img src='../icons/carright.png' width='18px' height='30px'>"],
               onInitialized  : counter,
                onTranslated : counter ,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        loop: false,
                        margin: 15,
                        mouseDrag: true,
                        dots: false
                    },
                    600: {
                        items: 1,
                        nav: false,
                        loop: false,
                        margin: 15,
                        mouseDrag: true,
                        dots: false
                    },
                    1023: {
                        items: 3 ,
                        nav: true,
                        loop: false,
                        slideBy:  4 ,
                        mouseDrag: false
                    },
                    1200: {
                        items:4 ,
                        nav: true,
                        loop: false,
                        margin: 10,
                        slideBy:  4 ,
                        mouseDrag: false
                    }
                }
            });
            
            function counter(event) {
               var element   = event.target;         
                var items     = event.item.count;     
                var item      = event.item.index + 4;     
              
              // it loop is true then reset counter from 1
              if(item > items) {
                item = item - items
              }
              $('#counter').html("Showing "+item+" of "+items)
            }
            });
            jQuery(function(){
                var owl = jQuery('.popular-carousel');
                owl.owlCarousel({
                    loop: false,
                    margin: 35,
                    stagePadding: 10,
                    nav: true,
                    navText: ["<img src='../icons/carleft.png' width='18px' height='30px'>", "<img src='../icons/carright.png' width='18px' height='30px'>"],
                   onInitialized  : counter,
                    onTranslated : counter ,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true,
                            loop: false,
                            margin: 15,
                            mouseDrag: true,
                            dots: false
                        },
                        600: {
                            items: 1,
                            nav: false,
                            loop: false,
                            margin: 15,
                            mouseDrag: true,
                            dots: false
                        },
                        1023: {
                            items: 3 ,
                            nav: true,
                            loop: false,
                            slideBy:  4 ,
                            mouseDrag: false
                        },
                        1200: {
                            items:4 ,
                            nav: true,
                            loop: false,
                            margin: 20,
                            slideBy:  4 ,
                            mouseDrag: false
                        }
                    }
                });
                
                function counter(event) {
                   var element   = event.target;         
                    var items     = event.item.count;     
                    var item      = event.item.index + 4;     
                  
                  // it loop is true then reset counter from 1
                  if(item > items) {
                    item = item - items
                  }
                  $('#counter').html("Showing "+item+" of "+items)
                }
                });

        // wishlist script start
        jQuery('.text-right>i').on('click', function () {
            jQuery(this).toggleClass('icon-st-markfavSel');
        })
        jQuery('.latestcarousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: ["<img src='../icons/leftcar.png' width='8px' height='12px'>", "<img src='../icons/rightcar.png' width='8px' height='12px'>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: false
                }
            }
        })
        jQuery('.asso-carouselv2').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            navText: ["<img src='../icons/carleft.png' width='18px' height='30px'>", "<img src='../icons/carright.png' width='18px' height='30px'>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1023: {
                    items: 3,
                    nav: true,
                    loop: false,
                    slideBy: 3
                },
                1200: {
                    items: 5,
                    nav: true,
                    loop: false,
                    slideBy: 5,
                    mouseDrag: false
                }
            }
        })
        jQuery('.downloadSectionHeading, td:first-child>div').on('click', function(){
            if(jQuery(this).hasClass("expand")){
                jQuery(this).removeClass('expand');
                jQuery('.downloadSection').slideUp();
            }else{
                jQuery(this).addClass('expand');
                jQuery('.downloadSection').slideDown();
            }
        });
        jQuery('.quantitycarousel').owlCarousel({
                    loop: true,
                    margin: 10,
                    nav: false,
                    navText: ["<img src='../icons/leftcar.png' width='8px' height='12px'>", "<img src='../icons/rightcar.png' width='8px' height='12px'>"],
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 2,
                            nav: true
                        },
                        600: {
                            items: 2,
                            nav: false
                        },
                        1000: {
                            items: 2,
                            nav: true,
                            loop: false
                        }
                    }
                })
        
        var mql = window.matchMedia("screen and (max-width: 768px)")
        mediaqueryresponse(mql) // call listener function explicitly at run time
        mql.addListener(mediaqueryresponse) // attach listener function to listen in on state changes



        jQuery(".header-strip .leftspace a.nav-link").on('click', function () {

            if (!jQuery('.header-strip .leftspace').hasClass("show")) {
                if (jQuery('.modal-backdrop').length === 0) {
                    jQuery('body').append('<div class="modal-backdrop fade show headeActive"></div>');
                    jQuery('body').addClass('menuBackdrop');
                }
            } else {
                jQuery(".modal-backdrop.fade.show").remove();
                jQuery('body').removeClass('menuBackdrop');
            }
        })
        $("#minicart .dropdown a").on('click', function (e) {
            if($(this).closest("ul").find(".dropdown-menu").length){
                if ($('.modal-backdrop').length === 0) {
                    $('body').append('<div class="modal-backdrop fade show"></div>');
                    $('body').addClass('menuBackdrop');
                    $(this).closest("ul").find(".dropdown-menu").show();
                } else {
                    $(".modal-backdrop.fade.show").remove();
                    $('body').removeClass('menuBackdrop');
                    $('#minicart .dropdown-menu').removeAttr("style");
                }
            }
        });
        
        $('body').on("click", function (e) {
            //$(".modal-backdrop.fade.show").remove();
            //$('body').removeClass('menuBackdrop');
              $('[data-toggle=popover]').each(function () {
                // hide any open popovers when the anywhere else in the body is clicked
                if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                    $(this).popover('hide');
                }
            });
        });
        jQuery('body').not(jQuery(".header-strip, #header .dropdown-menu,#dropdown-modal")).on('click', function () {
            if (jQuery('.header-strip .leftspace').hasClass("show")) {
                jQuery(".modal-backdrop.fade.show").remove();
                jQuery('body').removeClass('menuBackdrop');
            }
        })
        
        
        
        
        
        jQuery("#clear").click(function(){
               jQuery("#packageset")[0].reset();
           });
           jQuery("#packageclear").click(function(){
               jQuery("#packagetypeset")[0].reset();
           });
           jQuery("#sortclear").click(function(){
               jQuery("#sortbyset")[0].reset();
           });
           jQuery("#rangeclear").click(function(){
               jQuery("#tempatureform")[0].reset();
           });
           // code by Akanksha
           jQuery("#filetrDivMobile").click(function() {
                if(jQuery('#accordianWrapper').css('display')!='none'){
                    jQuery('#accordianWrapper').hide();
                    jQuery('#producutFilter').show();
                    jQuery('.filterCollapseAll').hide();
                    jQuery('.filterarea').css('display','block');
                    jQuery('.productFilterButton').addClass('d-block');
                    jQuery('.productFilterButton').css('display','block');
                    jQuery('.filterExpandSection').addClass('d-block');
                    jQuery('.filterExpandSection').css('display','block');
           }
           /* Start code for overlay div */
           jQuery('.overlay').css({
                        'position':'absolute',
                        'top' : '190px',
                        'left': '0',
                        'height': '165vh',
                        'width': '100%',
                        'background-color': 'rgba(0,0,0,0.5)',
                        'z-index': '10',
                        'overflow-y': 'auto'
                });
             jQuery('body').css('overflow-y','hidden');
             jQuery('.selectorFilter').css({
                 'position':'fixed',
                 'z-index':'11',
                 'width':'100%'
             });
             jQuery('#producutFilter').css({
                 'max-height' : '400px',
                 'overflow-y' : 'auto'
             });
            /* End code for overlay div */
            })
            jQuery("#cancelFilterButton").click(function() {
                    jQuery("#accordianWrapper").show();
                    jQuery('#producutFilter').hide();
                    jQuery('.productFilterButton').removeClass('d-block');
                    jQuery('.productFilterButton').css('display','none');
                    jQuery('.filterExpandSection').removeClass('d-block');
                    jQuery('.filterExpandSection').css('display','none');
                    /* code for remove Overlay */
                    jQuery('.overlay').css({
                        'position':'',
                        'top' : '',
                        'left': '',
                        'height': '',
                        'width': '',
                        'background-color': '',
                        'z-index': '',
                        'overflow-y': ''
                });
                    jQuery('body').css('overflow-y','visible');
                    jQuery('.selectorFilter').css({
                        'position':'relative',
                        'z-index':'1',
                        'width':'auto'
                    });
             });
            /* Expand All */
            jQuery('.filterExpandAll').click(function(){
                    jQuery('.filterarea').find('.collapse').addClass('show');
                    jQuery('.filterCollapseAll').show();
                    jQuery('.filterExpandAll').hide();
                   jQuery('.filterarea').find('.collapsed').addClass('collapsedminus');
                    jQuery('.filterarea').find('.collapsed').removeClass('collapsedplus');
            });
            /* COLLAPSE ALL */
            jQuery('.filterCollapseAll').click(function(){
                    jQuery('.filterarea').find('.collapse').collapse('hide');
                    jQuery('.filterCollapseAll').hide();
                    jQuery('.filterExpandAll').show();
                    jQuery('.filterarea').find('.collapsed').addClass('collapsedplus');
                    jQuery('.filterarea').find('.collapsed').removeClass('collapsedminus');
            });
            jQuery(document).on('click','.filterarea .filterinfoTitle', function(){
                if(jQuery(this).hasClass('collapsedplus')){
                    jQuery('.filterarea .filterinfoTitle').addClass("collapsedplus");
                    jQuery(this).removeClass("collapsedplus");
                    jQuery(this).addClass("collapsedminus");
                }
                else if(jQuery(this).hasClass('collapsedminus')) {
                    jQuery(this).addClass("collapsedplus");
                    jQuery(this).removeClass("collapsedminus");
                    jQuery('.filterarea .filterinfoTitle').addClass("collapsedminus");
                }
                if(jQuery('.filtersection .filterset').hasClass('show')){
                    jQuery('.filterCollapseAll').hide();
                    jQuery('.filterExpandAll').show();
                }
            }) 
         
            jQuery('.overlay').click(function(){
                    jQuery("#accordianWrapper").show();
                    jQuery('#producutFilter').hide();
                    jQuery('.productFilterButton').removeClass('d-block');
                    jQuery('.productFilterButton').css('display','none');
                    jQuery('.filterExpandSection').removeClass('d-block');
                    jQuery('.filterExpandSection').css('display','none');
                    jQuery('.overlay').css({
                                'position':'',
                                'top' : '',
                                'left': '',
                                'height': '',
                                'width': '',
                                'background-color': '',
                                'z-index': '',
                                'overflow-y': ''
                            });
                    jQuery('body').css('overflow-y','visible');
                    jQuery('.selectorFilter').css({
                                'position':'relative',
                                'z-index':'1',
                                'width':'auto'
                        });
           });

           /* Start Code for Handal Check box clear all and clear div */
          

          $('input[type="checkbox"]').click(function(){
                    if($(this).prop("checked") == true){
                        $(this).parent().parent().parent().parent().find('.filterclear').removeClass('d-none');
                    }
                    else if($(this).prop("checked") == false){
                        var checkBoxLength=$(this).parent().parent().find('input[type="checkbox"]:checked').length;
                        if(checkBoxLength>=1) {
                            $(this).parent().parent().parent().parent().find('.filterclear').removeClass('d-none'); 
                        }else{
                            $(this).parent().parent().parent().parent().find('.filterclear').addClass('d-none');
                        }
                    }
        });
        $('input[type="radio"]').click(function(){
                    if($(this).prop("checked") == true){
                        $(this).parent().parent().parent().parent().find('.filterclear').removeClass('d-none');
                    }
                    else if($(this).prop("checked") == false){
                        var checkBoxLength=$(this).parent().parent().find('input[type="checkbox"]:checked').length;
                        if(checkBoxLength>=1) {
                            $(this).parent().parent().parent().parent().find('.filterclear').removeClass('d-none'); 
                        }else{
                            $(this).parent().parent().parent().parent().find('.filterclear').addClass('d-none');
                        }
                    }
        });
        
        
        
        
        
        
    }, 2000);

    /// Sticky Header code, which is working.
    jQuery(window).scroll(function () {
        if ((jQuery(window).scrollTop() >= 115) && (jQuery(window).width() > 767)) {
            jQuery('#navigation-container').addClass('fixed-header').slideDown(1000);
            jQuery('[role^="rightnaveholder"] .fastxs, [role^="rightnaveholder"] .accountxs, [role^="rightnaveholder"] .servicexs,[role^="rightnaveholder"] .searchstore').hide();

            if (jQuery('.globalSearch').find('.dropdown-menu').eq(0).is(":visible")) {
                jQuery('.allcategories').eq(1).dropdown('toggle');
                jQuery('.allcategories').eq(0).removeClass('open');
            }


        } else if ((jQuery(window).scrollTop() >= 65) && (jQuery(window).width() < 767)) {
            jQuery('#header').slideDown(1000).addClass('fixed-header');
            jQuery('[role^="rightnaveholder"] .fastxs, [role^="rightnaveholder"] .accountxs, [role^="rightnaveholder"] .servicexs,[role^="rightnaveholder"] .searchstore').hide();
            //jQuery('[role^="rightnaveholder"] .account .icon-st-downarrow').hide(); 
        } else {
            if (jQuery('.globalSearch').find('.dropdown-menu').eq(1).is(":visible")) {
                jQuery('.allcategories').eq(1).removeClass('open');
                jQuery('.allcategories').eq(0).dropdown('toggle');
            }
            jQuery('#header, #navigation-container').removeClass('fixed-header');
            jQuery('[role^="rightnaveholder"] .fastxs, [role^="rightnaveholder"] .accountxs, [role^="rightnaveholder"] .servicexs,[role^="rightnaveholder"] .searchstore').show();

        }
    });
})

function mediaqueryresponse(mql) {
    if (mql.matches) {
        jQuery(".taber").attr("data-toggle", "collapse");
        jQuery("#footer-container").find('.collapse').collapse("hide");
        jQuery("#producutFilter").find('.collapse').collapse("hide");
    } else {
        jQuery("#footer-container").find('.collapse').collapse("show");  
        jQuery("#footer-container").find("[data-toggle='collapse']").removeAttr("data-toggle");
        jQuery("#producutFilter").find('.collapse').collapse("show");  
        jQuery("#producutFilter").find("[data-toggle='collapse']").removeAttr("data-toggle");
        jQuery("#featureaccordion").find('.collapse').collapse("show");  
        jQuery("#featureaccordion").find("[data-toggle='collapse']").removeAttr("data-toggle");
    }
}

//end of tab//
// //FAQ accordian start //
// var $title = $('.heading');
// var copy   = '.content';

// $title.on('click',(function () {
//   jQuery(this).parent().siblings().children().removeClass("opened");
//   $(this).next(copy).slideToggle();
//   $(this).parent().siblings().children().next().slideUp();
//   jQuery(this).addClass("opened");
//   return false;
// }));
// //FAQ accordian End //