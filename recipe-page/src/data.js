import recipeImage from "../assets/images/image-omelette.jpeg";

const recipe = {
  image: recipeImage,
  title: "Simple Omelette Recipe",
  summary: "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
  times: [
    { type: "Total", text: "Approximately 10 minutes" },
    { type: "Preparation", text: "5 minutes" },
    { type: "Cooking", text: "5 minutes" },
  ],
  ingredients: [{ text: "2-3 large eggs" }, { text: "Salt, to taste" }, { text: "Pepper, to taste" }, { text: "1 tablespoon of butter or oil" }, { text: "Optional fillings: cheese, diced vegetables, cooked meats, herbs" }],
  instructions: [
    { no: 1, type: "Beat the eggs", text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture." },
    { no: 2, type: "Heat the pan", text: "Place a non-stick frying pan over medium heat and add butter or oil." },
    { no: 3, type: "Cook the omelette", text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface." },
    { no: 4, type: "Add fillings (optional)", text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette." },
    { no: 5, type: "Fold and serve", text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate." },
    { no: 6, type: "Enjoy", text: "Serve hot, with additional salt and pepper if needed." },
  ],
  nutrition: [
    { topic: "Calories", units: "277kcal" },
    { topic: "Carbs", units: "0g" },
    { topic: "Protein", units: "20g" },
    { topic: "Fat", units: "22g" },
  ],
};

export default recipe;
