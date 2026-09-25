// ========================================
// js/components/modal.js
// Composant : modale (option « one-pager avec modale »)
// Une seule modale dans index.html, réutilisée pour tous les projets.
// ========================================

function setupModal(projects) {
  const grid = document.querySelector('.projects__grid');
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal__content');
  const closeButton = document.querySelector('.modal__close');

  // Délégation d'événements : UN seul écouteur sur la grille,
  // plutôt qu'un par carte (les cartes sont générées en JS).
  grid.addEventListener('click', (event) => {
    const button = event.target.closest('.project-card__button');
    if (!button) return; // le clic n'était pas sur un bouton « Aperçu »

    // Retrouver le projet cliqué grâce à son id (attribut data-id)
    const project = projects.find(p => p.id === button.dataset.id);

    modalContent.innerHTML = `
      <img class="modal__image" src="${project.image}" alt="${project.title}">
      <p class="modal__meta">${project.category} · ${project.year}</p>
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      ${project.link ? `<a href="${project.link}" target="_blank">Voir en ligne</a>` : ''}
    `;

    modal.showModal(); // ouvre la modale native (Échap la ferme aussi)
  });

  closeButton.addEventListener('click', () => modal.close());
}
