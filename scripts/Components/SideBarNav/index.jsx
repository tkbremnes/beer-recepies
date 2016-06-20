import React from 'react';

const Styles = {
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '400px',
        height: '100%',
        background: '#FFFFFF',
        boxShadow: '1px 0 4px rgba(0, 0, 0, .4)',
        zIndex: 2
    },
    header: {
        height: '150px',
        background: '#FFC107'
    },
    main: {
        padding: '4px 0'
    },
    link: {
        height: '80px',
        padding: '4px',
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, .54)'
    },
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: '99',
    }
}

class SideBarNav extends React.Component {
    render() {
        return (
            <div style={ Styles.container }>
                <nav style={ Styles.nav }>
                    <header style={ Styles.header }>Some header</header>

                    <main style={ Styles.main }>
                        <p style={ Styles.link }>Link 1</p>
                        <p style={ Styles.link }>Link 2</p>
                        <p style={ Styles.link }>Link 3</p>
                    </main>
                </nav>

                <div style={ Styles.overlay }></div>
            </div>
        )
    }
}

SideBarNav.propTypes = {

}

export default SideBarNav;
