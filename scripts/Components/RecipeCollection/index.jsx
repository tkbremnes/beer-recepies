import React from 'react';
import { connect } from 'react-redux';

import { fetchRecipeCollection, fetchRecipe } from '../../Utils/Actions';

import Recipe from '../Recipe/index.jsx';
import Loader from '../Loader/index.jsx';

class RecipeCollection extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchRecipeCollection());
    }

    render() {
        if (!this.props.recipeCollection.entities) {
            return <Loader />
        }

        const collection = this.props.recipeCollection.entities.recipe_collection;
        if (!this.props.recipeCollection.entities) {
            return <Loader />
        }
        const recipeCollection = Object.keys(collection).map((key) => {
            return collection[key];
        })[0];

        function getStuff(_collection) {
            return Object.keys(_collection).map((key) => {
                return (<Recipe
                    recipe={ _collection[key] }
                    id={ key }
                />)
            });
        }

        console.log(getStuff(recipeCollection));

        return (
            <div>
                { getStuff(recipeCollection) }
            </div>
        )
    }
}

RecipeCollection.propTypes = {

}

function select(state) {
    return {
        recipeCollection: state.recipeCollection
    }
}

export default connect(select)(RecipeCollection);
