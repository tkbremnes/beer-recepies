import React from 'react';

const Styles = {
    textDecoration: "underline",
    cursor: "pointer"
}

class Link extends React.Component {
    render() {
        return (
            <a style={ Styles } href={ this.props.href }>{ this.props.text }</a>
        )
    }
}

Link.propTypes = {
    href: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
}

export default Link;
