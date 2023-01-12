var openImage = document.querySelectorAll(".image img");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var close = document.querySelector(".close");
var gallery = document.querySelector(".gallery");
var galleryImg = document.querySelector(".gallery__inner img");

var currenIndex;

openImage.forEach((item, index) => {
  item.addEventListener("click", function () {
    currenIndex = index;
    galleryImg.src = openImage[currenIndex].src;
    gallery.classList.add("show");
  });
});

close.onclick = function () {
  gallery.classList.remove("show");
};

onkeydown = function (e) {
  if (e.keyCode == 27) {
    gallery.classList.remove("show");
  }
};

prev.onclick = function () {
  if (currenIndex == 0) {
    index = openImage.length - 1;
    currenIndex = index;
  }
  galleryImg.src = openImage[currenIndex--].src;
  gallery.classList.add("show");
};

next.onclick = function () {
  if (currenIndex == openImage.length) {
    index = 0;
    currenIndex = index;
  }
  galleryImg.src = openImage[currenIndex++].src;
  gallery.classList.add("show");
};
