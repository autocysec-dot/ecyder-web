// eCyder site behavior: mobile nav, dropdown toggles, cookie banner, active link.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded);
    });
  }

  // On small screens, tapping a parent link with a dropdown opens the submenu
  // instead of navigating away immediately.
  document.querySelectorAll(".main-nav > ul > li").forEach(function (li) {
    var link = li.querySelector(":scope > .nav-link");
    var dropdown = li.querySelector(":scope > .dropdown");
    if (!link || !dropdown) return;
    link.addEventListener("click", function (e) {
      if (window.matchMedia("(max-width: 760px)").matches) {
        e.preventDefault();
        li.classList.toggle("open");
      }
    });
  });

  // Close mobile nav when a leaf link (no dropdown attached) is clicked
  document.querySelectorAll(".dropdown a").forEach(function (a) {
    a.addEventListener("click", function () {
      if (nav) nav.classList.remove("open");
    });
  });
  document.querySelectorAll(".main-nav > ul > li").forEach(function (li) {
    if (li.querySelector(".dropdown")) return;
    var a = li.querySelector("a");
    if (a) a.addEventListener("click", function () { if (nav) nav.classList.remove("open"); });
  });

  // Cookie banner
  var banner = document.getElementById("cookie-banner");
  if (banner) {
    var KEY = "ecyder-cookie-ack";
    if (localStorage.getItem(KEY)) {
      banner.classList.add("hidden");
    }
    var btn = banner.querySelector("[data-cookie-ack]");
    if (btn) {
      btn.addEventListener("click", function () {
        localStorage.setItem(KEY, "1");
        banner.classList.add("hidden");
      });
    }
  }

  // Highlight current page in nav
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href) return;
    var file = href.split("#")[0];
    if (file === path || (file === "" && path === "index.html")) {
      a.classList.add("active");
    }
  });
})();
