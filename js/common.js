$(function() {
  'use strict';

  /* =======================
  // Toggle Menu and Search
  ======================= */
  var $menuOpenButton = $(".menu-button"),
      $menuCloseButton = $(".menu-close"),
      $navMenu = $(".nav-menu"),

      $searchOpenButton = $(".search-button"),
      $searchCloseButton = $(".search-close-button"),
      $search = $(".search");

  $(window).on("resize", function () {
    var e = $(this);
    if (e.width() >= 991) {
      $navMenu.removeClass("active"); // Remove class - "active" if width window more than 991px
    }
  });

  $menuOpenButton.on("click", function() {
    openMenu();
  });

  $menuOpenButton.on("keydown", function(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openMenu();
    }
  });

  $menuCloseButton.on("click", function() {
    closeMenu();
  });

  $menuCloseButton.on("keydown", function(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closeMenu();
    }
  });

  $searchOpenButton.on("click", function() {
    openSearch();
  });

  $searchOpenButton.on("keydown", function(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openSearch();
    }
  });

  $searchCloseButton.on("click", function() {
    closeSearch();
  });

  $searchCloseButton.on("keydown", function(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closeSearch();
    }
  });

  $(document).on("keydown", function(e) {
    if (e.key === "Escape") {
      closeMenu();
      closeSearch();
    }
  });


  function openMenu() {
    $navMenu.addClass("active");
    $menuCloseButton.focus();
  }

  function closeMenu() {
    var wasActive = $navMenu.hasClass("active");
    $navMenu.removeClass("active");
    if (wasActive) {
      $menuOpenButton.focus();
    }
  }

  function openSearch() {
    $search.addClass("active");
    $("#js-search-input").focus();
  }

  function closeSearch() {
    var wasActive = $search.hasClass("active");
    $search.removeClass("active");
    if (wasActive) {
      $searchOpenButton.focus();
    }
  }


  /* =======================
  // Reveal Image
  ======================= */
  var ww = window.innerWidth,
    wh = window.innerHeight;

  $(window).ready(function () {
    $('body').waitForImages({
      finished: function () {
        setTimeout(function () {
          $('.preloader').addClass('hide');

          setTimeout(function () {
            reveals();
          }, 100);
        }, 500);
      },
      waitForAll: true
    });
  });

  function reveals() {
    $(window).on('scroll', function () {
      $(".article-box, .article-first, .post-image-box, .page-image-box, .post-body img, .page-body img, .recent-header").each(
        function(i) {
          var el_top = $(this).offset().top,
            win_bottom = wh + $(window).scrollTop();

          if (el_top < win_bottom) {
            $(this)
              .delay(i * 100)
              .queue(function() {
                $(this).addClass("reveal-in");
              });
          }
        }
      );
    }).scroll();
  }

  /* =======================
  // Scroll Motion
  ======================= */
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $header = $(".header");
  var $progress = $(".scroll-progress");
  var $hero = $(".page-image");

  function updateScrollEffects() {
    var scrollTop = $(window).scrollTop();
    var docHeight = $(document).height() - $(window).height();
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    document.documentElement.style.setProperty("--scroll-progress", progress + "%");
    $header.toggleClass("is-scrolled", scrollTop > 8);

    if (!prefersReducedMotion && $hero.length) {
      document.documentElement.style.setProperty("--hero-shift", Math.min(scrollTop * 0.08, 26) + "px");
    }
  }

  function setupScrollReveal() {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      $(".scroll-reveal").addClass("reveal-in");
      return;
    }

    $("body").addClass("motion-ready");

    var revealTargets = $(".page-head, .page-body > h1, .page-body > h2, .page-body > h3, .page-body > p, .page-body > ul, .page-body > ol, .page-body > blockquote, .page-body > .highlighter-rouge, .page-body figure, .page-body img, .nav-card, .download-btn");

    revealTargets.each(function(index) {
      var $target = $(this);
      var typeClass = "";

      if ($target.is("img, figure")) {
        typeClass = " reveal-scale";
      } else if ($target.is("ul, ol, blockquote")) {
        typeClass = index % 2 === 0 ? " reveal-left" : " reveal-right";
      }

      $target
        .addClass("scroll-reveal" + typeClass)
        .css("--reveal-delay", Math.min(index % 5, 4) * 55 + "ms");
    });

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-in");
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12
    });

    $(".scroll-reveal").each(function() {
      observer.observe(this);
    });
  }

  setupScrollReveal();
  updateScrollEffects();
  $(window).on("scroll resize", updateScrollEffects);


  /* =======================
  // Responsive Videos
  ======================= */
  $(".post-content, .page-content").fitVids({
    customSelector: ['iframe[src*="ted.com"]']
  });
  

  /* =======================
  // Instagram Feed
  ======================= */
  // userId and accessToken from Matthew Elsom (https://codepen.io/matthewelsom/pen/zrrrLN) for example, for which he thanks a lot!
  var instagramFeed = new Instafeed({
    get: 'user',
    limit: 6,
    resolution: 'standard_resolution',
    userId: '8987997106',
    accessToken: '8987997106.924f677.8555ecbd52584f41b9b22ec1a16dafb9',
    template:
      '<li class="instagram-item"><a href="{{link}}" aria-label="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}"></a></li>'
  });

  if ($('#instafeed').length) {
    instagramFeed.run();
  }


  /* =======================
  // Scroll Top Button
  ======================= */
  $(".top").click(function () {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });

});
