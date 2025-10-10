/* script.js - interactive logic for recipe card */

/* ---------------------------
   Recipe Data (3 recipes)
   --------------------------- */
const RECIPES = {
  chocolate: {
    id: "chocolate",
    title: "Decadent Chocolate Cake",
    image: "chocolate_cake.png",
    prepTime: 60, // minutes
    servings: 8,
    ingredients: [
      "2 cups all-purpose flour",
      "2 cups sugar",
      "3/4 cup cocoa powder",
      "2 tsp baking powder",
      "1.5 tsp baking soda",
      "1 tsp salt",
      "2 eggs",
      "1 cup milk",
      "1/2 cup vegetable oil",
      "2 tsp vanilla extract"
    ],
    steps: [
      "Preheat oven to 180°C (350°F). Grease and flour pans.",
      "In a bowl, sift flour, cocoa, baking powder, baking soda, and salt.",
      "In another bowl, beat eggs and sugar, then add milk, oil, and vanilla.",
      "Combine wet and dry ingredients until smooth.",
      "Pour batter into pans and bake for 30-35 minutes.",
      "Let cool for 10 minutes, remove from pan and frost as desired."
    ]
  },

  pasta: {
    id: "pasta",
    title: "Creamy Garlic Pasta",
    image: "pasta.png",
    prepTime: 25,
    servings: 3,
    ingredients: [
      "250g pasta (penne or spaghetti)",
      "2 tbsp olive oil",
      "3 garlic cloves, minced",
      "1/2 cup heavy cream",
      "1/2 cup grated Parmesan",
      "Salt & pepper to taste",
      "Fresh parsley for garnish"
    ],
    steps: [
      "Boil pasta in salted water till al dente.",
      "In a pan, heat olive oil and sauté garlic until golden.",
      "Add cooked pasta to the pan, toss with cream and Parmesan.",
      "Season with salt & pepper, garnish with parsley, serve hot."
    ]
  },

  paneer: {
    id: "paneer",
    title: "Paneer Butter Masala",
    image: "paneer_butter_masala.png",
    prepTime: 45,
    servings: 4,
    ingredients: [
      "250g paneer (cubed)",
      "3 tbsp butter",
      "2 onions, chopped",
      "3 tomatoes, pureed",
      "1/2 cup cream",
      "1 tsp ginger-garlic paste",
      "Spices: garam masala, turmeric, chili powder, salt",
      "Kasuri methi for aroma"
    ],
    steps: [
      "Heat butter, sauté onions till golden with ginger-garlic paste.",
      "Add tomato puree and cook until oil separates.",
      "Add spices, then paneer cubes and simmer 6-8 minutes.",
      "Stir in cream, adjust seasoning and garnish with kasuri methi."
    ]
  },
    fries: {
    id: "fries",
    title: "Crispy French Fries",
    image: "friench_fries.png",
    prepTime: 20,
    servings: 2,
    ingredients: [
      "3 large potatoes",
      "Oil for deep frying",
      "Salt to taste",
      "1 tsp chili powder (optional)"
    ],
    steps: [
      "Peel and slice potatoes into thin strips.",
      "Soak them in cold water for 10 minutes, then pat dry.",
      "Heat oil in a deep pan and fry until golden brown.",
      "Drain excess oil, sprinkle salt and chili powder, and serve hot."
    ]
  },

  pizza: {
    id: "pizza",
    title: "Cheesy Veg Pizza",
    image: "pizza.png",
    prepTime: 30,
    servings: 4,
    ingredients: [
      "1 pizza base",
      "1/2 cup pizza sauce",
      "1 cup mozzarella cheese",
      "1/2 onion (sliced)",
      "1/2 capsicum (sliced)",
      "Toppings: olives, corn, etc."
    ],
    steps: [
      "Spread pizza sauce evenly on the base.",
      "Add toppings and sprinkle cheese.",
      "Bake in a preheated oven at 200°C for 10-12 minutes.",
      "Slice and serve hot with chili flakes and oregano."
    ]
  },

  burger: {
    id: "burger",
    title: "Classic Veg Burger",
    image: "Burger.png",
    prepTime: 25,
    servings: 2,
    ingredients: [
      "2 burger buns",
      "2 veg patties",
      "Lettuce, tomato, onion slices",
      "Cheese slice (optional)",
      "Ketchup & mayonnaise"
    ],
    steps: [
      "Toast buns slightly on a pan.",
      "Cook or heat the veg patties until crisp.",
      "Assemble buns, lettuce, tomato, patty, sauces, and cheese.",
      "Press gently and serve hot with fries."
    ]
  },

  cupcakes: {
    id: "cupcakes",
    title: "Vanilla Cupcakes",
    image: "Cup_cake.png",
    prepTime: 40,
    servings: 6,
    ingredients: [
      "1½ cups all-purpose flour",
      "½ cup butter",
      "1 cup sugar",
      "2 eggs",
      "1 tsp vanilla extract",
      "1½ tsp baking powder",
      "½ cup milk"
    ],
    steps: [
      "Preheat oven to 180°C (350°F). Line a muffin tray.",
      "Cream butter and sugar, then beat in eggs and vanilla.",
      "Mix in flour, baking powder, and milk to form smooth batter.",
      "Pour into molds and bake for 18-20 minutes until golden."
    ]
  },

  vegpuff: {
    id: "vegpuff",
    title: "Crispy Veg Puff",
    image: "Veg_puff.png",
    prepTime: 35,
    servings: 4,
    ingredients: [
      "4 puff pastry sheets",
      "1 boiled potato (mashed)",
      "1/2 cup mixed veggies (peas, carrots, beans)",
      "1 onion, chopped",
      "Spices: salt, garam masala, chili powder"
    ],
    steps: [
      "Prepare filling by sautéing onions and veggies with spices.",
      "Place filling in puff sheets and fold into triangles.",
      "Bake at 200°C for 20 minutes until golden brown.",
      "Serve hot with ketchup or chutney."
    ]
  },

  eggpuff: {
    id: "eggpuff",
    title: "Egg Puff Delight",
    image: "Egg_puff.png",
    prepTime: 30,
    servings: 4,
    ingredients: [
      "4 puff pastry sheets",
      "2 boiled eggs (halved)",
      "1 onion, chopped",
      "1/2 tsp pepper powder",
      "1 tsp chili powder",
      "Salt to taste"
    ],
    steps: [
      "Sauté onions with pepper, salt, and chili powder.",
      "Place half egg with onion mix on puff sheet.",
      "Fold into a triangle and bake at 200°C for 20 minutes.",
      "Serve warm with tea or coffee."
    ]
  }
};

/* ---------------------------
   DOM Elements
   --------------------------- */
const selectEl = document.getElementById("recipe-select");
const titleEl = document.getElementById("recipe-title");
const imgEl = document.getElementById("recipe-image");
const prepEl = document.getElementById("prep-time");
const servesEl = document.getElementById("servings");
const ingredientsPanel = document.getElementById("ingredients-panel");
const stepsPanel = document.getElementById("steps-panel");
const ingredientsList = document.getElementById("ingredients-list");
const stepsList = document.getElementById("steps-list");
const toggleIngredientsBtn = document.getElementById("toggle-ingredients");
const toggleStepsBtn = document.getElementById("toggle-steps");
const startBtn = document.getElementById("start-cook");
const nextBtn = document.getElementById("next-step");
const resetBtn = document.getElementById("reset");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const timerValue = document.getElementById("timer-value");

/* ---------------------------
   State
   --------------------------- */
let currentRecipe = RECIPES.chocolate;
let currentStepIndex = -1;
let timerInterval = null;
let remainingSeconds = 0;

/* ---------------------------
   Utility: format time mm:ss
   --------------------------- */
function formatTime(seconds){
  const m = String(Math.floor(seconds / 60)).padStart(2,"0");
  const s = String(seconds % 60).padStart(2,"0");
  return `${m}:${s}`;
}

/* ---------------------------
   Render function
   --------------------------- */
function renderRecipe(recipe) {
  currentRecipe = recipe;
  // Title & meta
  titleEl.textContent = recipe.title;
  prepEl.textContent = recipe.prepTime;
  servesEl.textContent = recipe.servings;

  // Image (use fallback if missing)
  imgEl.src = recipe.image || "";
  imgEl.alt = recipe.title;

  // Populate ingredients
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach(ing => {
    const li = document.createElement("li");
    li.textContent = ing;
    ingredientsList.appendChild(li);
  });

  // Populate steps
  stepsList.innerHTML = "";
  recipe.steps.forEach((step, idx) => {
    const li = document.createElement("li");
    li.dataset.step = idx;
    li.innerHTML = `<span class="step-index">${idx+1}</span><div class="step-text">${step}</div>`;
    stepsList.appendChild(li);
  });

  // Reset UI state
  closePanel(ingredientsPanel, toggleIngredientsBtn);
  closePanel(stepsPanel, toggleStepsBtn);
  resetCookingState();
}

/* ---------------------------
   Panel open/close helpers
   --------------------------- */
function openPanel(panel, btn){
  panel.classList.add("open");
  panel.setAttribute("aria-hidden", "false");
  if(btn) btn.textContent = btn.id === "toggle-ingredients" ? "Hide Ingredients" : "Hide Steps";
}
function closePanel(panel, btn){
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden", "true");
  if(btn) btn.textContent = btn.id === "toggle-ingredients" ? "Show Ingredients" : "Show Steps";
}
function togglePanel(panel, btn){
  if(panel.classList.contains("open")) closePanel(panel, btn);
  else openPanel(panel, btn);
}

/* ---------------------------
   Cooking flow functions
   --------------------------- */
function startCooking(){
  currentStepIndex = 0;
  highlightStep(currentStepIndex);
  nextBtn.disabled = false;
  startCountdown(currentRecipe.prepTime);
  startBtn.disabled = true;
}

function nextStep(){
  if(currentStepIndex < currentRecipe.steps.length - 1){
    currentStepIndex++;
    highlightStep(currentStepIndex);
  } else {
    // finished
    currentStepIndex = currentRecipe.steps.length - 1;
    highlightStep(currentStepIndex);
    nextBtn.disabled = true;
    startBtn.disabled = true;
    // optional: flash the progress fill to show completion
    progressFill.style.boxShadow = "0 8px 30px rgba(81,48,48,0.18)";
    setTimeout(()=> progressFill.style.boxShadow = "", 1400);
  }
}

function highlightStep(idx){
  const items = stepsList.querySelectorAll("li");
  items.forEach((li, i) => {
    li.classList.toggle("active", i === idx);
  });
  // update progress
  const total = currentRecipe.steps.length;
  const done = Math.max(0, idx + 1);
  const pct = Math.round((done / total) * 100);
  progressFill.style.width = pct + "%";
  progressText.textContent = `${done} / ${total}`;
}

/* ---------------------------
   Timer: optional bonus
   --------------------------- */
function startCountdown(minutes){
  // Stop existing
  stopCountdown();
  remainingSeconds = Math.max(1, minutes) * 60;
  timerValue.textContent = formatTime(remainingSeconds);
  timerInterval = setInterval(() => {
    remainingSeconds--;
    timerValue.textContent = formatTime(Math.max(0, remainingSeconds));
    if(remainingSeconds <= 0){
      stopCountdown();
      // beep (simple) and show finished
      try { window.navigator.vibrate && window.navigator.vibrate(200); } catch(e){}
      timerValue.textContent = "Done!";
    }
  }, 1000);
}
function stopCountdown(){
  if(timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

/* ---------------------------
   Reset cooking state
   --------------------------- */
function resetCookingState(){
  currentStepIndex = -1;
  const items = stepsList.querySelectorAll("li");
  items.forEach(li => li.classList.remove("active"));
  progressFill.style.width = "0%";
  progressText.textContent = `0 / ${currentRecipe.steps.length}`;
  nextBtn.disabled = true;
  startBtn.disabled = false;
  stopCountdown();
  timerValue.textContent = "--:--";
}

/* ---------------------------
   Event wiring
   --------------------------- */
selectEl.addEventListener("change", (e)=>{
  const sel = e.target.value;
  renderRecipe(RECIPES[sel]);
});

toggleIngredientsBtn.addEventListener("click", ()=>{
  togglePanel(ingredientsPanel, toggleIngredientsBtn);
});
toggleStepsBtn.addEventListener("click", ()=>{
  togglePanel(stepsPanel, toggleStepsBtn);
});

startBtn.addEventListener("click", ()=>{
  // ensure steps panel is visible
  if(!stepsPanel.classList.contains("open")) openPanel(stepsPanel, toggleStepsBtn);
  startCooking();
});

nextBtn.addEventListener("click", () => {
  nextStep();
});

resetBtn.addEventListener("click", () => {
  resetCookingState();
});

/* Clicking a step directly jumps to it */
stepsList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if(!li) return;
  const idx = Number(li.dataset.step);
  if(Number.isFinite(idx)){
    currentStepIndex = idx;
    highlightStep(idx);
    // enable start/next accordingly
    nextBtn.disabled = idx >= currentRecipe.steps.length - 1;
    startBtn.disabled = true;
  }
});

/* keyboard: space/enter triggers next when cooking started */
document.addEventListener("keydown", (e) => {
  if(e.key === " " || e.key === "Enter"){
    if(!startBtn.disabled) return; // don't intercept if not started
    e.preventDefault();
    if(!nextBtn.disabled) nextStep();
  }
});

/* ---------------------------
   Initialize default recipe
   --------------------------- */
renderRecipe(RECIPES.chocolate);
