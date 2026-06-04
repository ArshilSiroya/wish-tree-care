// Ease-out: moves at a steady pace, then gently slows at the end (no slow start + sudden rush)
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

let activeScrollFrame = null;

export function smoothScrollToElement(element, options = {}) {
  if (!element || typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    element.scrollIntoView({ block: "start" });
    return;
  }

  if (activeScrollFrame) {
    cancelAnimationFrame(activeScrollFrame);
    activeScrollFrame = null;
  }

  const { duration = 1000 } = options;
  const scrollMarginTop =
    parseInt(window.getComputedStyle(element).scrollMarginTop, 10) || 0;

  const startY = window.scrollY;
  const targetY =
    element.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) return;

  const startTime = performance.now();

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      activeScrollFrame = requestAnimationFrame(step);
    } else {
      activeScrollFrame = null;
    }
  };

  activeScrollFrame = requestAnimationFrame(step);
}

export function smoothScrollToId(id, options) {
  const element = document.getElementById(id);
  smoothScrollToElement(element, options);
}
