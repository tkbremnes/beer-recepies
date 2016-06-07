export default {
    mainColor: '#fafafa',

    tableRowContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: '8px 0',
        borderBottom: '1px solid rgba(0, 0, 0, .2)'
    },

    tableContainer: {
        borderTop: '2px solid #000',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 4px 4px 8px',
        backgroundColor: '#ededef',
        marginBottom: '8px',
        maxWidth: '450px',

        // background: "#ededef url(/images/wheat.svg)",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "contain",
        // backgroundPositionX: "50%",

    },

    ingredient: {
        weight: {
            order: 1,
            flexShrink: 0,
            textAlign: 'right',
            width: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        name: {
            order: 2,
            flexGrow: 1,
            padding: '0 8px'
        },
        color: {
            order: 3,
            paddingRight: '8px',
            flexShrink: 0,
            textAlign: 'right',
            width: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        aa: {
            order: 3,
            paddingRight: '8px',
            flexShrink: 0,
            textAlign: 'right',
            width: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginRight: '8px'
        },
    },

    // for color schemes
    Color: {
        paleAle: "#ffe92e",
        lager: "#f2c509",
        pilsner: "#f3921e",
        wheatBeer: "#d46e1f",
        goldenAle: "#de4718",
        darkAle: "#630b11",
        porter: "#4d0f0d",
        stout: "#421100",
        imperialAle: "#080808"
    }

}
