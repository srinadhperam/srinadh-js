
function showRecipe(cocktail) {
    const recipes = {
        margarita: {
            name: 'Margarita',
            recipe: 'Ingredients: \n- 2 oz Tequila \n- 1 oz Lime Juice \n- 1 oz Cointreau \n\nDirections: Shake all ingredients with ice and strain into a salt-rimmed glass.'
        },
        mojito: {
            name: 'Mojito',
            recipe: 'Ingredients: \n- 2 oz White Rum \n- 1 oz Lime Juice \n- 2 tsp Sugar \n- Mint Leaves \n- Soda Water \n\nDirections: Muddle mint and sugar, add rum and lime juice, top with soda water.'
        },
        oldFashioned: {
            name: 'Old Fashioned',
            recipe: 'Ingredients: \n- 2 oz Bourbon \n- 1 sugar cube \n- 2 dashes Angostura Bitters \n\nDirections: Muddle sugar and bitters, add bourbon and ice, stir and garnish with an orange peel.'
        }
    };

    const cocktailName = document.getElementById('cocktail-name');
    const cocktailRecipe = document.getElementById('cocktail-recipe');

    cocktailName.textContent = recipes[cocktail].name;
    cocktailRecipe.textContent = recipes[cocktail].recipe;
}
