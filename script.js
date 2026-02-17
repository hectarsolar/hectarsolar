// DARK MODE
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// MOBILE MENU
const sidebar = document.getElementById("sidebar");
document.getElementById("menu-btn").onclick = () => {
  sidebar.classList.toggle("open");
};

// COLLAPSIBLE TOP SECTION
document.querySelector(".collapse-toggle").onclick = function () {
  this.nextElementSibling.classList.toggle("show");
};
