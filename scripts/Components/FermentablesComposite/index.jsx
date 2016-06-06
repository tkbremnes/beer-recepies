import React from 'react';

import Fermentables from '../Fermentables/index.jsx';
import Calculate from '../Calculate/index.jsx';
import Header from '../Header/index.jsx';
import Loader from '../Loader/index.jsx';
import CreateFermentable from '../CreateFermentable/index.jsx';

function getTotalWeight(fermentables) {
    let total = 0;

    fermentables.forEach((fermentable) => {
        total += fermentable.weight;
    });

    return total;
}

const testData = {
    name: "test",
    weight: 200,
    color: 5
}

class FermentablesComposite extends React.Component {
    render() {
        if (!this.props.fermentables) {
            return <Loader />;
        }
        return (
            <div>
                <Header
                    text="Fermentables"
                    level={ 3 }
                />

                <Fermentables
                    fermentables={ this.props.fermentables }
                />

                {/*<CreateFermentable
                    onFermentableAdded={ this.props.onFermentableAdded }
                />*/}

                <Calculate
                    totalWeight={ getTotalWeight(this.props.fermentables) }
                />

            </div>
        )
    }
}

FermentablesComposite.propTypes = {
    onFermentableAdded: React.PropTypes.func.isRequired
}

export default FermentablesComposite;
