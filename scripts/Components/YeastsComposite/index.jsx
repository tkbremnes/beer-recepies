import React from 'react';

import Yeasts from '../Yeasts/index.jsx';

class YeastsComposite extends React.Component {
    render() {
        return (
            <div>
                <header>Yeasts</header>

                <Yeasts
                    yeasts={ this.props.yeasts }
                />
            </div>
        )
    }
}

YeastsComposite.propTypes = {
    yeasts: React.PropTypes.array.isRequired
}

export default YeastsComposite;
