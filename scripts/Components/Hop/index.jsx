import React from 'react';
import SharedStyles from '../../Shared/Styles.js';

class Hop extends React.Component {
    render() {
        return (
            <div style={ SharedStyles.tableRowContainer }>
                <p>{ this.props.name }</p>
                <p>{ this.props.weight }</p>
                <p>{ this.props.color }</p>
            </div>
        )
    }
}

Hop.propTypes = {
    name: React.PropTypes.string.isRequired,
    weight: React.PropTypes.number.isRequired,
    ibu: React.PropTypes.number.isRequired
};

export default Hop;
