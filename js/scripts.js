window.addEventListener("DOMContentLoaded", (event) => {
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  navbarShrink();

  document.addEventListener("scroll", navbarShrink);

  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

var tl = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 0.5 });
tl.staggerFrom(
  ".text",
  0.5,
  {
    opacity: 0,
    y: 200,
    rotation: 360,
    delay: 0.5,
    scale: 2,
    ease: Bounce.easeIn,
  },
  0.2
);

if ($(".DurgaK").length) {
  var cursor = document.querySelector(".custom-cursor__cursor");
  var cursorinner = document.querySelector(".custom-cursor__cursor-two");
  var a = document.querySelectorAll("a");

  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });

  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + "px";
    cursorinner.style.top = y + "px";
  });

  document.addEventListener("mousedown", function () {
    cursor.classList.add("click");
    cursorinner.classList.add("custom-cursor__innerhover");
  });

  document.addEventListener("mouseup", function () {
    cursor.classList.remove("click");
    cursorinner.classList.remove("custom-cursor__innerhover");
  });

  a.forEach((item) => {
    item.addEventListener("mouseover", () => {
      cursor.classList.add("custom-cursor__hover");
    });
    item.addEventListener("mouseleave", () => {
      cursor.classList.remove("custom-cursor__hover");
    });
  });
}

document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
