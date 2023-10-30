const sidebar = document.querySelector(".side-bar");
const sidebarOverlay = document.querySelector(".side-bar-overlay");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // console.log("down");
    sidebar.classList.add("side-bar--hidden");
    sidebarOverlay.classList.add("side-bar--hidden");
  } else {
    // console.log("up");
    sidebar.classList.remove("side-bar--hidden");
    sidebarOverlay.classList.remove("side-bar--hidden");
  }
});
