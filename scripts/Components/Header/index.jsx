import React from 'react';

class Header extends React.Component {
    render() {
        const headerSize = {
            "1": "24px",
            "2": "20px",
            "3": "16px",
            "4": "12px",
            "5": "10px",
            "6": "8px"
        }[this.props.level];

        const styles = {
            fontSize: headerSize
        }

        if (this.props.uppercase) {
            styles.textTransform = 'uppercase'
        }

        return (
            <header style={ { height: '100%' } }>
                <h1 style={ styles }>{ this.props.text }</h1>
            </header>
        )
    }
}

Header.propTypes = {
    text: React.PropTypes.string.isRequired,
    level: React.PropTypes.number
}

Header.defaultProps = {
    level: 1
}

export default Header;
