const projectDetails = {
	biome: 'Exploration de formes organiques et de matières en modélisation 3D.',
	archipelago: 'Direction visuelle et interface web pour un univers éditorial fragmenté.',
	forma: 'Étude de volumes, de lumière et de textures pour une série d’objets 3D.',
	'nuit-polaire': 'Composition en mouvement inspirée par les longues nuits nordiques.',
	tessellate: 'Système graphique et interface web construits autour d’un motif répétitif.',
	echo: 'Identité visuelle et langage de formes pour une expérience numérique sonore.'
};

const modal = document.querySelector('.project-modal');
const modalTitle = modal.querySelector('#modal-title');
const modalDescription = modal.querySelector('.project-modal__description');
const closeModalButton = modal.querySelector('.project-modal__close');

document.querySelectorAll('.project-card__button').forEach((button) => {
	button.addEventListener('click', () => {
		const card = button.closest('.project-card');
		const projectName = card.dataset.project;
		modalTitle.textContent = card.querySelector('h2').textContent;
		modalDescription.textContent = projectDetails[projectName];
		modal.showModal();
	});
});

closeModalButton.addEventListener('click', () => modal.close());

modal.addEventListener('click', (event) => {
	if (event.target === modal) {
		modal.close();
	}
});

const navigationLinks = document.querySelectorAll('.site-nav__link');

navigationLinks.forEach((link) => {
	link.addEventListener('click', () => {
		navigationLinks.forEach((item) => item.classList.remove('site-nav__link--active'));
		link.classList.add('site-nav__link--active');
	});
});
