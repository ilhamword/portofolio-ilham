// ===== Certificate Lightbox Modal Controller =====

export function initCertificatesModal() {
  const modal = document.getElementById('certModal');
  if (!modal) return;

  const modalImg = document.getElementById('certModalImg');
  const modalTitle = document.getElementById('certModalTitle');
  const modalSubtitle = document.getElementById('certModalSubtitle');
  const modalOpenBtn = document.getElementById('certModalOpenBtn');
  const modalClose = document.getElementById('certModalClose');
  const modalCloseBtn = document.getElementById('certModalCloseBtn');

  function openModal(src, title, issuer, pdfUrl) {
    if (modalImg) modalImg.src = src;
    if (modalTitle) modalTitle.textContent = title;
    if (modalSubtitle) modalSubtitle.textContent = issuer;
    if (modalOpenBtn) modalOpenBtn.href = pdfUrl || src;

    modal.classList.add('cert-modal--open');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    if (modalClose) modalClose.focus();
  }

  function closeModal() {
    modal.classList.remove('cert-modal--open');
    document.body.style.overflow = '';
    if (modalImg) modalImg.src = '';
  }

  // Attach to all certificate view buttons
  document.querySelectorAll('.cert-card__view-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const src = btn.getAttribute('data-cert-src') || '';
      const pdfUrl = btn.getAttribute('data-cert-pdf') || src;
      const title = btn.getAttribute('data-cert-title') || 'Certificate Preview';
      const issuer = btn.getAttribute('data-cert-issuer') || 'Verified Credential';
      openModal(src, title, issuer, pdfUrl);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);

  // Close on backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('cert-modal--open')) {
      closeModal();
    }
  });
}
