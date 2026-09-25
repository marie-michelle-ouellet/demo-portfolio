// ========================================
// js/project.js
// Point d'entrée de project.html (option « multipages »).
// Lit l'id dans l'adresse, puis affiche le projet correspondant.
// ========================================

async function showProject() {
  const container = document.querySelector('.project');

  // 1. Lire l'id dans l'adresse : project.html?id=cafe-du-coin
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('id'); // "cafe-du-coin", ou null si absent

  try {
    // 2. Recharger les données : même fonction que sur la page d'accueil
    const projects = await loadProjects();

    // 3. Retrouver LE projet qui a cet id
    const project = projects.find(p => p.id === projectId);

    if (!project) {
      container.innerHTML = `
        <p class="message">Ce projet est introuvable.</p>
        <a href="index.html">Retour aux projets</a>
      `;
      return;
    }

    // 4. L'afficher
    document.title = `${project.title} | Portfolio`;

    container.innerHTML = `
      <a class="project__back" href="index.html">← Tous les projets</a>
      <h1 class="project__title">${project.title}</h1>
      <p class="project__meta">${project.category} · ${project.year}</p>
      <img class="project__image" src="${project.image}" alt="${project.title}">
      <p class="project__description">${project.description}</p>

      ${project.link ? `<p><a href="${project.link}" target="_blank">Voir en ligne</a></p>` : ''}

      ${project.gallery ? `
        <div class="project__gallery">
          ${project.gallery.map(url => `<img src="${url}" alt="${project.title}">`).join('')}
        </div>
      ` : ''}
    `;
  } catch (error) {
    console.error(error);
    container.innerHTML = '<p class="message">Le projet n’a pas pu être chargé.</p>';
  }
}

showProject();
