const charactersContainer = document.getElementById("characters-container");

fetch('https://rickandmortyapi.com/api/character')
.then(response => response.json())
.then(data => {

// });

data.results.forEach(results => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
            <img src="${results.image}" alt="${results.name}" class="character-image">
            <p class="character-detail"><span class="attribute">Name:</span> ${results.name}</p>
            <p class="character-detail"><span class="attribute">Status:</span> ${results.status}</p>
            <p class="character-detail"><span class="attribute">Species:</span> ${results.species}</p>
            <p> <span style = font-weight:bold >Species:</span> ${results.gender}</p>
            <p class='location'>${results.location.name} ${results.location.url} NOT</p>
        `;
  charactersContainer.appendChild(card);
});

});