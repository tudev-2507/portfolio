import { showSidebar } from './hamburgerMenu.js';
import { typeAnimation } from './typeAnimation.js';
import { intersectionObserver } from './intersectionObserver.js';
import { parallaxHero } from './parallaxHero.js';
import { initializeLanguage, setLanguageChangeHandler } from './localization.js';
import './animations.js';
import { load } from './load.js';

async function main() {
  showSidebar();
  intersectionObserver();
  parallaxHero();
  setLanguageChangeHandler(typeAnimation);
  const localePromise = initializeLanguage();
  await load();
  await localePromise;
  typeAnimation();
}
main();
