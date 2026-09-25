// ========================================
// js/main.js
// Point d'entrée de index.html : charge les données,
// puis initialise les composants avec ces données.
// ========================================

async function init() {
  const grid = document.querySelector('.projects__grid');

  try {
    // 1. Attendre les données (peu importe leur source : voir data.js)
    const projects = await loadProjects();

    // 2. Une carte par projet, insérées en UNE seule fois dans la grille
    grid.innerHTML = projects.map(createProjectCard).join('');

    // 3. Initialiser les composants qui ont besoin des données
    setupModal(projects);
  } catch (error) {
    // Si le chargement échoue : message pour le visiteur, détail pour vous
    console.error(error);
    grid.innerHTML = '<p class="message">Les projets n’ont pas pu être chargés.</p>';
  }
}

init();

// ----- Même chose, version .then() -----
//
// function init() {
//   const grid = document.querySelector('.projects__grid');
//
//   loadProjects()
//     .then(projects => {
//       grid.innerHTML = projects.map(createProjectCard).join('');
//       setupModal(projects);
//     })
//     .catch(error => {
//       console.error(error);
//       grid.innerHTML = '<p class="message">Les projets n’ont pas pu être chargés.</p>';
//     });
// }
//
// init();
