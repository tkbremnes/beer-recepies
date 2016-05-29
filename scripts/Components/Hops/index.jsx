import React from 'react';

import SharedStyles from '../../Shared/Styles';
import Hop from '../Hop/index.jsx';

class Hops extends React.Component {
    render() {
        function doThing(hops) {
            return hops.map((hop, index) => {
                return (
                    <Hop
                        name={ hop.name }
                        weight={ hop.weight }
                        time={ hop.time + '' }
                        ibu={ hop.ibu }
                        key={ index }
                    />
                )
            });
        }

        return (
            <div style={ SharedStyles.tableContainer }>
                { doThing(this.props.hops) }
            </div>
        )
    }
}

Hops.propTypes = {
    hops: React.PropTypes.array.isRequired
}

export default Hops;
