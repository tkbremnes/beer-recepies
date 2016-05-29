import React from 'react';

import Yeasts from '../Yeasts/index.jsx';
import Header from '../Header/index.jsx';
import Loader from '../Loader/index.jsx';

class YeastsComposite extends React.Component {
    render() {
        if (!this.props.yeasts) {
            return <Loader />;
        }
        return (
            <div>
                <Header text="Yeasts" />

                <Yeasts
                    yeasts={ this.props.yeasts }
                />
            </div>
        )
    }
}

YeastsComposite.propTypes = {
    // yeasts: React.PropTypes.array.isRequired
}

export default YeastsComposite;
