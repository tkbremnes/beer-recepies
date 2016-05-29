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
    }
}
