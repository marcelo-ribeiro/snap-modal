// Install SW
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(() => console.log("Service Worker Registered"));
}

// Init Scripts
const page = document.querySelector(".page");
const main = document.querySelector("main");
const { scroll } = page.children;
const { toolbar, content } = scroll.children;
const handleScroll = (event) => {
  toolbar.classList.toggle(
    "toolbar--colapsed",
    content.getBoundingClientRect().top > 0
  );
};
scroll.addEventListener("scroll", handleScroll, { passive: true });

const modal = document.querySelector("#modal-01");
const intersectionObserver = new IntersectionObserver(
  ([entry]) => {
    console.dir(entry);
    // modal.classList.toggle("modal--active", entry.isIntersecting);
    !entry.isIntersecting && !!location.hash && history.back();
  },
  {
    threshold: [0, 1],
  }
);
intersectionObserver.observe(modal);
