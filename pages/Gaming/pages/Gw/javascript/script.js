document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll(".menu li");
  const contentDiv = document.getElementById("content");
  let currentIndex = 0;
  let confirmedIndex = null;

  function updateClass() {
    listItems.forEach((item, index) => {
      item.classList.remove("selected", "nearly-selected", "not-selected", "confirmed");

      if (index === confirmedIndex) {
        item.classList.add("confirmed", "selected");
      } else if (index === currentIndex) {
        item.classList.add("selected");
      } else if (index === (currentIndex - 1 + listItems.length) % listItems.length || index === (currentIndex + 1) % listItems.length) {
        item.classList.add("nearly-selected");
      } else {
        item.classList.add("not-selected");
      }
    });
  }

  function showContent(index) {
    if (index === null) {
      contentDiv.innerHTML = "";
      return;
    }

    // Utiliser un tableau ou un objet pour stocker les contenus de chaque élément
    const contents = {
      '0': [
        { text: "Les classes", link: "Les classes" },
        { text: "Les coops", link: "Missions en mode coopératif" },
        { text: "Les titres", link: "Les titres" },
      ],

      '1': [
        { text: " Ajout personnage ", link: "" },
        { text: "#", link: "#" },
       
      ],

      '2': [
        { text: "Daily Activities", link: "https://wiki.guildwars.com/wiki/Daily_activities" },
        { text: "Weekly Activities", link: "https://wiki.guildwars.com/wiki/Weekly_activities" },
        { text: "Nick Sets Cycle", link: "https://wiki.guildwars.com/wiki/Nicholas_the_Traveler/Cycle" },
        { text: "Kamadan Trade Chat", link: "https://kamadan.gwtoolbox.com" },
      ]
    };
  

    const currentContent = contents[index];
    if (currentContent) {
      const newContent = `<ul>
        ${currentContent.map(item => `<li><a class="menu-button" role="button"  href="${item.link}" target="_blank">${item.text}</a></li>`).join('')}
      </ul>`;
      contentDiv.innerHTML = newContent;
    }

    const buttonsArray = contents[index].map(item => {
      return `<button class='menu2-button' onclick='window.open("${item.link}", "_blank")'>${item.text}</button>`;
    });
    
    
    contentDiv.innerHTML = buttonsArray.join("");
    
  }

  
    updateClass();

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") {
        currentIndex = (currentIndex - 1 + listItems.length) % listItems.length;
      } else if (e.key === "ArrowDown") {
        currentIndex = (currentIndex + 1) % listItems.length;
      } else if (e.key === "Enter") {
        if (confirmedIndex === currentIndex) {
          confirmedIndex = null;
          showContent(null);
        } else {
          confirmedIndex = currentIndex;
          showContent(confirmedIndex);
        }
      } else if (e.key === "Escape") { // Ajout de la touche "Échap"
        confirmedIndex = null;
        showContent(null);
      }
      updateClass();
    });
    
  
    document.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        currentIndex = (currentIndex + 1) % listItems.length;
      } else if (e.deltaY < 0) {
        currentIndex = (currentIndex - 1 + listItems.length) % listItems.length;
      }
      updateClass();
    });
  
    listItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        currentIndex = index;
        confirmedIndex = index;
        updateClass();
        showContent(confirmedIndex);
      });
  
      // Ajout de l'écouteur mouseover
      item.addEventListener("mouseover", () => {
        currentIndex = index;
        updateClass();
      });
    });
  });
  

