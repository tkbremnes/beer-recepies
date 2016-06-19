import React from 'react';
import { Link } from 'react-router';

const Style = {
    borderBottom: '1px solid #000',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '40px',
    background: 'white'
}

class NavHeader extends React.Component {
    render() {
        return (
            <nav style={ Style }>
                <Link to="/about">About</Link>
                <Link to="/recipes">Recipes</Link>

                {/*<a href="/about">About</a>
                <a href="/recipes">Recipes</a>*/}
            </nav>
        )
    }
}

NavHeader.propTypes = {

}

export default NavHeader;
