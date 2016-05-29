import React from 'react';
import Fermentable from '../Fermentable/index.jsx';

class Fermentables extends React.Component {
    render() {
        function doThing(fermentables) {
            return fermentables.map((fermentable, index) => {
                return (
                    <Fermentable
                        name={ fermentable.name }
                        weight={ fermentable.weight }
                        color={ fermentable.color }
                        key={ index }
                    />
                )
            });
        }
        return (
            <div>
                { doThing(this.props.fermentables) }
            </div>
        )
    }
}

Fermentables.proptypes = {
    fermentables: React.PropTypes.array.isRequired
}

export default Fermentables;
