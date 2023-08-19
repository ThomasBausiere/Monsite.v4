
  // Sélection du bouton et de la partie à masquer/afficher
  const button = document.getElementById("toggleButton");
  const headerBanner = document.querySelector(".header-banner");

  // Variable pour compter le nombre de clics
  let clickCount = 0;

  // Ajouter un gestionnaire d'événement au bouton
  button.addEventListener("click", () => {
    clickCount++;

    // Vérifier si le nombre de clics est pair ou impair
    if (clickCount % 2 === 0) {
      // Si le nombre de clics est pair, afficher la partie header-banner
      headerBanner.style.display = "block";
    } else {
      // Si le nombre de clics est impair, masquer la partie header-banner
      headerBanner.style.display = "none";
    }
  });
