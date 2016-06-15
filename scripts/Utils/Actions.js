import { Schema, arrayOf, normalize } from 'normalizr';

import Recipes from '../../ex/recipes.js';
const recipes = Recipes.recipe_collection;

const recipeCollectionSchema = new Schema('recipe_collection', { idAttribute: 'id' });

const recipeSchema = new Schema('recipe', { idAttribute: 'id' });

const fermentableSchema = new Schema('fermentables', { idAttribute: 'id' });
const hopSchema = new Schema('hops', { idAttribute: 'id' });
const yeastSchema = new Schema('yeasts', { idAttribute: 'id' });

recipeCollectionSchema.define({
    recipeCollection: arrayOf(recipeSchema)
});

recipeSchema.define({
    fermentables: arrayOf(fermentableSchema),
    hops: arrayOf(hopSchema),
    yeasts: arrayOf(yeastSchema)
});

export const RECEIVE_RECIPE = 'receive_recipe'
function receiveRecipe(recipeJSON) {
    const recipe = normalize(recipeJSON, recipeSchema);

    return {
        type: RECEIVE_RECIPE,
        recipe
    }
}

export const RECEIVE_RECIPE_COLLECTION = 'receive_recipe_collection'
function receiveRecipeCollection(recipeJSON) {
    const recipeCollection = normalize(recipeJSON, recipeCollectionSchema);
    return {
        type: RECEIVE_RECIPE_COLLECTION,
        recipeCollection
    }
}

export function fetchRecipe(id) {
    return (dispatch) => {
        return dispatch(receiveRecipe(recipes[id])) //TODO
    }
}

export function fetchRecipeCollection() {
    console.log('fething...');
    return (dispatch) => {
        return dispatch(receiveRecipeCollection(recipes))
    }
}
