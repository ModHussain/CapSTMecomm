document.addEventListener("touchstart", function () {}, false);
(function ($) {
    "use strict";
    var windw = $(window);
    var navh = $('.nav-container');
    var scrollp = windw.scrollTop();
    if (scrollp > 160) {
        navh.addClass("fixed-nav");
    } else {
        navh.removeClass("fixed-nav");
    }
    windw.scroll(function () {
        if ($(this).scrollTop() > 160) {
            navh.addClass("fixed-nav");
        } else {
            navh.removeClass("fixed-nav");
        }
    });
    if (windw.width() > 991) {
        $("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown").on("mouseover", function () {
            if ($("nav.navbar.bootsnav").find("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown").not("on")) {
                if (!$("nav.navbar.bootsnav").find("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown ul.dropdown-menu.megamenu-content li.dropdown").hasClass("on")) {
                    $("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown ul.dropdown-menu.megamenu-content li.dropdown:first-child ul.dropdown-menu.full-width-dropdown.megamenu-content").css('display', 'block');
                    $("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown ul.dropdown-menu.megamenu-content li.dropdown:first-child ul.dropdown-menu.full-width-dropdown.megamenu-content").addClass("fade-In-Down");
                }
            }
        });
    }
    windw.resize(function () {
        if (windw.width() > 991) {
            $("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown").on("mouseover", function () {
                if ($("nav.navbar.bootsnav").find("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown").not("on")) {
                    if (!$("nav.navbar.bootsnav").find("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown ul.dropdown-menu.megamenu-content li.dropdown").hasClass("on")) {
                        $("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown ul.dropdown-menu.megamenu-content li.dropdown:first-child ul.dropdown-menu.full-width-dropdown.megamenu-content").css('display', 'block');
                        $("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown ul.dropdown-menu.megamenu-content li.dropdown:first-child ul.dropdown-menu.full-width-dropdown.megamenu-content").addClass("fade-In-Down");
                    }
                }
            });
        } else {
            $("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown").on("mouseover", function () {
                if ($("nav.navbar.bootsnav").find("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown").not("on")) {
                    if (!$("nav.navbar.bootsnav").find("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown ul.dropdown-menu.megamenu-content li.dropdown").hasClass("on")) {
                        $("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown ul.dropdown-menu.megamenu-content li.dropdown:first-child ul.dropdown-menu.full-width-dropdown.megamenu-content").css('display', 'none');
                        $("ul.nav li.dropdown.megamenu-fw.fullwidth-dropdown ul.dropdown-menu.megamenu-content li.dropdown:first-child ul.dropdown-menu.full-width-dropdown.megamenu-content").removeClass("fade-In-Down");
                    }
                }
            });
        }
    });
    if (windw.width() > 991) {
        $('.nav-tabs > li > a').hover(function () {
            $(this).tab('show');
        });
        $('.nav-pills > li > a').hover(function () {
            $(this).tab('show');
        });
    }
    windw.resize(function () {
        if (windw.width() > 991) {
            $('.nav-tabs > li > a').hover(function () {
                $(this).tab('show');
            });
            $('.nav-pills > li > a').hover(function () {
                $(this).tab('show');
            });
        } else {
            $('.nav-tabs > li > a').unbind('mouseenter mouseleave');
            $('.nav-pills > li > a').unbind('mouseenter mouseleave');
        }
    });
    var scrollup = $('.scrollup');
    windw.scroll(function () {
        if ($(this).scrollTop() > 100) {
            scrollup.fadeIn();
        } else {
            scrollup.fadeOut();
        }
    });
    scrollup.on('click', '', function (event) {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
})(jQuery);