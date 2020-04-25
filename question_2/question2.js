//QUESTION 2
async function createGames() {
  try {
    const url = "https://api.rawg.io/api/games";
    const response = await fetch(url);
    const games = await response.json();
    displayGames(games);
    console.log(games);
  } catch (error) {
    console.log(error);
  }
}

createGames();

function displayGames(games) {
  const resultsContainer = document.querySelector(".results");
  let html = "";
  for (object in games.results) {
    let name = games.results[object].name;
    let image = games.results[object].background_image;
    html += `<div class="game">
    <h2>${name}</h2>
    <img src="${image}" alt="${name}" width="700" />
   </div>`;
  }
  resultsContainer.innerHTML = html;
}
