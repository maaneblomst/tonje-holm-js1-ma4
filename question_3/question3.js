//QUESTION 3:
const url = "https://api.rawg.io/api/games/4200";

async function createGameDetails() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);

    const heading = document.querySelector("h1");
    heading.innerHTML = details.name;

    const image = details.background_image;
    document.querySelector(".image").style.backgroundImage = `url('${image}')`;

    const description = document.querySelector(".description");
    description.innerHTML = details.description;
  } catch (error) {
    console.log(error);
    heading.innerHTML = "An error occured due to weak JS skills";
  } finally {
  }
}
createGameDetails();
