import React from 'react';

import FermentablesThing from '../FermentablesThing/index.jsx';
import HopsComposite from '../HopsComposite/index.jsx';

class Recipe extends React.Component {
    render() {
        const {
            fermentables,
            hops
        } = this.props.recipe;

        return (
            <div>
                <FermentablesThing
                    fermentables={ fermentables }
                />

                <HopsComposite
                    hops={ hops }
                />
            </div>
        )
    }
}
Recipe.propTypes = {
    recipe: React.PropTypes.object.isRequired
}

export default Recipe;
