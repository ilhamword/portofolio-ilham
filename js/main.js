// ===== Main Entry =====
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initI18n } from './i18n.js';
import { initCertificatesModal } from './certificates.js';
import { initProjectDetailTabs } from './project-detail.js';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize i18n translations
  initI18n();

  // 2. Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 3. Initialize navigation
  initNavigation();

  // 4. Initialize scroll reveal animations
  initAnimations();

  // 5. Initialize certificate preview modal
  initCertificatesModal();

  // 6. Initialize project detail interactive tabs
  initProjectDetailTabs();

  // 7. Initialize hero console showcase tabs
  initHeroConsoleTabs();
});

// ===== Hero Console Interactive Showcase =====
function initHeroConsoleTabs() {
  const tabs = document.querySelectorAll('#heroConsoleTabs .console-tab');
  if (!tabs.length) return;

  const panes = {
    pln: document.getElementById('pane-pln'),
    inti: document.getElementById('pane-inti'),
    bbca: document.getElementById('pane-bbca')
  };

  let currentIndex = 0;
  const projectKeys = ['pln', 'inti', 'bbca'];
  let isHovered = false;

  function switchTab(targetKey) {
    tabs.forEach((tab) => {
      if (tab.getAttribute('data-project') === targetKey) {
        tab.classList.add('console-tab--active');
      } else {
        tab.classList.remove('console-tab--active');
      }
    });

    Object.keys(panes).forEach((k) => {
      if (panes[k]) {
        if (k === targetKey) {
          panes[k].classList.add('console-pane--active');
        } else {
          panes[k].classList.remove('console-pane--active');
        }
      }
    });

    currentIndex = projectKeys.indexOf(targetKey);
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const project = tab.getAttribute('data-project');
      if (project) {
        switchTab(project);
      }
    });
  });

  const consoleEl = document.querySelector('.hero-console');
  if (consoleEl) {
    consoleEl.addEventListener('mouseenter', () => { isHovered = true; });
    consoleEl.addEventListener('mouseleave', () => { isHovered = false; });
  }

  // Gentle auto-rotation every 7 seconds when not hovered
  setInterval(() => {
    if (!isHovered && document.visibilityState === 'visible') {
      currentIndex = (currentIndex + 1) % projectKeys.length;
      switchTab(projectKeys[currentIndex]);
    }
  }, 7000);
}
