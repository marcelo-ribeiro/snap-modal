// Install SW
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

// Toolbar
// Handle Toolbar on scroll
const snapScroll = document.querySelector(".scroll");
const { toolbar: snapToolbar, content: snapContent } = snapScroll.children;
const handleScroll = () =>
  snapToolbar.classList.toggle(
    "toolbar--colapsed",
    snapContent.getBoundingClientRect().top > snapToolbar.offsetHeight
  );
snapScroll.addEventListener("scroll", handleScroll, { passive: true });

// Modal
let selectedModal = [];
const pageScroll = document.documentElement;

// Get all modals and add event listener to back history
const modalIO = new IntersectionObserver(([{ isIntersecting }]) => {
  console.log({ isIntersecting });

  const modal = selectedModal.at(-1);

  if (isIntersecting) {
  } else {
    modal?.classList.remove("active");
    selectedModal.pop();
  }

  if (!!location.hash) {
    history.back();
  }
});
document.querySelectorAll(".modal").forEach((modal) => modalIO.observe(modal));

// Open Modal
function openModal(event, modalId) {
  console.log({ event, modalId });
  const modal = document.querySelector(modalId);
  if (!modal) return;
  selectedModal.push(modal);
  modal?.classList.add("active");
  modal.scrollIntoView();
}

function closeModal() {
  pageScroll.scrollTo(0, 0);
}
