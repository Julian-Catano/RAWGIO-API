// function sumaAcumulativa() {
//     return new Promise((resolve, reject) => {
//       const resultados = [];
//       let suma = 0;
  
//       function sumar(numero) {
//         if (numero > 15) {
//           resolve(resultados); // Cuando termine, resolver la promesa con el array de resultados
//           return;
//         }
        
//         suma += numero;
//         resultados.push(suma);
        
//         console.log(`Resultado acumulado después de sumar ${numero}: ${suma} ${resultados}`);
        
//         // Simular un retraso para la demostración (1000 ms = 1 segundo)
//         setTimeout(() => sumar(numero + 1), 1000);
//       }
      
//       sumar(1); // Iniciar con el primer número
//     });
//   }
  
//   sumaAcumulativa()
//     .then(resultados => {
//     })
//     .catch(error => {
//       console.error('Hubo un error:', error);
//     });


document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.rawg.io/api/games?key=d5418abfa6cc4ac8b9b1abd51ef2f0e6")
      .then((response) => response.json())
      .then((data) => {
        const games = data.results.slice(0, 20);
        const container = document.createElement("div");
        container.classList.add("games-container");
  
        games.forEach((game) => {
          const card = document.createElement("div");
          card.classList.add("game-card");
  
          const id = document.createElement("p");
          id.textContent = `ID: ${game.id}`;
  
          const name = document.createElement("h2");
          name.textContent = game.name;
  
          const releaseDate = document.createElement("p");
          releaseDate.textContent = `Release Date: ${game.released}`;
  
          const image = document.createElement("img");
          image.src = game.background_image;
          image.alt = `${game.name} image`;
  
          const rating = document.createElement("p");
          rating.textContent = `Rating: ${game.rating}`;
  
          const platforms = document.createElement("p");
          platforms.textContent = `Platforms: ${game.platforms
            .map((platform) => platform.platform.name)
            .join(", ")}`;
  
          
          card.appendChild(image);
          card.appendChild(id);
          card.appendChild(name);
          card.appendChild(releaseDate);
          card.appendChild(rating);
          card.appendChild(platforms);
  
          container.appendChild(card);
        });
  
        document.body.appendChild(container);
      })
      .catch((error) => console.error("Error fetching data:", error));
  });