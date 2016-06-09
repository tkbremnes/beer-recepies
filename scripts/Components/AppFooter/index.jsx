import React from 'react';

const Styles = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '4px 0'
}

class AppFooter extends React.Component {
    render() {
        return (
            <footer style={ Styles }>
                <p style={ { color: '#fff' } }>This is a thing</p>
            </footer>
        )
    }
}

AppFooter.propTypes = {

}

export default AppFooter;
