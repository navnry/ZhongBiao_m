$(document).ready(function (a) {
    1 < a(".banner").find(".swiper-slide").length && new Swiper(".banner .swiper-container", {
        speed: 600,
        loop: !0,
        pagination: {el: ".banner .swiper-pagination"},
        autoplay: {delay: 3E3, disableOnInteraction: !1}
    });
    new Swiper(".recommend .swiper-container", {
        effect: "coverflow",
        speed: 600,
        loop: !0,
        autoplay: {delay: 3E3, disableOnInteraction: !1},
        centeredSlides: !0,
        slidesPerView: "auto",
        slideToClickedSlide: !0,
        coverflowEffect: {rotate: 0, stretch: 86, depth: 500, modifier: 1, slideShadows: !1},
        pagination: {
            el: ".recommend .swiper-pagination",
            clickable: !0
        }
    });
    var c = a("#menu-trigger"), f = a("body"), d = a(".menu-wrap"), e = parseInt(a("html").css("font-size")) / 100;
    c.on("click", function (b) {
        b.stopPropagation();
        c.toggleClass("side-is-open");
        d.toggleClass("side-is-open");
        f.toggleClass("side-is-open");
        a(".search-wrap").removeClass("show")
    });
    d.on("click", function (a) {
        a.stopPropagation();
        c.removeClass("side-is-open");
        d.removeClass("side-is-open");
        f.removeClass("side-is-open")
    });
    d.find(".wrap").on("click", function (a) {
        a.stopPropagation()
    });
    a("header").on("click",
        function (b) {
            b.stopPropagation();
            a(".search-wrap").removeClass("show");
            c.removeClass("side-is-open");
            d.removeClass("side-is-open");
            f.removeClass("side-is-open")
        });
    a(".search").on("click", function (b) {
        b.stopPropagation();
        a(this).find(".search-wrap").toggleClass("show");
        c.removeClass("side-is-open");
        d.removeClass("side-is-open")
    });
    a("search-wrap .wrap,.search-wrap form").on("click", function (a) {
        a.stopPropagation()
    });
    a(".search-wrap").on("click", function (b) {
        b.stopPropagation();
        a(this).removeClass("show")
    });
    var g = new Swiper(".time-line-tabs .swiper-container", {
        slidesPerView: 3,
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0
    });
    new Swiper(".time-line-box .swiper-container", {
        speed: 600,
        spaceBetween: 40 * e,
        navigation: {nextEl: ".time-line-tabs .swiper-button-next", prevEl: ".time-line-tabs .swiper-button-prev"},
        thumbs: {swiper: g}
    });
    g = new Swiper(".thumbs-pic .swiper-container", {
        slidesPerView: 4,
        spaceBetween: 20 * e,
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0
    });
    new Swiper(".top-pic .swiper-container", {
        speed: 600,
        spaceBetween: 40 *
            e,
        navigation: {nextEl: ".thumbs-pic .swiper-button-next", prevEl: ".thumbs-pic .swiper-button-prev"},
        thumbs: {swiper: g}
    });
    new Swiper(".scenery .swiper-container", {
        speed: 600,
        loop: !0,
        spaceBetween: 20 * e,
        autoplay: {delay: 3E3, disableOnInteraction: !1},
        pagination: {el: ".scenery .swiper-pagination", clickable: !0}
    });
    a("#playBtn").on("click", function () {
        a("#playerWrap").show()
    });
    a("#playerWrap").on("click", function () {
        a(this).hide().find("video").trigger("pause")
    });
    a("#playerWrap video").on("click", function (a) {
        a.stopPropagation()
    });
    a(".news .tabs li").on("click", function (b) {
        b.preventDefault();
        b = a(this).index();
        a(this).addClass("selected").siblings().removeClass("selected");
        a(".news .news-box").find(".item").eq(b).show().siblings().hide()
    });
    var h = new Swiper(".show-honour-img .swiper-container", {
        speed: 600,
        observer: !0,
        observeParents: !0,
        observeSlideChildren: !0,
        spaceBetween: 20 * e,
        pagination: {el: ".show-honour-img .swiper-pagination", type: "fraction"},
        zoom: !0
    });
    a(".hide-honour-img li").on("click", function () {
        var b = a(this).parents(".hide-honour-img").find("img"),
            d = a(this).index();
        console.log(d);
        a(".show-honour-img .swiper-wrapper").html("");
        for (var c = 0, e = b.length; c < e; c++) a(".show-honour-img .swiper-wrapper").append('<div class="swiper-slide"><div class="cell"><img src="' + b.eq(c).attr("src") + '" / ></div></div>');
        h.updateSlides();
        a(".show-honour-img").show();
        h.slideTo(d, 0, !1);
        return !1
    });
    a(".show-honour-img").on("click", function () {
        a(this).hide();
        a(this).find(".swiper-wrapper").html("")
    });
    a(".show-honour-img .swiper-container").on("click", function (a) {
        a.stopPropagation()
    })
});