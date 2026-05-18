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
  // Spider Web Intro
  ======================= */
  function setupSpiderWebIntro() {
    var intro = document.querySelector(".web-intro");
    var canvas = document.querySelector(".web-intro-canvas");

    if (!intro || !canvas) {
      return;
    }

    var context = canvas.getContext("2d");
    var nodes = Array.prototype.slice.call(intro.querySelectorAll(".web-node"));
    var particles = [];
    var animationFrame;

    function resizeCanvas() {
      var rect = intro.getBoundingClientRect();
      var ratio = window.devicePixelRatio || 1;

      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function getNodePoints() {
      var introRect = intro.getBoundingClientRect();

      return nodes.map(function(node) {
        var rect = node.getBoundingClientRect();

        return {
          x: rect.left - introRect.left + rect.width / 2,
          y: rect.top - introRect.top + rect.height / 2,
          size: rect.width,
          core: node.classList.contains("is-core")
        };
      });
    }

    function createParticles() {
      particles = [];

      for (var i = 0; i < 34; i += 1) {
        particles.push({
          x: Math.random() * intro.offsetWidth,
          y: Math.random() * intro.offsetHeight,
          radius: 1 + Math.random() * 2.2,
          speed: .18 + Math.random() * .28,
          drift: Math.random() * Math.PI * 2
        });
      }
    }

    function drawLine(a, b, opacity, width) {
      context.beginPath();
      context.moveTo(a.x, a.y);
      context.lineTo(b.x, b.y);
      context.strokeStyle = "rgba(159, 236, 225, " + opacity + ")";
      context.lineWidth = width;
      context.stroke();
    }

    function drawWeb() {
      var width = intro.offsetWidth;
      var height = intro.offsetHeight;
      var points = getNodePoints();
      var core = points.filter(function(point) { return point.core; })[0] || points[0];

      context.clearRect(0, 0, width, height);

      points.forEach(function(point, index) {
        if (core && point !== core) {
          drawLine(core, point, .34, 1.2);
        }

        points.slice(index + 1).forEach(function(other) {
          var dx = point.x - other.x;
          var dy = point.y - other.y;
          var distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < Math.min(width, 620)) {
            drawLine(point, other, Math.max(.06, .22 - distance / 2600), .8);
          }
        });
      });

      particles.forEach(function(particle) {
        particle.y -= particle.speed;
        particle.x += Math.sin(particle.drift) * .15;
        particle.drift += .012;

        if (particle.y < -8) {
          particle.y = height + 8;
          particle.x = Math.random() * width;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(255, 255, 255, .34)";
        context.fill();
      });

      if (!prefersReducedMotion) {
        animationFrame = window.requestAnimationFrame(drawWeb);
      }
    }

    resizeCanvas();
    createParticles();
    drawWeb();

    $(window).on("resize", function() {
      window.cancelAnimationFrame(animationFrame);
      resizeCanvas();
      createParticles();
      drawWeb();
    });
  }

  setupSpiderWebIntro();


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
