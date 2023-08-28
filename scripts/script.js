// Fonction pour basculer l'affichage du menu déroulant
const toggleDropdown = (dropdownMenu, action) => {
  dropdownMenu.classList[action]('show');
};

// Fonction pour planifier la fermeture du menu déroulant
const scheduleDropdownClose = (button, timer) => {
  return setTimeout(() => {
    const dropdownMenu = button.nextElementSibling;
    toggleDropdown(dropdownMenu, 'remove');
  }, 300);
};

// Fonction pour fermer tous les menus déroulants
const closeAllDropdowns = () => {
  document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
    menu.classList.remove('show');
  });
};

// Sélectionner tous les boutons qui déclenchent les menus déroulants
const dropdownButtons = document.querySelectorAll('.dropdown-button');

// Boucle sur chaque bouton
dropdownButtons.forEach(button => {
  let timer; // Timer pour la fermeture programmée
  const dropdownMenu = button.nextElementSibling; // Le menu déroulant associé au bouton

  // Fonction pour annuler la fermeture programmée
  const cancelScheduledClose = () => {
    clearTimeout(timer);
  };

  // Fonction pour les actions communes de 'mouseout'
  const commonMouseOutAction = () => {
    cancelScheduledClose();
    timer = scheduleDropdownClose(button);
  };

  // Ajouter des écouteurs d'événements pour les actions de la souris
  button.addEventListener('mouseover', () => {
    closeAllDropdowns(); // Fermer tous les autres menus déroulants
    cancelScheduledClose();
    toggleDropdown(dropdownMenu, 'add'); // Ouvrir ce menu
  });

  button.addEventListener('mouseout', commonMouseOutAction); // Fermer ce menu si la souris sort
  dropdownMenu.addEventListener('mouseover', cancelScheduledClose); // Annuler la fermeture si la souris entre
  dropdownMenu.addEventListener('mouseout', commonMouseOutAction); // Fermer si la souris sort
});




// 

//BODY/ MODULAIRE

//
const navButtons = document.querySelectorAll('.nav-button');
const content = document.querySelectorAll('.content');

// Activer le bouton et le contenu d'accueil par défaut
navButtons[0].classList.add('active');
navButtons[0].classList.remove('inactive');
content[0].classList.add('active');
content[0].classList.remove('inactive');

navButtons.forEach(button => {
  button.addEventListener('mouseover', () => {
    // Réinitialiser tous les boutons et contenus
    navButtons.forEach(btn => {
      btn.classList.add('inactive');
      btn.classList.remove('active');
    });
    content.forEach(c => {
      c.classList.add('inactive');
      c.classList.remove('active');
    });

    // Activer le bouton et le contenu sélectionnés
    button.classList.add('active');
    button.classList.remove('inactive');
    const target = button.getAttribute('data-target');
    const selectedContent = document.querySelector(`.content[data-name=${target}]`);
    selectedContent.classList.add('active');
    selectedContent.classList.remove('inactive');

    

    // Mettre à jour le titre et la description affichés
    const title = selectedContent.querySelector('.title');
    const description = selectedContent.querySelector('.description');
    document.querySelector('.title').textContent = title.textContent;
    document.querySelector('.description').innerHTML = description.innerHTML;
  });
});             

  