document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // Get all anchor tags inside the navLinks
  const navLinkItems = navLinks.querySelectorAll("a");

  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "&times;";
  closeBtn.className = "close-nav";
  closeBtn.setAttribute("aria-label", "Close navigation");
  closeBtn.style.display = "none";
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "20px";
  closeBtn.style.left = "85%";
  closeBtn.style.fontSize = "3rem";
  closeBtn.style.background = "none";
  closeBtn.style.border = "none";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.zIndex = "1002";
  closeBtn.style.color = "rgb(243, 248, 244)";

  navLinks.insertBefore(closeBtn, navLinks.firstChild);

  function openMenu() {
    // Set only the link items to white
    navLinkItems.forEach(link => link.style.color = "white");
    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "fixed";
    navLinks.style.fontSize = "3rem"
    navLinks.style.top = "0";
    navLinks.style.left = "0";
    navLinks.style.height = "55vh";
    navLinks.style.width = "100vw";
    navLinks.style.background = "rgb(62, 150, 84)";
    navLinks.style.boxShadow = "2px 0 8px rgba(0, 0, 0, 0.08)";
    navLinks.style.alignItems = "flex-start";
    navLinks.style.justifyContent = "flex-start";
    navLinks.style.paddingTop = "70px";
    navLinks.style.zIndex = "1001";
    hamburger.style.display = "none";
    closeBtn.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    // Remove inline color style from nav link items
    navLinkItems.forEach(link => link.style.color = "");
    navLinks.style.background = "rgb(62, 150, 84)";
    navLinks.style.display = "";
    navLinks.style.position = "";
    navLinks.style.top = "";
    navLinks.style.left = "";
    navLinks.style.height = "";
    navLinks.style.width = "";
    navLinks.style.background = "";
    navLinks.style.boxShadow = "";
    navLinks.style.flexDirection = "";
    navLinks.style.alignItems = "";
    navLinks.style.justifyContent = "";
    navLinks.style.paddingTop = "";
    navLinks.style.zIndex = "";
    hamburger.style.display = "";
    closeBtn.style.display = "none";
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 769) {
      closeMenu();
    }
  });
});