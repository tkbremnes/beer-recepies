import React from 'react';
import { Link } from 'react-router';

const Style = {
    marginBottom: '10px',
    padding: '8px 4px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, .1)',
    background: '#FFF',
    cursor: 'pointer'
}

class RecipeListItem extends React.Component {
    render() {
        const recipe = this.props.recipe;
        const recipeUrl = `/recipe/${ recipe.id }`;
        return (
            <div className="recipe-list-item" style={ Style }>
                <Link style={{ cursor: 'pointer' }} to={ recipeUrl }>
                    <p>{ recipe.name }</p>
                    <p>{ recipe.type }</p>
                    <p>ABV: { recipe.abv }</p>
                    <p>IBU: { recipe.ibu }</p>
                </Link>
            </div>
        )
    }
}

RecipeListItem.propTypes = {

}

export default RecipeListItem;
