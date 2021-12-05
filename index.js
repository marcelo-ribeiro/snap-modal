// Install SW
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(() => console.log("Service Worker Registered"))
    .catch((e) => console.log("Service Worker Error", e));
}

// Toolbar
// Handle Toolbar on scroll
const scroll = document.querySelector(".scroll");
const { toolbar, content } = scroll.children;
const handleScroll = () => {
  toolbar.classList.toggle(
    "toolbar--colapsed",
    content.getBoundingClientRect().top > toolbar.offsetHeight
  );
};
scroll.addEventListener("scroll", handleScroll, { passive: true });

// Modal
// Get all modals and add event listener to back history
const intersectionObserver = new IntersectionObserver(
  ([entry]) => {
    console.log(entry);
    if (!entry.isIntersecting && !!location.hash) {
      console.log("if");
      history.back();
    }
  },
  {
    threshold: [1],
  }
);
document
  .querySelectorAll(".modal")
  .forEach((modal) => intersectionObserver.observe(modal));
