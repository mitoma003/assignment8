var recipeRating = document.getElementById("recipe-rating");

var recipeReviews = document.getElementById("recipe-reviews");

var recipes = [
  {
    title: "Teriyaki Chicken Bowl",
    description: "Sweet and savory chicken over rice with vegetables",
    difficulty: "Easy",
    cuisine: "Asian",
    image: "./img/Teriyaki Chicken Bowl.jpeg",
    prepTime: "15 mins",
    cookTime: "20 mins",
    serves: "2 people",
    rating: "4.7",
    reviews: "(367 reviews)",

    ingredient1: "400g chicken thighs, sliced",
    ingredient2: "1/2 cup teriyaki sauce",
    ingredient3: "2 cups cooked rice",
    ingredient4: "1 broccoli head, florets",
    ingredient5: "1 carrot, julienned",
    ingredient6: "Sesame seeds",
    ingredient7: "Green onions, sliced",
    ingredient8: "1 tablespoon sesame oil",

    instruction1: "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
    instruction2: "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
    instruction3: "Meanwhile, steam broccoli and carrots until tender-crisp.",
    instruction4: "Divide rice between bowls.",
    instruction5: "Top with teriyaki chicken and steamed vegetables.",
    instruction6: "Garnish with sesame seeds and green onions. Serve hot.",


    calories: "540 kcal",
    protein: "42g",
    carbohydrates: "58g",
    fat: "14g",
    fiber: "6g",
    sodium: "1240mg",

    fristTip: "Use chicken thighs for juicier meat",
    secTip: "Make homemade teriyaki sauce for better flavor control",
    thirdTip: "Add edamame for extra protein",
    fourthTip: "Meal prep by cooking rice and chicken ahead",
  },

  {
    title: "Caesar Salad",
    description: "Classic salad with crispy romaine and creamy dressing",
    difficulty: "Easy",
    cuisine: "Mediterranean",
    image: "./img/Caesar Salad.jpeg",
    prepTime: "15 mins",
    cookTime: "0 mins",
    serves: "2 people",
    rating: "4.4",
    reviews: "(198 reviews)",

    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper",
    ],
    ingredient1: "1 large romaine lettuce",
    ingredient2: "1/2 cup Caesar dressing",
    ingredient3: "1/2 cup parmesan cheese, shaved",
    ingredient4: "1 cup croutons",
    ingredient5: "2 anchovy fillets (optional)",
    ingredient6: "Lemon wedges",
    ingredient7: "Black pepper",

    instruction1: "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
    instruction2: "Place lettuce in a large salad bowl.",
    instruction3: "Add Caesar dressing and toss until evenly coated.",
    instruction4: "Add croutons and half the parmesan cheese. Toss gently.",
    instruction5: "Top with remaining parmesan shavings and anchovies if using.",
    instruction6: "Serve immediately with lemon wedges and fresh black pepper.",


    calories: "320 kcal",
    protein: "12g",
    carbohydrates: "18g",
    fat: "22g",
    fiber: "3g",
    sodium: "680mg",

    fristTip: "Use cold, crisp lettuce for best texture",
    secTip: "Make homemade croutons for better flavor",
    thirdTip: "Add grilled chicken for a complete meal",
    fourthTip: "Don't dress salad until ready to serve",
  },

  {
    title: "Chicken Stir-Fry",
    description: "Quick and healthy stir-fry with colorful vegetables",
    difficulty: "Easy",
    cuisine: "Asian",
    image: "./img/Chicken Stir-Fry.jpeg",
    prepTime: "15 mins",
    cookTime: "15 mins",
    serves: "4 people",
    rating: "4.5",
    reviews: "(324 reviews)",

    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated",
    ],

    ingredient1: "500g chicken breast, sliced",
    ingredient2: "2 bell peppers, sliced",
    ingredient3: "1 broccoli head, florets",
    ingredient4: "2 carrots, julienned",
    ingredient5: "3 tablespoons soy sauce",
    ingredient6: "2 tablespoons oyster sauce",
    ingredient7: "1 tablespoon sesame oil",
    ingredient8: "2 cloves garlic, minced",
    ingredient9: "Fresh ginger, grated",

    instruction1: "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
    instruction2: "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
    instruction3: "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
    instruction4: "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
    instruction5: "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
    instruction6: "Serve immediately over steamed rice or noodles.",


    calories: "320 kcal",
    protein: "34g",
    carbohydrates: "18g",
    fat: "12g",
    fiber: "5g",
    sodium: "840mg",

    fristTip: "Cut all ingredients before starting to cook",
    secTip: "Keep heat high for authentic stir-fry texture",
    thirdTip: "Don't overcrowd the wok or vegetables will steam",
    fourthTip: "Add cashews or peanuts for extra crunch",
  },

  {
    title: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",
    difficulty: "Easy",
    cuisine: "American",
    image: "./img/Classic Beef Burger.jpeg",
    prepTime: "15 mins",
    cookTime: "20 mins",
    serves: "4 people",
    rating: "4.6",
    reviews: "(421 reviews)",

    ingredient1: "500g ground beef (80/20)",
    ingredient2: "4 burger buns",
    ingredient3: "4 slices cheddar cheese",
    ingredient4: "Lettuce leaves",
    ingredient5: "Tomato slices",
    ingredient6: "Red onion, sliced",
    ingredient7: "Pickles",
    ingredient8: "Burger sauce or condiments",

    instruction1: "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
    instruction2: "Season patties generously with salt and pepper on both sides.",
    instruction3: "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
    instruction4: "Add cheese slices in the last minute of cooking and cover to melt.",
    instruction5: "Toast burger buns lightly on the grill or in a pan.",
    instruction6: "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",

    calories: "650 kcal",
    protein: "38g",
    carbohydrates: "42g",
    fat: "35g",
    fiber: "2g",
    sodium: "920mg",

    fristTip: "Don't press down on burgers while cooking - keeps them juicy",
    secTip: "Make indent in center to prevent burger from puffing up",
    thirdTip: "Let patties rest for 2-3 minutes before serving",
    fourthTip: "Toast buns for better texture and flavor",
  },

  {
    title: "Lasagna Bolognese",
    description: "Layered Italian pasta with rich meat sauce and béchamel",
    difficulty: "Intermediate",
    cuisine: "Italian",
    image: "./img/Lasagna Bolognese.jpeg",
    prepTime: "30 min",
    cookTime: "90 min",
    serves: "4 people",
    rating: "4.9",
    reviews: "(478 reviews)",

    ingredient1: "12 lasagna sheets",
    ingredient2: "500g ground beef",
    ingredient3: "400g canned tomatoes",
    ingredient4: "1 onion, diced",
    ingredient5: "2 carrots, diced",
    ingredient6: "500ml béchamel sauce",
    ingredient7: "200g mozzarella, grated",
    ingredient8: "100g parmesan cheese",
    ingredient9: "Fresh basil",

    instruction1: "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
    instruction2: "Cook lasagna sheets according to package directions. Drain and set aside.",
    instruction3: "Preheat oven to 180°C (350°F).",
    instruction4: "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
    instruction5: "Top final layer with béchamel, mozzarella, and parmesan cheese.",
    instruction6: "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",

    calories: "680 kcal",
    protein: "42g",
    carbohydrates: "58g",
    fat: "28g",
    fiber: "6g",
    sodium: "920mg",

    fristTip: "Make bolognese sauce a day ahead for better flavor",
    secTip: "Don't skip the resting time after baking",
    thirdTip: "Use fresh pasta sheets for best texture",
    fourthTip: "Freeze leftovers in individual portions",
  },

  {
    title: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    difficulty: "Intermediate",
    cuisine: "Italian",
    image: "./img/Margherita Pizza.jpeg",
    prepTime: "90 min",
    cookTime: "12 min",
    serves: "2 people",
    rating: "4.9",
    reviews: "(512 reviews)",

    ingredient1: "300g pizza dough",
    ingredient2: "200g crushed tomatoes",
    ingredient3: "250g fresh mozzarella",
    ingredient4: "Fresh basil leaves",
    ingredient5: "2 tablespoons olive oil",
    ingredient6: "2 cloves garlic, minced",
    ingredient7: "Salt and pepper to taste",
    ingredient8: "Parmesan cheese for topping",

    instruction1: "Let pizza dough come to room temperature and rest for 1 hour.",
    instruction2: "Preheat oven to maximum temperature (usually 250°C/480°F).",
    instruction3: "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
    instruction4: "Roll out dough on a floured surface to desired thickness.",
    instruction5: "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
    instruction6: "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",

    calories: "580 kcal",
    protein: "24g",
    carbohydrates: "68g",
    fat: "22g",
    fiber: "4g",
    sodium: "920mg",

    tips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
    fristTip: "Use a pizza stone for crispier crust",
    secTip: "Don't overload with toppings - less is more",
    thirdTip: "Add basil after baking to keep it fresh",
    fourthTip: "Let dough rest properly for best texture",
  },

  {
    title: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    difficulty: "Easy",
    cuisine: "Mediterranean",
    image: "./img/Mediterranean Quinoa Bowl.jpeg",
    prepTime: "20 min",
    cookTime: "35 min",
    serves: "2 people",
    rating: "4.5",
    reviews: "(156 reviews)",

    ingredient1: "1 cup quinoa",
    ingredient2: "Cherry tomatoes, halved",
    ingredient3: "Cucumber, diced",
    ingredient4: "Red onion, sliced",
    ingredient5: "Kalamata olives",
    ingredient6: "Feta cheese, crumbled",
    ingredient7: "Fresh parsley",
    ingredient8: "Tahini dressing",

    instruction1: "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
    instruction2: "While quinoa cooks, prepare all vegetables and set aside.",
    instruction3: "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
    instruction4: "Fluff cooked quinoa with a fork and let cool slightly.",
    instruction5: "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
    instruction6: "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",

    calories: "480 kcal",
    protein: "18g",
    carbohydrates: "58g",
    fat: "20g",
    fiber: "10g",
    sodium: "540mg",

    fristTip: "Rinse quinoa well to remove bitter coating",
    secTip: "Let quinoa cool before adding fresh ingredients",
    thirdTip: "Make extra tahini dressing - it keeps well in the fridge",
    fourthTip: "Add grilled chicken or chickpeas for extra protein",
  },

  {
    title: "Pad Thai",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    difficulty: "Intermediate",
    cuisine: "Asian",
    image: "./img/Pad Thai.jpeg",
    prepTime: "20 min",
    cookTime: "15 min",
    serves: "2 people",
    rating: "4.8",
    reviews: "(445 reviews)",

    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro",
    ],
    ingredient1: "200g rice noodles",
    ingredient2: "200g shrimp, peeled",
    ingredient3: "2 eggs",
    ingredient4: "3 tablespoons tamarind paste",
    ingredient5: "2 tablespoons fish sauce",
    ingredient6: "1 tablespoon palm sugar",
    ingredient7: "Bean sprouts",
    ingredient8: "Crushed peanuts",
    ingredient9: "Lime wedges and cilantro",

    instruction1: "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
    instruction2: "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
    instruction3: "Heat wok over high heat. Scramble eggs and set aside.",
    instruction4: "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
    instruction5: "Add scrambled eggs and bean sprouts. Toss everything together.",
    instruction6: "Serve topped with crushed peanuts, lime wedges, and cilantro.",

    calories: "540 kcal",
    protein: "32g",
    carbohydrates: "62g",
    fat: "16g",
    fiber: "4g",
    sodium: "1120mg",

    fristTip: "Don't oversoak noodles or they'll be mushy",
    secTip: "Cook on high heat for authentic wok flavor",
    thirdTip: "Balance sweet, sour, and salty flavors",
    fourthTip: "Prepare all ingredients before starting to cook"
  }
];

var copyOfArray = recipes.slice();

function changeRecipe() {
  if (copyOfArray.length === 0) {
    copyOfArray = recipes.slice();
  }
  var recipesRandom = Math.floor(Math.random() * recipes.length);
  document.getElementById("recipe-title").innerHTML = copyOfArray[recipesRandom].title;
  document.getElementById("recipe-description").innerHTML = copyOfArray[recipesRandom].description;
  document.getElementById("recipe-image").src = copyOfArray[recipesRandom].image;
  document.getElementById("recipe-difficulty").innerHTML = copyOfArray[recipesRandom].difficulty;
  document.getElementById("recipe-cuisine").innerHTML = copyOfArray[recipesRandom].cuisine;
  document.getElementById("prep-time").innerHTML = copyOfArray[recipesRandom].prepTime;
  document.getElementById("cook-time").innerHTML = copyOfArray[recipesRandom].cookTime;
  document.getElementById("serves").innerHTML = copyOfArray[recipesRandom].serves;
  document.getElementById("recipe-rating").innerHTML = copyOfArray[recipesRandom].rating;
  document.getElementById("recipe-reviews").innerHTML = copyOfArray[recipesRandom].reviews;

  document.getElementById("ingredient-1").innerHTML = copyOfArray[recipesRandom].ingredient1;
  document.getElementById("ingredient-2").innerHTML = copyOfArray[recipesRandom].ingredient2;
  document.getElementById("ingredient-3").innerHTML = copyOfArray[recipesRandom].ingredient3;
  document.getElementById("ingredient-4").innerHTML = copyOfArray[recipesRandom].ingredient4;
  document.getElementById("ingredient-5").innerHTML = copyOfArray[recipesRandom].ingredient5;
  document.getElementById("ingredient-6").innerHTML = copyOfArray[recipesRandom].ingredient6;
  document.getElementById("ingredient-7").innerHTML = copyOfArray[recipesRandom].ingredient7;
  document.getElementById("ingredient-8").innerHTML = copyOfArray[recipesRandom].ingredient8;
  document.getElementById("ingredient-9").innerHTML = copyOfArray[recipesRandom].ingredient9;
  
  document.getElementById("instruction-1").innerHTML = copyOfArray[recipesRandom].instruction1;
  document.getElementById("instruction-2").innerHTML = copyOfArray[recipesRandom].instruction2;
  document.getElementById("instruction-3").innerHTML = copyOfArray[recipesRandom].instruction3;
  document.getElementById("instruction-4").innerHTML = copyOfArray[recipesRandom].instruction4;
  document.getElementById("instruction-5").innerHTML = copyOfArray[recipesRandom].instruction5;
  document.getElementById("instruction-6").innerHTML = copyOfArray[recipesRandom].instruction6;

  document.getElementById("nutrition-calories").innerHTML = copyOfArray[recipesRandom].calories;
  document.getElementById("nutrition-protein").innerHTML = copyOfArray[recipesRandom].protein;
  document.getElementById("nutrition-carbs").innerHTML = copyOfArray[recipesRandom].carbohydrates;
  document.getElementById("nutrition-fat").innerHTML = copyOfArray[recipesRandom].fat;
  document.getElementById("nutrition-fiber").innerHTML = copyOfArray[recipesRandom].fiber;
  document.getElementById("nutrition-sodium").innerHTML = copyOfArray[recipesRandom].sodium;

  document.getElementById("frist-tip").innerHTML = copyOfArray[recipesRandom].fristTip;
  document.getElementById("sec-tip").innerHTML = copyOfArray[recipesRandom].secTip;
  document.getElementById("third-tip").innerHTML = copyOfArray[recipesRandom].thirdTip;
  document.getElementById("fourth-tip").innerHTML = copyOfArray[recipesRandom].fourthTip;

  if(copyOfArray[recipesRandom].ingredient9 === undefined){
    document.getElementById("ingredient99").classList.add("d-none")
  }
  if(copyOfArray[recipesRandom].ingredient8 === undefined){
    document.getElementById("ingredient88").classList.add("d-none")
  }
  copyOfArray.splice(recipesRandom, 1);
}
