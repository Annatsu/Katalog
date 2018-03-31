// Kata link: https://www.codewars.com/kata/pete-the-baker


/**
 * A function to determine how many cakes can Pete do, following a recipe with n ingredients available.
 * 
 * @param {Object} recipe an object with the recipe description
 * @param {Object} ingredients an object that tells the function which ingredients does Pete have available.
 * 
 * @returns {Number} the amount of cakes that Pete can do with the given ingredients.
 */
function cakes(recipe, ingredients) {
    const recipeKeys = Object.keys(recipe);
    let cakes = null;

    // Uses a little hacky way to set the cakes variable back to 0 if there is an ingredient lacking.
    // I use a OR operator, then, if the property doesn't exists inside the ingredients object, it will
    // try to evaluate the right side of the OR operator. The right side uses a AND operator to break the loop.
    // At the left side of the AND operator, we have the attribution of cakes to 0 (this is evaluated as truthy)
    // At the right side of the AND operator, we have a forced false. Then, this condition will never be true,
    // only executing the left side of the AND, and then, breaking the for loop.
    for (let i = 0; i < recipeKeys.length && (ingredients[recipeKeys[i]] || (cakes = 0 && false)); i++) {
        const amount = Math.floor(ingredients[recipeKeys[i]] / recipe[recipeKeys[i]]);
        
        if (cakes === null || amount < cakes)
            cakes = amount;
    }

    return cakes || 0;
}
