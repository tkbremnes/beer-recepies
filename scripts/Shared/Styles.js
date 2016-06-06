export default {
    mainColor: '#fafafa',

    tableRowContainer: {
        display: 'flex',
        flexDirection: 'row'
    },

    tableContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px'
    },

    ingredient: {
        weight: {
            order: 1,
            flexShrink: 0,
            textAlign: 'right',
            width: '70px'
        },
        name: {
            order: 2,
            flexGrow: 1,
            flexShrink: 0
        },
        color: {
            order: 3,
            flexShrink: 0
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
