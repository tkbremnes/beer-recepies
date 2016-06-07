import { Schema, arrayOf, normalize } from 'normalizr';

import Recipes from '../../ex/recipes.js';
const recipe = Recipes.recipes;

const recipeCollectionSchema = new Schema('recipes');

const recipeSchema = new Schema('recipe', { idAttribute: 'id' });

const fermentableSchema = new Schema('fermentables', { idAttribute: 'id' });
const hopSchema = new Schema('hops', { idAttribute: 'id' });
const yeastSchema = new Schema('yeasts', { idAttribute: 'id' });

recipeCollectionSchema.define({
    recipes: arrayOf(recipeSchema)
});

recipeSchema.define({
    fermentables: arrayOf(fermentableSchema),
    hops: arrayOf(hopSchema),
    yeasts: arrayOf(yeastSchema)
});

export const REQUEST_RECIPE = 'request_recipes'
function requestRecipes() {
  return {
    type: REQUEST_RECIPE
  }
}

export const RECEIVE_RECIPE = 'receive_recipes'
function receiveRecipes(recipeJSON) {
    return {
        type: RECEIVE_RECIPE,
        recipe: normalize(recipeJSON[1], recipeSchema)
    }
}

export function fetchRecipe() {
    return (dispatch) => {
        return dispatch(receiveRecipes(recipe))
    }
}
