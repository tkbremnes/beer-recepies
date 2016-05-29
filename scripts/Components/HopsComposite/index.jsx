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
        if (!this.props.hops) {
            return <Loader />;
        }

        return (
            <div>
                <Header text="Hops" />

                <Hops
                    hops={ this.props.hops }
                />

                <Calculate
                    totalWeight={ getTotalWeight(this.props.hops) }
                />
            </div>
        )
    }
}

HopsComposite.propTypes = {
    // hops: React.PropTypes.array.isRequired
}

export default HopsComposite;
