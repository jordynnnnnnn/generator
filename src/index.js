function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Example: Chicken salad 🐓",
    autoStart: true,
    delay: "natural",
  });
}

let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
