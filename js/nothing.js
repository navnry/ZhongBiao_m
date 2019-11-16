$(document).ready(function ($) {
    var bannerItem = $(".banner").find(".swiper-slide")
    if (bannerItem.length > 1) {
        var bannerSwiper = new Swiper(".banner .swiper-container", {
            speed: 600,
            loop: true,
            pagination: {
                el: ".banner .swiper-pagination"
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            }
        })
    }

    var recommendSwiper = new Swiper(".recommend .swiper-container", {
        effect: 'coverflow',
        speed: 600,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        centeredSlides: true,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 86,
            depth: 500,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: ".recommend .swiper-pagination",
            clickable: true
        }
    })


    var _menuBtn = $("#menu-trigger"),
        _mainBody = $("body"),
        _sideNav = $(".menu-wrap"),
        myFontSize = parseInt($("html").css("font-size")) / 100;

    _menuBtn.on("click", function (e) {
        e.stopPropagation()
        _menuBtn.toggleClass("side-is-open")
        _sideNav.toggleClass("side-is-open")
        _mainBody.toggleClass("side-is-open")

        $(".search-wrap").removeClass("show")
    })
    _sideNav.on("click", function (e) {
        e.stopPropagation()
        _menuBtn.removeClass("side-is-open")
        _sideNav.removeClass("side-is-open")
        _mainBody.removeClass("side-is-open")
    })
    _sideNav.find(".wrap").on("click", function (e) {
        e.stopPropagation()
    })

    $("header").on("click", function (e) {
        e.stopPropagation()
        $(".search-wrap").removeClass("show")
        _menuBtn.removeClass("side-is-open")
        _sideNav.removeClass("side-is-open")
        _mainBody.removeClass("side-is-open")

    })
    $(".search").on("click", function (e) {
        e.stopPropagation()
        $(this).find(".search-wrap").toggleClass("show")
        _menuBtn.removeClass("side-is-open")
        _sideNav.removeClass("side-is-open")


    })
    $("search-wrap .wrap,.search-wrap form").on("click", function (e) {
        e.stopPropagation()
    })
    $(".search-wrap").on("click", function (e) {
        e.stopPropagation()
        $(this).removeClass("show")
    })


    var timeLineTabs = new Swiper('.time-line-tabs .swiper-container', {
        slidesPerView: 3,
        // freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    })
    var timeLineBabs = new Swiper('.time-line-box .swiper-container', {
        speed: 600,
        spaceBetween: myFontSize * 40,
        navigation: {
            nextEl: '.time-line-tabs .swiper-button-next',
            prevEl: '.time-line-tabs .swiper-button-prev',
        },
        thumbs: {
            swiper: timeLineTabs
        }
    })

    var productThumbs = new Swiper('.thumbs-pic .swiper-container', {
        slidesPerView: 4,
        spaceBetween: myFontSize * 20,
        // freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    })
    var productTop = new Swiper('.top-pic .swiper-container', {
        speed: 600,
        spaceBetween: myFontSize * 40,
        navigation: {
            nextEl: '.thumbs-pic .swiper-button-next',
            prevEl: '.thumbs-pic .swiper-button-prev',
        },
        thumbs: {
            swiper: productThumbs
        }
    })


    var scenerySwiper = new Swiper(".scenery .swiper-container", {
        speed: 600,
        loop: true,
        spaceBetween: myFontSize * 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".scenery .swiper-pagination",
            clickable: true
        }
    })

    $("#playBtn").on("click", function () {
        $("#playerWrap").show()
    })
    $("#playerWrap").on("click", function () {
        $(this).hide().find("video").trigger("pause")
    })
    $("#playerWrap video").on("click", function (e) {
        e.stopPropagation()
    })


    $('.news .tabs li').on('click', function (event) {
        event.preventDefault();
        var _index = $(this).index()

        $(this).addClass("selected").siblings().removeClass("selected")

        $(".news .news-box").find(".item").eq(_index).show().siblings().hide()
    });


    var honourSwiper = new Swiper(".show-honour-img .swiper-container", {
        speed: 600,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        spaceBetween: myFontSize * 20,
        pagination: {
            el: '.show-honour-img .swiper-pagination',
            type: 'fraction',
        },
        zoom: true,
    })

    $(".hide-honour-img li").on("click", function () {
        var imgBox = $(this).parents(".hide-honour-img").find("img");
        var _index = $(this).index()
        console.log(_index);
        $(".show-honour-img .swiper-wrapper").html("")

        for (var j = 0, c = imgBox.length; j < c; j++) {
            $(".show-honour-img .swiper-wrapper").append('<div class="swiper-slide"><div class="cell"><img src="' + imgBox.eq(j).attr("src") + '" / ></div></div>');
        }
        honourSwiper.updateSlides();

        $(".show-honour-img").show()
        honourSwiper.slideTo(_index, 0, false);
        return false;
    });

    $(".show-honour-img").on("click", function () {
        $(this).hide()
        $(this).find(".swiper-wrapper").html("")
    });
    $(".show-honour-img .swiper-container").on("click", function (e) {
        e.stopPropagation()
    });
})