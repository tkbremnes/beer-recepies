import React from 'react';

import SharedStyles from '../../Shared/Styles';
import Yeast from '../Yeast/index.jsx';

class Yeasts extends React.Component {
    render() {
        function doThing(yeasts) {
            return yeasts.map((yeast, index) => {
                return (
                    <Yeast
                        name={ yeast.name }
                        key={ index }
                    />
                )
            });
        }

        return (
            <div style={ SharedStyles.tableContainer }>
                { doThing(this.props.yeasts) }
            </div>
        )
    }
}

Yeasts.propTypes = {
    yeasts: React.PropTypes.array.isRequired
}

export default Yeasts;
