// Install SW
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service Worker Registered");
  });
}

// Init Scripts
const page = document.querySelector(".page");
const { scroll } = page.children;
const { toolbar, content } = scroll.children;
const handleScroll = (event) => {
  toolbar.classList.toggle(
    "toolbar--colapsed",
    content.getBoundingClientRect().top > 0
  );
};
scroll.addEventListener("scroll", handleScroll, { passive: true });
