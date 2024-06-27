//navbar script

// navbar button img script
window.addEventListener("resize", function () {
  let image = document.querySelector(".three-dots");
  if (window.innerWidth <= 1126) {
    image.src = "assets/three-line-horizontal-svgrepo-com.svg";
  } else {
    image.src = "assets/three-dots-vertical-svgrepo-com.svg";
  }
});

window.dispatchEvent(new Event("resize"));

const navElement = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const prevScrollY = window.prevScrollY || document.documentElement.scrollTop;

  const isScrollingUp = scrollY < prevScrollY;
  window.prevScrollY = scrollY;

  if (scrollY > 50 && isScrollingUp) {
    setTimeout(() => {
      navElement.classList.remove("hidden");
      navElement.classList.add("show");
    }, 1);
  } else if (scrollY > 50 && !isScrollingUp) {
    setTimeout(() => {
      navElement.classList.add("hidden");
      navElement.classList.remove("show");
    }, 1);
  }
});

// navbar element script
window.addEventListener("resize", () => {
  const menuToggle = document.querySelectorAll(".menu-toggle");

  if (menuToggle) {
    if (window.innerWidth <= 1126) {
      menuToggle.forEach((element) => {
        element.style.display = "none";
      });
    } else {
      menuToggle.forEach((element) => {
        element.style.display = "block";
      });
    }
  }
});

window.dispatchEvent(new Event("resize"));

const toggleButton = document.querySelector(".leave-toggle");
const sidebarMenu = document.querySelector(".side-bar-menu");

document.getElementById("toggleSecondMenu").onclick = function () {
  let sidebarMenu = document.getElementById("secondMenu");
  let mainmenu = document.getElementById("mainmenu");
  let overlay = document.getElementById("overlay");

  if (window.innerWidth >= 1126) {
    sidebarMenu.style.display = "block";
    document.body.style.overflow = "hidden";
    overlay.style.display = "block";
  } else {
    mainmenu.style.display = "block";
    document.body.style.overflow = "hidden";
    overlay.style.display = "block";
  }
};

document.getElementById("overlay").onclick = function () {
  document.getElementById("secondMenu").style.display = "none";
  document.getElementById("mainmenu").style.display = "none";
  document.body.style.overflow = "auto";
  this.style.display = "none";
};

document.getElementById("closemainmenu").onclick = function () {
  let mainmenu = document.getElementById("mainmenu");
  mainmenu.style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = "auto";
};

document.getElementById("closeSecondMenu").onclick = function () {
  let mainmenu = document.getElementById("secondMenu");
  document.getElementById("overlay").style.display = "none";
  mainmenu.style.display = "none";
  document.body.style.overflow = "auto";
};

//end navbar script

//modulo three script
