const navbarFunc = () => {
  const toggleSearchIcon = () => {
    const searchIcon = document.querySelector("#search-bar-icon i");
    searchIcon.addEventListener("click", () => {
      if (searchIcon.classList.contains("fa-close")) {
        console.log("one");
        searchIcon.classList.remove("fa-close");
        searchIcon.classList.add("fa-search");
      } else {
        console.log("two");
        searchIcon.classList.remove("fa-search");
        searchIcon.classList.add("fa-close");
      }
    });
  };

  const handleScroll = () => {};

  toggleSearchIcon();
  handleScroll();
};

export default navbarFunc;
