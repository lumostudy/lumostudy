$(document).ready(function () {
  /* For the sticky navi*/
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
        $(".section-abouteUs h2").addClass(
          "animated  swing delay-2s"
        ); /* Adding some animation to h2 element*/
      } else {
        $("nav").removeClass("sticky");
        $(".section-abouteUs h2").removeClass("animated  swing delay-2s");
      }
    },
    {
      offset: "50%;",
    }
  );

  /* for scrolling  based on the class*/
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    }
  );

  /* scrolling based on the ID*/
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  /**********Mobile Icon */

  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});

/* fetching the random quote from json file */
fetch("https://next.json-generator.com/api/json/get/4JV2vNbAd")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    quote = data[Math.floor(Math.random() * data.length)];
    text = quote.quoteText;
    auther = quote.quoteAuthor;
    document.getElementById("randomquote").innerHTML = text;
    document.getElementById("quoteAuther").innerHTML = auther;
  });

window.addEventListener("load", function () {
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 3,
    dots: "#dots",
    draggable: true,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 360,
        settings: {
          draggable: true,
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 1,
          slidesToScroll: "auto",
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 775px
        breakpoint: 740,
        settings: {
          draggable: true,
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: "auto",
          duration: 0.25,
        },
      },
      {
        // screens greater than >= 775px
        breakpoint: 1024,
        settings: {
          draggable: true,
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 3,
          slidesToScroll: "auto",
          duration: 0.25,
        },
      },
    ],
  });
});
