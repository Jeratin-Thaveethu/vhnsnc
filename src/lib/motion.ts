import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Buttery-smooth inertia scrolling, wired into GSAP's ticker so ScrollTrigger stays in sync. */
export function initSmoothScroll() {
  if (prefersReducedMotion()) return null;

  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

/** Fades/slides every `.reveal-up`/`.reveal-fade` element in as it enters the viewport. */
export function initScrollReveal() {
  const reduced = prefersReducedMotion();
  const targets = document.querySelectorAll<HTMLElement>(".reveal-up, .reveal-fade");

  targets.forEach((el) => {
    if (reduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });
  });
}

/** Count-up animation for stat numbers, triggered once the element scrolls into view. */
export function initStatCounters() {
  const reduced = prefersReducedMotion();
  const counters = document.querySelectorAll<HTMLElement>("[data-counter]");

  counters.forEach((el) => {
    const target = Number(el.dataset.counter ?? "0");
    if (reduced) {
      el.textContent = target.toLocaleString();
      return;
    }
    const counter = { value: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(counter.value).toLocaleString();
          },
        });
      },
    });
  });
}
