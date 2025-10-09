// Basis-Konstante für Projektseiten:
const BASE = "/lumina-grid"; // bei eigener Domain später auf "" setzen

// Active Link
document.querySelectorAll(".navlinks a").forEach(a=>{
  const href = new URL(a.href).pathname;
  if (location.pathname === BASE + "/" && href.endsWith(BASE + "/")) a.classList.add("active");
  else if (href !== BASE + "/" && location.pathname.startsWith(href)) a.classList.add("active");
});

// Scroll-Reveal
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

// Sticky header mini-animation
let lastY = scrollY;
addEventListener("scroll", ()=>{
  const h = document.querySelector(".header");
  if (!h) return;
  const up = scrollY < lastY;
  h.classList.toggle("shrink", !up && scrollY > 8);
  lastY = scrollY;
});

// Theme toggle (persisted)
const key="lg-theme";
const btn = document.querySelector("[data-toggle-theme]");
if (localStorage.getItem(key)==="light") document.body.classList.add("light");
btn?.addEventListener("click", ()=>{
  document.body.classList.toggle("light");
  localStorage.setItem(key, document.body.classList.contains("light") ? "light" : "dark");
});
