function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#ingredient-input");
  let apiKey = "ca3401aa9fo6993fde3bf6t53aa16d30";
  let prompt = `Generate a simple recipe from ${instructionInput.value} as the main ingredient. Include ingredients and instructions.`;
  let context =
    "You are a world class chef that creates easy to follow recipes. You provide clear instructions and a concise list of ingredients. All ingredients are in list format with <br /> tags between each item. The instructions are in numbered format with <br /> tags between each step. Please have ingredients headline and instructions headline within <h4> tags. Please add a title to the recipe at the top within <h2> tags.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink">🧑🏻‍🍳 Cooking your recipe for ${instructionInput.value}...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
