const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach(button => {
  button.addEventListener('mouseover', () => {
    const dropdownMenu = button.nextElementSibling;
    dropdownMenu.classList.add('show');
  });
});

// Fermer le menu lorsque l'utilisateur sort de celui-ci
dropdownButtons.forEach(button => {
  button.addEventListener('mouseout', () => {
    const dropdownMenu = button.nextElementSibling;
    dropdownMenu.classList.remove('show');
  });
});


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

  