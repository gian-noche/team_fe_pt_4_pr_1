
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



// nav display block when clicked on #mainmenu
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded');
  let mainMenu = document.getElementById('mainmenu');
  if (mainMenu) {
      console.log('#mainmenu found');
      mainMenu.addEventListener('click', function(event) {
          console.log('Clicked #mainmenu', event);
          if (window.innerWidth <= 1126) {
              console.log('Viewport <= 1126');
              let nav = document.querySelector('.nav-fixed');
              if (nav) {
                  console.log('.nav-fixed found', nav);
                  nav.style.display = 'block';
              } else {
                  console.log('.nav-fixed not found');
              }
          }
      });
  } else {
      console.log('#mainmenu not found')

  }

})



document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded');
  let mainMenu = document.getElementById('mainmenu');
  if (mainMenu) {
      console.log('#mainmenu found');
      mainMenu.addEventListener('click', function(event) {
          console.log('Clicked #mainmenu', event);
          if (window.innerWidth <= 1126) {
              console.log('Viewport <= 1126');
              let nav = document.querySelector('.nav-fixed');
              if (nav) {
                  console.log('.nav-fixed found', nav);
                  nav.style.display = 'block';
              } else {
                  console.log('.nav-fixed not found');
              }
          }
      });
  } else {
      console.log('#mainmenu not found');
  }


  document.querySelectorAll('.menu-link').forEach(function(menuLink) {
    menuLink.addEventListener('click', function() {
      const svgElement = this.querySelector('.span-svg svg');
      if (svgElement) {
        svgElement.classList.toggle('rotate-svg');
      }
  

      const menuDropdown = this.nextElementSibling.querySelector('.menu-dropdown');
      if (menuDropdown) {
        menuDropdown.style.display = menuDropdown.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

});


// script to make visible the dropdown when arrow go up sidebar
document.addEventListener('DOMContentLoaded', function() {
  const spanSvgs = document.querySelectorAll('.span-svg-side');

  spanSvgs.forEach(spanSvg => {
    spanSvg.classList.add('initial-side');

    spanSvg.addEventListener('click', function() {
      const dropdown = this.closest('.side-item').querySelector('.side-dropdown');

      if (spanSvg.classList.contains('initial-side')) {
        spanSvg.classList.remove('initial-side');
        spanSvg.classList.add('rotate-side');
        dropdown.classList.add('show');
        dropdown.classList.add('visible');
      } else {
        spanSvg.classList.remove('rotate-side');
        spanSvg.classList.add('initial-side');
        dropdown.classList.remove('show');
        dropdown.classList.remove('visible');
      }
    });

    spanSvg.addEventListener('mouseenter', function() {
      const svg = this.querySelector('svg');
      svg.classList.add('rotate-side');
      svg.classList.remove('initial-side');
    });

    spanSvg.addEventListener('mouseleave', function() {
      const svg = this.querySelector('svg');
      if (!this.closest('.side-item').querySelector('.side-dropdown').classList.contains('show')) {
        svg.classList.remove('rotate-side');
        svg.classList.add('initial-side');
      }
    });
  });
});


// end navbar script



//modulo three script

// tabs svg functionality
const tabs = document.querySelectorAll(".tabs-container a")
const rightArrow = document.querySelector(".tabs-container .right-arrow svg")
const leftArrow = document.querySelector(".tabs-container .left-arrow svg")
const tabList = document.querySelector(".tabs-container ul")
const leftArrowContainer = document.querySelector(".tabs-container .left-arrow")
const rightArrowContainer = document.querySelector(".tabs-container .right-arrow")



const removeAllActiveClasses = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active")
  })
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeAllActiveClasses()
    tab.classList.add("active")
  })
})

const manageIcons = () => {
  if (tabList.scrollLeft >= 8) {
    leftArrowContainer.classList.add("active")
  } else {
    leftArrowContainer.classList.remove("active")
  }

  let maxScrollValue = tabList.scrollWidth - tabList.clientWidth - 8
  console.log("scroll width: ", tabList.scrollWidth)
  console.log("client width: ", tabList.clientWidth)

  if(tabList.scrollLeft >= maxScrollValue) {
    rightArrowContainer.classList.remove("active")
  } else {
    rightArrowContainer.classList.add("active")
  }

}

rightArrow.addEventListener("click", () => {
tabList.scrollLeft += 300
manageIcons()
})

leftArrow.addEventListener("click", () => {
  tabList.scrollLeft -= 300
  manageIcons()
  })

tabList.addEventListener("scroll", manageIcons)



// move tab to tab
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeAllActiveClasses();
    tab.classList.add("active");
    
    tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });
  tab.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    removeAllActiveClasses();
    tab.classList.add("active");
    
    tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });
});



// end moduloThree script
