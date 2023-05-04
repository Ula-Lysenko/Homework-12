//  Carousel

$(document).ready(function () {
  $(".carousel").slick({
    dots: false,
    arrows: false,
  });
});

// Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");

burger.onclick = function () {
  header.classList.toggle("menu-open");
};

// Counter

const time = 4000; //ms
const step = 80;

function outNum(num, elem) {
  let l = document.querySelector("#counter-1");
  n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(
    () => {
      n = n + step;

      if (n >= num) {
        clearInterval(interval);
        n = num;
      }

      l.innerHTML = n;
    },

    t
  );
}

outNum(1890, "counter-1");

//

const time2 = 4000; //ms
const step2 = 80;

function outNum2(num, elem) {
  let l = document.querySelector("#counter-2");
  n = 0;
  let t = Math.round(time2 / (num / step2));
  let interval = setInterval(
    () => {
      n = n + step2;

      if (n >= num) {
        clearInterval(interval);
        n = num;
      }

      l.innerHTML = n;
    },

    t
  );
}

outNum2(1920, "counter-2");
