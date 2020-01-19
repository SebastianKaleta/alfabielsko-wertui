function anchorLinkHandler(e) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  const targetID = this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({
    top: originalTop,
    left: 0,
    behavior: "smooth"
  });

  const checkIfDone = setInterval(function () {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1";
      //   targetAnchor.focus();//it crash layout- blue frame around containers and jump to link imediatelly
      window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

const elem = document.querySelector(".quotes-wrapper");
const flkty = new Flickity(elem, {
  cellAlign: "center",
  contain: true
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.querySelector(".header-nav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(".carousel").carousel({
  interval: 3000,
  pause: "hover"
});

$(".button-gallery").on("click", function () {
  $(".guilia-box, .stelvio-box").toggleClass("active-block");
  $(".btn-guilia, .btn-stelvio").toggleClass("active-gallery");
});

lightbox.option({
  resizeDuration: 200,
  wrapAround: true
});

$(".your-checkbox").prop("indeterminate", true);

document.cookie = 'same-site-cookie=foo; SameSite=Lax';
document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';


$(".burger").on("click", function () {
  $(".fa-bars,.fa-times, .navigation-ul").toggleClass("show");

})

$(document).ready(function () {
  setTimeout(function () {
    $('#myModal').modal('show');
  }, 2000);
});