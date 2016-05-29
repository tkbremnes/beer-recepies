import React from 'react';

import Fermentables from '../Fermentables/index.jsx';
import Calculate from '../Calculate/index.jsx';
import Header from '../Header/index.jsx';

function getTotalWeight(fermentables) {
    let total = 0;

    fermentables.forEach((fermentable) => {
        total += fermentable.weight;
    });

    return total;
}

class FermentablesComposite extends React.Component {
    render() {
        return (
            <div>
                <Header
                    text="Fermentables"
                />

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

FermentablesComposite.propTypes = {
    fermentables: React.PropTypes.array.isRequired
}

export default FermentablesComposite;
