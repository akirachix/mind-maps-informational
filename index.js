document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = `
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round"/>
  </svg>
`;
    closeBtn.className = "close-nav";
    closeBtn.setAttribute("aria-label", "Close navigation");
    closeBtn.style.display = "none";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "20px";
    closeBtn.style.left = "85%";
    closeBtn.style.fontSize = "2.5rem";
    closeBtn.style.background = "none";
    closeBtn.style.border = "none";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.zIndex = "1002";
    navLinks.insertBefore(closeBtn, navLinks.firstChild);
    function openMenu() {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "fixed";
      navLinks.style.top = "0";
      navLinks.style.left = "0";
      navLinks.style.height = "60vh";
      navLinks.style.width = "100vw";
      navLinks.style.background = "#205d36";
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


