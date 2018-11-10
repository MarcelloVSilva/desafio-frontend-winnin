export const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: '1em',
        width: '65%'
    },
    wrapper: {
        display: 'flex',
        alignItens: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        '&>div': {
            display: 'flex',
            alignItens: 'center',
        }
    },
    thumb: {
        marginRight: '1vmin'
    },
    self: {
        background: 'url(//b.thumbs.redditmedia.com/XWINAyK1fHqmkcRwoZGwsASV7l6fl_cRG_5u_o9Dwqk.png) -73px -75px',
    },
    customSizeAvatar: {
        backgroundColor: '#d2dbe0',
        width: '64px',
        height: '64px',
    }
});