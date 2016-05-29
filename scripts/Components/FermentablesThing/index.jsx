import React from 'react';

import Fermentables from '../Fermentables/index.jsx';
import Calculate from '../Calculate/index.jsx';

function getTotalWeight(fermentables) {
    let total = 0;

    fermentables.forEach((fermentable) => {
        total += fermentable.weight;
    });

    return total;
}

class FermentablesThing extends React.Component {
    render() {
        return (
            <div>
                <header>Fermentables</header>

                <Fermentables
                    fermentables={ this.props.fermentables }
                />

                <Calculate
                    totalWeight={ getTotalWeight(this.props.fermentables) }
                />
            </div>
        )
    }
}

export default FermentablesThing;
