const Video = document.querySelector(".Video");
const Overlay = document.querySelector(".Overlay");

Video.onclick = function () {
  Overlay.classList.add("show");
};

Overlay.onclick = function () {
  Overlay.classList.remove("show");
};

var spans = document.querySelectorAll("span[data-one]");
var dataOneValue;
spans.forEach(function (span) {
  dataOneValue = span.getAttribute("data-one");
});

var divs = document.querySelectorAll("div.one");

// Accessing data attribute dynamically
var dataOneValue2;
divs.forEach(function (div) {
  dataOneValue2 = div.getAttribute("data-one");
});
