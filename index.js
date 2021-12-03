// Install SW
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(() => console.log("Service Worker Registered"))
    .catch((e) => console.log("Service Worker Error", e));
}

// Init Scripts
const page = document.querySelector(".page");
const main = document.querySelector("main");
const { scroll } = page.children;
const { toolbar, content } = scroll.children;
const handleScroll = (event) => {
  toolbar.classList.toggle(
    "toolbar--colapsed",
    content.getBoundingClientRect().top > toolbar.offsetHeight
  );
};
scroll.addEventListener("scroll", handleScroll, { passive: true });

// new IntersectionObserver(
//   ([entry]) => {
//     console.log({ content: entry });
//     content.style.overflow = entry.isIntersecting ? "auto" : "hidden";
//     content.style.overscrollBehavior = entry.isIntersecting
//       ? "contain"
//       : "auto";
//   },
//   {
//     threshold: [1],
//   }
// ).observe(content);

const modal = document.querySelector("#modal-01");
const intersectionObserver = new IntersectionObserver(
  ([entry]) => {
    console.dir(entry);
    !entry.isIntersecting && !!location.hash && history.back();
  },
  {
    threshold: [0, 1],
  }
);
modal && intersectionObserver.observe(modal);
