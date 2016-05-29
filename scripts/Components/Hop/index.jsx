import React from 'react';

class Hop extends React.Component {
    render() {
        return (
            <div>
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
