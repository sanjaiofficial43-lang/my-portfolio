import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

/**
 * Initializes Lenis smooth scrolling and synchronizes it with GSAP ScrollTrigger
 */
export function initSmoothScroll() {
  if (typeof window === 'undefined') return null;

  // Check if reduced motion is preferred
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return null;
  }

  // Avoid multiple instances
  if (lenisInstance) {
    lenisInstance.destroy();
  }

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.8,
    infinite: false,
  });

  // Connect Lenis scroll to ScrollTrigger
  lenisInstance.on('scroll', () => {
    ScrollTrigger.update();
  });

  // Link GSAP ticker to Lenis requestAnimationFrame
  const tickerCallback = (time) => {
    if (lenisInstance) {
      lenisInstance.raf(time * 1000);
    }
  };

  gsap.ticker.add(tickerCallback);
  gsap.ticker.lagSmoothing(0);

  // Expose global clean-up
  window.__destroySmoothScroll = () => {
    gsap.ticker.remove(tickerCallback);
    if (lenisInstance) {
      lenisInstance.destroy();
      lenisInstance = null;
    }
  };

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}

/**
 * Smoothly scroll to a specific section selector or element
 */
export function scrollToSection(target, options = {}) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset: -50,
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      ...options,
    });
  } else {
    const element = typeof target === 'string' ? document.querySelector(target) : target;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
