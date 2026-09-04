// ===== Project Detail Interactive Features =====
import { getCurrentLang, translations } from './i18n.js';

export function initProjectDetailTabs() {
  // 1. Hero Horizon Tab Switcher
  const heroTabs = document.querySelectorAll('#bbcaHeroTabs .horizon-tab');
  const heroImg = document.getElementById('bbcaHeroChartImg');
  const heroMetric = document.getElementById('bbcaHeroMetric');

  if (heroTabs.length > 0 && heroImg) {
    heroTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        heroTabs.forEach((t) => t.classList.remove('horizon-tab--active'));
        tab.classList.add('horizon-tab--active');

        const newSrc = tab.getAttribute('data-src');
        const hybrid = tab.getAttribute('data-hybrid') || '1.53%';
        const baseline = tab.getAttribute('data-baseline') || '2.10%';

        heroImg.style.opacity = '0.3';
        setTimeout(() => {
          heroImg.src = newSrc;
          heroImg.style.opacity = '1';
        }, 120);

        if (heroMetric) {
          heroMetric.innerHTML = `
            <span style="color: #2D6A4F;">Hybrid MAPE: <strong>${hybrid}</strong></span>
            <span style="color: #64748B;">Baseline: <strong>${baseline}</strong></span>
          `;
        }
      });
    });
  }

  // 2. Gallery Horizon Tab Switcher
  const galTabs = document.querySelectorAll('#bbcaGalleryTabs .horizon-tab');
  const galImg = document.getElementById('bbcaGalleryChartImg');

  if (galTabs.length > 0 && galImg) {
    galTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        galTabs.forEach((t) => t.classList.remove('horizon-tab--active'));
        tab.classList.add('horizon-tab--active');

        const newSrc = tab.getAttribute('data-src');
        galImg.style.opacity = '0.3';
        setTimeout(() => {
          galImg.src = newSrc;
          galImg.style.opacity = '1';
        }, 120);
      });
    });
  }

  // 3. Architecture Diagram Tab Switcher
  const archTabs = document.querySelectorAll('#bbcaArchTabs .horizon-tab');
  const archImg = document.getElementById('bbcaArchDiagramImg');
  const archCaption = document.getElementById('bbcaArchCaption');
  const archBadge = document.getElementById('bbcaArchBadge');

  if (archTabs.length > 0 && archImg) {
    archTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        archTabs.forEach((t) => t.classList.remove('horizon-tab--active'));
        tab.classList.add('horizon-tab--active');

        const newSrc = tab.getAttribute('data-src');
        const badge = tab.getAttribute('data-badge') || 'Architecture Diagram';
        const isHybrid = newSrc.includes('hybrid');
        const currentLang = getCurrentLang();
        const dict = translations[currentLang] || translations.en;

        archImg.style.opacity = '0.3';
        setTimeout(() => {
          archImg.src = newSrc;
          archImg.style.opacity = '1';
        }, 120);

        if (archBadge) archBadge.textContent = badge;
        if (archCaption) {
          const key = isHybrid ? 'bbca.arch.caption_hybrid' : 'bbca.arch.caption_baseline';
          archCaption.setAttribute('data-i18n-html', key);
          archCaption.innerHTML = dict[key] || '';
        }
      });
    });
  }

  // 4. PLN Hero Tab Switcher
  const plnHeroTabs = document.querySelectorAll('#plnHeroTabs .horizon-tab');
  const plnHeroImg = document.getElementById('plnHeroChartImg');
  const plnHeroCaption = document.getElementById('plnHeroCaption');
  const plnHeroBadge = document.getElementById('plnHeroBadge');

  if (plnHeroTabs.length > 0 && plnHeroImg) {
    plnHeroTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        plnHeroTabs.forEach((t) => t.classList.remove('horizon-tab--active'));
        tab.classList.add('horizon-tab--active');

        const newSrc = tab.getAttribute('data-src');
        const badge = tab.getAttribute('data-badge') || 'Live Preview';
        const captionKey = tab.getAttribute('data-caption-key') || 'pln.hero.caption_dashboard';
        const currentLang = getCurrentLang();
        const dict = translations[currentLang] || translations.en;

        plnHeroImg.style.opacity = '0.3';
        setTimeout(() => {
          plnHeroImg.src = newSrc;
          plnHeroImg.style.opacity = '1';
        }, 120);

        if (plnHeroBadge) plnHeroBadge.textContent = badge;
        if (plnHeroCaption) {
          plnHeroCaption.setAttribute('data-i18n-html', captionKey);
          plnHeroCaption.innerHTML = dict[captionKey] || '';
        }
      });
    });
  }

  // 5. PLN Pipeline Showcase Tab Switcher
  const plnPipeTabs = document.querySelectorAll('#plnPipeTabs .horizon-tab');
  const plnPipeImg = document.getElementById('plnPipeImg');
  const plnPipeCaption = document.getElementById('plnPipeCaption');
  const plnPipeBadge = document.getElementById('plnPipeBadge');
  const plnPipeTags = document.getElementById('plnPipeTags');

  if (plnPipeTabs.length > 0 && plnPipeImg) {
    plnPipeTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        plnPipeTabs.forEach((t) => t.classList.remove('horizon-tab--active'));
        tab.classList.add('horizon-tab--active');

        const newSrc = tab.getAttribute('data-src');
        const badge = tab.getAttribute('data-badge') || 'Pipeline Step';
        const captionKey = tab.getAttribute('data-caption-key') || 'pln.pipe.cap_excel';
        const tags = tab.getAttribute('data-tags') || '';
        const currentLang = getCurrentLang();
        const dict = translations[currentLang] || translations.en;

        plnPipeImg.style.opacity = '0.3';
        setTimeout(() => {
          plnPipeImg.src = newSrc;
          plnPipeImg.style.opacity = '1';
        }, 120);

        if (plnPipeBadge) plnPipeBadge.textContent = badge;
        if (plnPipeCaption) {
          plnPipeCaption.setAttribute('data-i18n-html', captionKey);
          plnPipeCaption.innerHTML = dict[captionKey] || '';
        }
        if (plnPipeTags && tags) {
          const tagArray = tags.split(',');
          plnPipeTags.innerHTML = tagArray
            .map((t, idx) => `<span class="tag ${idx === 0 ? 'tag--accent' : ''}" style="font-size: 0.68rem; padding: 2px 8px;">${t.trim()}</span>`)
            .join('');
        }
      });
    });
  }

  // 6. INTI UMPROP Hero Tab Switcher
  const intiHeroTabs = document.querySelectorAll('#intiHeroTabs .horizon-tab');
  const intiHeroImg = document.getElementById('intiHeroImg');
  const intiHeroCaption = document.getElementById('intiHeroCaption');
  const intiHeroBadge = document.getElementById('intiHeroBadge');

  if (intiHeroTabs.length > 0 && intiHeroImg) {
    intiHeroTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        intiHeroTabs.forEach((t) => t.classList.remove('horizon-tab--active'));
        tab.classList.add('horizon-tab--active');

        const newSrc = tab.getAttribute('data-src');
        const badge = tab.getAttribute('data-badge') || 'Live Preview';
        const captionKey = tab.getAttribute('data-caption-key') || 'inti.hero.caption_dashboard';
        const currentLang = getCurrentLang();
        const dict = translations[currentLang] || translations.en;

        intiHeroImg.style.opacity = '0.3';
        setTimeout(() => {
          intiHeroImg.src = newSrc;
          intiHeroImg.style.opacity = '1';
        }, 120);

        if (intiHeroBadge) intiHeroBadge.textContent = badge;
        if (intiHeroCaption) {
          intiHeroCaption.setAttribute('data-i18n-html', captionKey);
          intiHeroCaption.innerHTML = dict[captionKey] || '';
        }
      });
    });
  }

  // 7. INTI UMPROP Pipeline Showcase Tab Switcher
  const intiPipeTabs = document.querySelectorAll('#intiPipeTabs .horizon-tab');
  const intiPipeImg = document.getElementById('intiPipeImg');
  const intiPipeCaption = document.getElementById('intiPipeCaption');
  const intiPipeBadge = document.getElementById('intiPipeBadge');
  const intiPipeTags = document.getElementById('intiPipeTags');

  if (intiPipeTabs.length > 0 && intiPipeImg) {
    intiPipeTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        intiPipeTabs.forEach((t) => t.classList.remove('horizon-tab--active'));
        tab.classList.add('horizon-tab--active');

        const newSrc = tab.getAttribute('data-src');
        const badge = tab.getAttribute('data-badge') || 'Fitur Sistem';
        const captionKey = tab.getAttribute('data-caption-key') || 'inti.pipe.cap_login';
        const tags = tab.getAttribute('data-tags') || '';
        const currentLang = getCurrentLang();
        const dict = translations[currentLang] || translations.en;

        intiPipeImg.style.opacity = '0.3';
        setTimeout(() => {
          intiPipeImg.src = newSrc;
          intiPipeImg.style.opacity = '1';
        }, 120);

        if (intiPipeBadge) intiPipeBadge.textContent = badge;
        if (intiPipeCaption) {
          intiPipeCaption.setAttribute('data-i18n-html', captionKey);
          intiPipeCaption.innerHTML = dict[captionKey] || '';
        }
        if (intiPipeTags && tags) {
          const tagArray = tags.split(',');
          intiPipeTags.innerHTML = tagArray
            .map((t, idx) => `<span class="tag ${idx === 0 ? 'tag--accent' : ''}" style="font-size: 0.68rem; padding: 2px 8px;">${t.trim()}</span>`)
            .join('');
        }
      });
    });
  }

  // 8. BBCA Stock Pipeline Showcase Tab Switcher
  const bbcaPipeTabs = document.querySelectorAll('#bbcaPipeTabs .horizon-tab');
  const bbcaPipeImg = document.getElementById('bbcaPipeImg');
  const bbcaPipeCaption = document.getElementById('bbcaPipeCaption');
  const bbcaPipeBadge = document.getElementById('bbcaPipeBadge');
  const bbcaPipeTags = document.getElementById('bbcaPipeTags');
  const bbcaPipeHorizonContainer = document.getElementById('bbcaPipeHorizonContainer');
  const bbcaPipeSubTabs = document.querySelectorAll('#bbcaPipeSubHorizonTabs .horizon-tab');
  const bbcaPipeHorizonMetric = document.getElementById('bbcaPipeHorizonMetric');

  if (bbcaPipeTabs.length > 0 && bbcaPipeImg) {
    bbcaPipeTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        bbcaPipeTabs.forEach((t) => t.classList.remove('horizon-tab--active'));
        tab.classList.add('horizon-tab--active');

        const newSrc = tab.getAttribute('data-src');
        const badge = tab.getAttribute('data-badge') || 'Pipeline Step';
        const captionKey = tab.getAttribute('data-caption-key') || 'bbca.pipe.cap_price';
        const tags = tab.getAttribute('data-tags') || '';
        const currentLang = getCurrentLang();
        const dict = translations[currentLang] || translations.en;

        const isHorizonTab = newSrc.includes('Actual_vs_Predicted');
        if (bbcaPipeHorizonContainer) {
          bbcaPipeHorizonContainer.style.display = isHorizonTab ? 'flex' : 'none';
        }

        bbcaPipeImg.style.opacity = '0.3';
        setTimeout(() => {
          bbcaPipeImg.src = newSrc;
          bbcaPipeImg.style.opacity = '1';
        }, 120);

        if (bbcaPipeBadge) bbcaPipeBadge.textContent = badge;
        if (bbcaPipeCaption) {
          bbcaPipeCaption.setAttribute('data-i18n-html', captionKey);
          bbcaPipeCaption.innerHTML = dict[captionKey] || '';
        }
        if (bbcaPipeTags && tags) {
          const tagArray = tags.split(',');
          bbcaPipeTags.innerHTML = tagArray
            .map((t, idx) => `<span class="tag ${idx === 0 ? 'tag--accent' : ''}" style="font-size: 0.68rem; padding: 2px 8px;">${t.trim()}</span>`)
            .join('');
        }
      });
    });
  }

  // Multi-Horizon Sub-Tabs switcher inside Tab 6
  if (bbcaPipeSubTabs.length > 0 && bbcaPipeImg) {
    bbcaPipeSubTabs.forEach((subTab) => {
      subTab.addEventListener('click', (e) => {
        e.stopPropagation();
        bbcaPipeSubTabs.forEach((t) => t.classList.remove('horizon-tab--active'));
        subTab.classList.add('horizon-tab--active');

        const subSrc = subTab.getAttribute('data-src');
        const horizon = subTab.getAttribute('data-horizon') || 'H+1';
        const hybrid = subTab.getAttribute('data-hybrid') || '1.53%';
        const baseline = subTab.getAttribute('data-baseline') || '2.10%';

        bbcaPipeImg.style.opacity = '0.3';
        setTimeout(() => {
          bbcaPipeImg.src = subSrc;
          bbcaPipeImg.style.opacity = '1';
        }, 120);

        if (bbcaPipeBadge) {
          bbcaPipeBadge.textContent = `6. Proyeksi Multi-Horizon (${horizon})`;
        }
        if (bbcaPipeHorizonMetric) {
          bbcaPipeHorizonMetric.innerHTML = `Hybrid MAPE: <strong>${hybrid}</strong> | Baseline: <strong>${baseline}</strong>`;
        }
      });
    });
  }

  // 9. eKYC Hero Tab Switcher
  const ekycHeroTabs = document.querySelectorAll('#ekycHeroTabs .horizon-tab');
  const ekycHeroImg = document.getElementById('ekycHeroImg');
  const ekycHeroCaption = document.getElementById('ekycHeroCaption');
  const ekycHeroBadge = document.getElementById('ekycHeroBadge');

  if (ekycHeroTabs.length > 0 && ekycHeroImg) {
    ekycHeroTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        ekycHeroTabs.forEach((t) => t.classList.remove('horizon-tab--active'));
        tab.classList.add('horizon-tab--active');

        const newSrc = tab.getAttribute('data-src');
        const badge = tab.getAttribute('data-badge') || 'Live Preview';
        const captionKey = tab.getAttribute('data-caption-key') || 'ekyc.hero.caption_admin';
        const currentLang = getCurrentLang();
        const dict = translations[currentLang] || translations.en;

        ekycHeroImg.style.opacity = '0.3';
        setTimeout(() => {
          ekycHeroImg.src = newSrc;
          ekycHeroImg.style.opacity = '1';
        }, 120);

        if (ekycHeroBadge) ekycHeroBadge.textContent = badge;
        if (ekycHeroCaption) {
          ekycHeroCaption.setAttribute('data-i18n-html', captionKey);
          ekycHeroCaption.innerHTML = dict[captionKey] || '';
        }
      });
    });
  }

  // 10. eKYC Pipeline Showcase Tab Switcher
  const ekycPipeTabs = document.querySelectorAll('#ekycPipeTabs .horizon-tab');
  const ekycPipeImg = document.getElementById('ekycPipeImg');
  const ekycPipeCaption = document.getElementById('ekycPipeCaption');
  const ekycPipeBadge = document.getElementById('ekycPipeBadge');
  const ekycPipeTags = document.getElementById('ekycPipeTags');

  if (ekycPipeTabs.length > 0 && ekycPipeImg) {
    ekycPipeTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        ekycPipeTabs.forEach((t) => t.classList.remove('horizon-tab--active'));
        tab.classList.add('horizon-tab--active');

        const newSrc = tab.getAttribute('data-src');
        const badge = tab.getAttribute('data-badge') || 'Pipeline Step';
        const captionKey = tab.getAttribute('data-caption-key') || 'ekyc.pipe.cap_selfie';
        const tags = tab.getAttribute('data-tags') || '';
        const currentLang = getCurrentLang();
        const dict = translations[currentLang] || translations.en;

        ekycPipeImg.style.opacity = '0.3';
        setTimeout(() => {
          ekycPipeImg.src = newSrc;
          ekycPipeImg.style.opacity = '1';
        }, 120);

        if (ekycPipeBadge) ekycPipeBadge.textContent = badge;
        if (ekycPipeCaption) {
          ekycPipeCaption.setAttribute('data-i18n-html', captionKey);
          ekycPipeCaption.innerHTML = dict[captionKey] || '';
        }
        if (ekycPipeTags && tags) {
          const tagArray = tags.split(',');
          ekycPipeTags.innerHTML = tagArray
            .map((t, idx) => `<span class="tag ${idx === 0 ? 'tag--accent' : ''}" style="font-size: 0.68rem; padding: 2px 8px;">${t.trim()}</span>`)
            .join('');
        }
      });
    });
  }

  // 11. eKYC RAG Copilot Tab Switcher
  const ekycRagTabs = document.querySelectorAll('#ekycRagTabs .horizon-tab');
  const ekycRagImg = document.getElementById('ekycRagImg');
  const ekycRagCaption = document.getElementById('ekycRagCaption');
  const ekycRagBadge = document.getElementById('ekycRagBadge');
  const ekycRagTags = document.getElementById('ekycRagTags');

  if (ekycRagTabs.length > 0 && ekycRagImg) {
    ekycRagTabs.forEach((tab) => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        ekycRagTabs.forEach((t) => t.classList.remove('horizon-tab--active'));
        tab.classList.add('horizon-tab--active');

        const newSrc = tab.getAttribute('data-src');
        const badge = tab.getAttribute('data-badge') || 'RAG Assistant';
        const captionKey = tab.getAttribute('data-caption-key') || 'ekyc.rag.cap_kb';
        const tags = tab.getAttribute('data-tags') || '';
        const currentLang = getCurrentLang();
        const dict = translations[currentLang] || translations.en;

        ekycRagImg.style.opacity = '0.3';
        setTimeout(() => {
          ekycRagImg.src = newSrc;
          ekycRagImg.style.opacity = '1';
        }, 120);

        if (ekycRagBadge) ekycRagBadge.textContent = badge;
        if (ekycRagCaption) {
          ekycRagCaption.setAttribute('data-i18n-html', captionKey);
          ekycRagCaption.innerHTML = dict[captionKey] || '';
        }
        if (ekycRagTags && tags) {
          const tagArray = tags.split(',');
          ekycRagTags.innerHTML = tagArray
            .map((t, idx) => `<span class="tag ${idx === 0 ? 'tag--accent' : ''}" style="font-size: 0.68rem; padding: 2px 8px;">${t.trim()}</span>`)
            .join('');
        }
      });
    });
  }

  // 12. Initialize Image Lightbox for project screenshots
  initImageLightbox();
}

// ===== Universal Project Image Lightbox Modal =====
export function initImageLightbox() {
  const modal = document.getElementById('imageModal');
  if (!modal) return;

  const modalImg = document.getElementById('imageModalImg');
  const modalTitle = document.getElementById('imageModalTitle');
  const modalDesc = document.getElementById('imageModalDesc');
  const modalClose = document.getElementById('imageModalClose');

  function openImage(src, title, desc) {
    if (!src) return;
    if (modalImg) modalImg.src = src;
    if (modalTitle) modalTitle.textContent = title || '';
    if (modalDesc) modalDesc.textContent = desc || '';
    modal.classList.add('image-modal--open');
    document.body.style.overflow = 'hidden';
  }

  function closeImage() {
    modal.classList.remove('image-modal--open');
    document.body.style.overflow = '';
  }

  // 1. Pipeline & RAG split view image (left side only)
  const pipeShowcases = document.querySelectorAll('.pipe-showcase-left');
  pipeShowcases.forEach((left) => {
    left.style.cursor = 'zoom-in';
    left.addEventListener('click', (e) => {
      if (e.target.closest('button, a, .horizon-tab, .stock-chart-interactive__tabs, .pipe-showcase-right')) {
        return;
      }
      const img = left.querySelector('img');
      if (!img) return;

      let title = '';
      let desc = '';

      const ekycCap = document.getElementById('ekycPipeCaption');
      const ekycBdg = document.getElementById('ekycPipeBadge');
      const ekycRagCap = document.getElementById('ekycRagCaption');
      const ekycRagBdg = document.getElementById('ekycRagBadge');
      const plnCap = document.getElementById('plnPipeCaption');
      const plnBdg = document.getElementById('plnPipeBadge');
      const intiCap = document.getElementById('intiPipeCaption');
      const intiBdg = document.getElementById('intiPipeBadge');
      const bbcaCap = document.getElementById('bbcaPipeCaption');
      const bbcaBdg = document.getElementById('bbcaPipeBadge');

      if (left.contains(document.getElementById('ekycPipeImg'))) {
        title = ekycBdg ? ekycBdg.textContent : 'e-KYC Operational Step';
        desc = ekycCap ? ekycCap.innerText : '';
      } else if (left.contains(document.getElementById('ekycRagImg'))) {
        title = ekycRagBdg ? ekycRagBdg.textContent : 'AI Compliance Copilot';
        desc = ekycRagCap ? ekycRagCap.innerText : '';
      } else if (left.contains(document.getElementById('bbcaPipeImg'))) {
        title = bbcaBdg ? bbcaBdg.textContent : 'BBCA Pipeline Step';
        desc = bbcaCap ? bbcaCap.innerText : '';
      } else if (left.contains(document.getElementById('intiPipeImg'))) {
        title = intiBdg ? intiBdg.textContent : 'INTI System Step';
        desc = intiCap ? intiCap.innerText : '';
      } else if (left.contains(document.getElementById('plnPipeImg'))) {
        title = plnBdg ? plnBdg.textContent : 'PLN Pipeline Step';
        desc = plnCap ? plnCap.innerText : '';
      } else {
        title = img.alt || 'System Screenshot';
      }

      openImage(img.src, title, desc);
    });
  });

  // 2. Standalone Preview Windows (e.g. Architecture Diagrams or Hero Preview without inner tabs)
  const previewBodies = document.querySelectorAll('.preview-window__body');
  previewBodies.forEach((body) => {
    // If it contains tabs or a split showcase, DO NOT attach zoom-in to the entire window container
    if (body.querySelector('.pipe-showcase-split, .stock-chart-interactive__tabs, .horizon-tab')) {
      body.style.cursor = 'default';
      return;
    }
    body.style.cursor = 'zoom-in';
    body.addEventListener('click', (e) => {
      if (e.target.closest('button, a, .horizon-tab, .stock-chart-interactive__tabs')) {
        return;
      }
      const img = body.querySelector('img');
      if (!img) return;

      const titleEl = body.closest('.preview-window')?.querySelector('.preview-window__title');
      const captionEl = body.nextElementSibling;
      const title = titleEl ? titleEl.textContent : (img.alt || 'Architecture Diagram');
      const desc = captionEl ? captionEl.innerText : '';
      openImage(img.src, title, desc);
    });
  });

  // 3. Gallery Cards (e.g. BBCA Project Gallery)
  const galleryCards = document.querySelectorAll('.gallery-card');
  galleryCards.forEach((card) => {
    const frame = card.querySelector('.gallery-card__frame') || card;
    frame.style.cursor = 'zoom-in';
    frame.addEventListener('click', (e) => {
      if (e.target.closest('button, a, .horizon-tab, .stock-chart-interactive__tabs')) {
        return;
      }
      const img = frame.querySelector('img');
      if (!img) return;

      const titleEl = card.querySelector('.gallery-card__title');
      const descEl = card.querySelector('.gallery-card__desc');
      const title = titleEl ? titleEl.textContent : (img.alt || 'Project Artifact');
      const desc = descEl ? descEl.textContent : '';
      openImage(img.src, title, desc);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeImage);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeImage();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('image-modal--open')) {
      closeImage();
    }
  });
}
