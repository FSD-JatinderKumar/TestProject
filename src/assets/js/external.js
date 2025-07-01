// header js
      // Inject the remote header HTML
      fetch("https://www.lpu.in/includepages/newlpu/header.php")
        .then((res) => res.text())
        .then((html) => {
          document.getElementById("fixed-header").innerHTML = html;

          // Once header is loaded, run your sticky + select logic
          $(document).ready(function () {
            // custom select start
            if ($(window).width() <= 992) {
              $(".style-select").click(function () {
                $(".custom-select-list").toggle();
                $(".style-select .arrow").toggleClass("rotate");
              });
              $(".custom-select-list li a").click(function () {
                $(".custom-select-list li a").removeClass("active");
                $(this).addClass("active");
                $(".style-select").html(
                  $(this).text() + ' <span class="arrow rotate"></span>'
                );
                $(".style-select .arrow").removeClass("rotate");
                $(".custom-select-list").hide();
              });
              $(document).click(function (event) {
                if (!$(event.target).closest(".custom-select-outer").length) {
                  $(".custom-select-list").hide();
                  $(".style-select .arrow").removeClass("rotate");
                }
              });
              $(".influence-style-select").click(function () {
                $(".influence-custom-select-list").toggle();
                $(".influence-style-select .arrow").toggleClass("rotate");
              });
              $(".influence-custom-select-list li a").click(function () {
                $(".influence-custom-select-list li a").removeClass("active");
                $(this).addClass("active");
                $(".influence-style-select").html(
                  $(this).text() + ' <span class="arrow rotate"></span>'
                );
                $(".influence-style-select .arrow").removeClass("rotate");
                $(".influence-custom-select-list").hide();
              });
              $(document).click(function (event) {
                if (!$(event.target).closest(".custom-select-outer").length) {
                  $(".influence-custom-select-list").hide();
                  $(".influence-style-select .arrow").removeClass("rotate");
                }
              });
            }

            // custom select for international start
            if ($(window).width() <= 1200) {
              $(".style-select").click(function () {
                $(
                  ".overview-custom-select-list, .edp-tabs, .schoool-program"
                ).toggle();
                $(".style-select .arrow").toggleClass("rotate");
              });
              $(
                ".overview-custom-select-list li a, .edp-tabs li a, .schoool-program li a"
              ).click(function () {
                $(
                  ".overview-custom-select-list li a, .edp-tabs li a, .schoool-program li a"
                ).removeClass("active");
                $(this).addClass("active");
                $(".style-select").html(
                  $(this).text() + ' <span class="arrow rotate"></span>'
                );
                $(".style-select .arrow").removeClass("rotate");
                $(
                  ".overview-custom-select-list, .edp-tabs, .schoool-program"
                ).hide();
              });
              $(document).click(function (event) {
                if (
                  !$(event.target).closest(
                    ".overview-custom-select-outer, .custom-edp-outer, .programmes-options"
                  ).length
                ) {
                  $(
                    ".overview-custom-select-list, .edp-tabs, .schoool-program"
                  ).hide();
                  $(".style-select .arrow").removeClass("rotate");
                }
              });
            }

            // sticky header
            var sticky_header = $("#header");
            var headerOffset = sticky_header.offset().top;
            var mobile_sticky_header = $(".mobile-sticky-header");
            var navOffset = mobile_sticky_header.offset().top;

            $(window).scroll(function () {
              if ($(window).scrollTop() > headerOffset) {
                sticky_header.addClass("sticky");
                mobile_sticky_header.addClass("top-bar-fixed");
              } else {
                sticky_header.removeClass("sticky");
                mobile_sticky_header.removeClass("top-bar-fixed");
              }
            });

            if ($(window).width() <= 1024) {
              $("#header .container-fluid").removeClass("container-fluid");
              $(".scroll-logo").addClass("mobile-scroll-logo");
              $(".mobile-scroll-logo").removeClass("scroll-logo");

              $(window).scroll(function () {
                if ($(window).scrollTop() > navOffset) {
                  mobile_sticky_header.addClass("sticky");
                  sticky_header.removeClass("sticky");
                  $(".mobile-scroll-logo").attr(
                    "src",
                    "https://www.lpu.in/lpu-assets/images/logo/LPU-socila-logo.svg"
                  );
                } else {
                  mobile_sticky_header.removeClass("sticky");
                  $(".mobile-scroll-logo").attr(
                    "src",
                    "https://www.lpu.in/lpu-assets/images/logo/logo.svg"
                  );
                }
              });
            }

            if ($(window).width() >= 992) {
              $(document).scroll(function () {
                var y = $(this).scrollTop();
                var headerWrap = $(".mobile-sticky-header").offset().top;
                if (y > headerWrap) {
                  $(".page-custom-nav").addClass("fixed-nav");
                } else {
                  $(".page-custom-nav").removeClass("fixed-nav");
                }
              });
            }

            window.myFunction = function (x) {
              x.classList.toggle("change");
            };

            window.PlusMinusFunction = function (x) {
              x.classList.toggle("plusMinus");
            };
          });
        });
    

// top bar js

  window.onload = function () {
    $('.topbar-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: false
    });
    
    const targetDate = new Date("June 21, 2025 00:00:00").getTime();

    const countdownFunction = setInterval(function () {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      const lastDateEl = document.querySelector('.last-date');
      if (lastDateEl) {
        lastDateEl.innerHTML =
          '<span class="days">' + days + 'd</span> ' +
          '<span class="hours">' + hours + 'h</span> ' +
          '<span class="minutes">' + minutes + 'm</span> ' +
          '<span class="seconds">' + seconds + 's</span> ';
      }

      if (timeRemaining < 0) {
        clearInterval(countdownFunction);
        if (lastDateEl) {
          lastDateEl.textContent = "Time's up!";
        }
      }
    }, 1000);
  };


//   $(".topbar-slider").slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   });

//   document.addEventListener('DOMContentLoaded', function() {
//     const targetDate = new Date("June 21, 2025 00:00:00").getTime();

//     const countdownFunction = setInterval(function() {
//       const now = new Date().getTime();
//       const timeRemaining = targetDate - now;

//       const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//       const lastDateEl = document.querySelector('.last-date');
//       if (lastDateEl) {
//         lastDateEl.innerHTML =
//           '<span class="days">' + days + 'd</span> ' +
//           '<span class="hours">' + hours + 'h</span> ' +
//           '<span class="minutes">' + minutes + 'm</span> ' +
//           '<span class="seconds">' + seconds + 's</span> ';
//       }

//       if (timeRemaining < 0) {
//         clearInterval(countdownFunction);
//         if (lastDateEl) {
//           lastDateEl.textContent = "Time's up!";
//         }
//       }
//     }, 1000);
//   });






