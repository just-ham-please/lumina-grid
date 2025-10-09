// assets/script.js
// Active link highlighting based on pathname
(function(){
  const base = "/lumina-grid"; // <- bei User-Seite oder eigener Domain später auf "" setzen
  document.querySelectorAll(".navlinks a").forEach(a=>{
    if (location.pathname === "/" && a.getAttribute("href")===`${base}/`) a.classList.add("active");
    else if (a.getAttribute("href") && location.pathname.startsWith(new URL(a.href).pathname)) {
      a.classList.add("active");
    }
  });
})();
