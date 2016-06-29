import React from 'react';
import { Link } from 'react-router';

const Style = {
    container: {
        marginBottom: '10px',
        padding: '8px 4px',
        boxShadow: '0 1px 2px rgba(0, 0, 0, .1)',
        background: '#FFF',
        cursor: 'pointer'
    },
    name: {
        fontWeight: 'bold',
        fontSize: '18px'
    },
    metaWrapper: {
        display: 'flex'
    },
    meta: {
        color: 'rgba(0, 0, 0, .54)',
        fontSize: '14px'
    }
}

class RecipeListItem extends React.Component {
    render() {
        const recipe = this.props.recipe;
        const recipeUrl = `/recipe/${ recipe.id }`;
        return (
            <div className="recipe-list-item" style={ Style.container }>
                <Link style={{ cursor: 'pointer' }} to={ recipeUrl }>
                    <p style={ Style.name }>{ recipe.name }</p>
                    <div style={ Style.metaWrapper }>
                        <p style={ Style.meta }>{ recipe.style }</p>
                        <p style={ Style.meta }>ABV: { recipe.abv }</p>
                        <p style={ Style.meta }>IBU: { recipe.ibu }</p>
                    </div>
                </Link>
            </div>
        )
    }
}

RecipeListItem.propTypes = {

}

export default RecipeListItem;
