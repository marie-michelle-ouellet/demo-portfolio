// ========================================
// js/components/project-card.js
// Composant : carte de projet
// Reçoit UN projet, retourne le HTML de SA carte.
// ========================================

function createProjectCard(project) {
  return `
    <article class="project-card">
      <img class="project-card__image" src="${project.image}" alt="${project.title}">

      <div class="project-card__content">
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__meta">${project.category} · ${project.year}</p>
        <p class="project-card__description">${project.description}</p>

        <div class="project-card__actions">
          <!-- Option one-pager : ouvre la modale -->
          <button class="project-card__button" data-id="${project.id}">Aperçu</button>

          <!-- Option multipages : mène vers project.html -->
          <a class="project-card__link" href="project.html?id=${project.id}">Page du projet</a>
        </div>
      </div>
    </article>
  `;
}
