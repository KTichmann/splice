$(document).foundation();

const navbarFunc = () => {
  const toggleSearchIcon = () => {
    const searchIcon = document.querySelector("#search-bar-icon i");
    searchIcon.addEventListener("click", () => {
      if (searchIcon.classList.contains("fa-close")) {
        searchIcon.classList.remove("fa-close");
        searchIcon.classList.add("fa-search");
      } else {
        searchIcon.classList.remove("fa-search");
        searchIcon.classList.add("fa-close");
      }
    });
  };

  const handleScroll = () => {
    const toolbar = document.getElementById("toolbar-wrapper");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        toolbar.classList.add("fixed");
      } else {
        toolbar.classList.remove("fixed");
      }

      const menu = document.getElementById("main-menu-wrapper");
      if (window.scrollY < 70) {
        menu.classList.remove("fixed");
      } else {
        menu.classList.add("fixed");
      }
    });
  };

  toggleSearchIcon();
  handleScroll();
};

$(document).ready(function() {
  navbarFunc();
});
