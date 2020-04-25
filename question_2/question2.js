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
  //The next line is not what the example in the lesson said, but after advice from my cousin, I found that using a for/in loop instead made my results visible.
  //I could not find out how to make it work otherwise.
  for (detail in games.results) {
    let name = games.results[detail].name;
    let image = games.results[detail].background_image;
    html += `<div class="game">
    <h2>${name}</h2>
    <img src="${image}" alt="${name}" width="700" />
   </div>`;
  }
  resultsContainer.innerHTML = html;
}
