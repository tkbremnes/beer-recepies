import Recipes from '../../ex/recipes.js';
const recipe = Recipes.recipes[1];

function normalize(recipeJSON) {
    return recipeJSON;
}

export const REQUEST_RECIPE = 'request_recipes'
function requestRecipes() {
  return {
    type: REQUEST_RECIPE
  }
}

export const RECEIVE_RECIPE = 'receive_recipes'
function receiveRecipes(recipeJSON) {
    console.log('receiving');
    return {
        type: RECEIVE_RECIPE,
        recipe: normalize(recipeJSON)
    }
}

export function fetchRecipe() {
    console.log('doing!');
    return (dispatch) => {
        return dispatch(receiveRecipes(recipe))
    }
}
