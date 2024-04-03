// script for slick slider

$(document).ready(function () {
  $("#recognition").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });

  //Highlists single slider
  $("#singl").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

// script for image slider
const imgs = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");

let idx = 1;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = img.length - 1;

    imgs.style.transition = "all, linear, 1s";
    imgs.style.transform = `translateX(${-idx * 500}px)`;

    setTimeout(function () {
      idx = 1;
      imgs.style.transition = "";
      imgs.style.transform = `translateX(${-500}px)`;
    }, 0);
  } else if (idx < 0) {
    idx = 0;

    imgs.style.transition = "all, linear, 1s";
    imgs.style.transform = `translateX(${-idx * 500}px)`;

    setTimeout(function () {
      idx = img.length - 2;
      imgs.style.transition = "";
      imgs.style.transform = `translateX(${-idx * 500}px)`;
    }, 0);
  } else {
    imgs.style.transition = "all, linear, 1s";
    imgs.style.transform = `translateX(${-idx * 500}px)`;
  }
}
// Logos slider section
let copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
