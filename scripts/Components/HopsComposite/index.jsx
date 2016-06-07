import React from 'react';

import Hops from '../Hops/index.jsx';
import Calculate from '../Calculate/index.jsx';
import Header from '../Header/index.jsx';
import Loader from '../Loader/index.jsx';

function getTotalWeight(hops) {
    let total = 0;

    hops.forEach((hop) => {
        total += hop.weight;
    });

    return total;
}

class HopsComposite extends React.Component {
    render() {
        function collectionToArray(collection) {
            return Object.keys(collection).map((key) => {
                return collection[key]
            });
        }
        const hops = collectionToArray(this.props.hops);

        return (
            <div>
                <Header
                    text="Hops"
                    level={ 3 }
                />

                <Hops
                    hops={ hops }
                />

                <Calculate
                    totalWeight={ getTotalWeight(hops) }
                />
            </div>
        )
    }
}

HopsComposite.propTypes = {
    // hops: React.PropTypes.array.isRequired
}

export default HopsComposite;
