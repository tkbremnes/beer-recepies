import React from 'react';

import Yeasts from '../Yeasts/index.jsx';
import Header from '../Header/index.jsx';
import Loader from '../Loader/index.jsx';

class YeastsComposite extends React.Component {
    render() {
        function collectionToArray(collection) {
            return Object.keys(collection).map((key) => {
                return collection[key]
            });
        }
        const yeasts = collectionToArray(this.props.yeasts);

        return (
            <div>
                <Header
                    text="Yeasts"
                    level={ 3 }
                />

                <Yeasts
                    yeasts={ yeasts }
                />
            </div>
        )
    }
}

YeastsComposite.propTypes = {
    // yeasts: React.PropTypes.array.isRequired
}

export default YeastsComposite;
