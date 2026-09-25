// ========================================
// js/data.js
// Le SEUL fichier qui change selon la source de données.
// Source ici : fichier JSON local (data/projects.json)
// ========================================

// ----- Version async / await -----
async function loadProjects() {
  // 1. Aller chercher le fichier (retourne une promesse)
  const response = await fetch('data/projects.json');

  // 2. Vérifier que la réponse est correcte (ex. 404 = fichier introuvable)
  if (!response.ok) {
    throw new Error(`Impossible de charger les projets (${response.status})`);
  }

  // 3. Convertir le texte JSON en tableau d'objets JavaScript
  const projects = await response.json();
  return projects;
}

// ----- Même chose, version .then() -----
// Pour l'essayer : commentez la fonction ci-dessus et décommentez celle-ci.
//
// function loadProjects() {
//   return fetch('data/projects.json')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Impossible de charger les projets (${response.status})`);
//       }
//       return response.json();
//     });
// }
