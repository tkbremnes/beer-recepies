import React from 'react';

class Header extends React.Component {
    render() {
        const headerSize = {
            "1": 24,
            "2": 20,
            "3": 16,
            "4": 12,
            "5": 10,
            "6": 8
        }[this.props.level];

        const styles = {
            fontSize: `${ headerSize }px`,
            fontFamily: '"Slabo 27px"'
        }

        if (this.props.uppercase) {
            styles.textTransform = 'uppercase'
        }

        if (this.props.impact) {
            styles.fontSize = `${ headerSize * 1.7 }px`;
        }

        if (this.props.color) {
            styles.color = this.props.color;
        }

        function formatText(text) {
            if (text == "Irish Red Ale") {
                // insert nbsp when necessary
                return "Irish Red Ale";
            }
            return text;
        }

        return (
            <header style={ { height: '100%' } }>
                <h1 style={ styles }>{ formatText(this.props.text) }</h1>
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
