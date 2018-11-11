export const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: '1em',
        width: '65%',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor:'#029c9659'
        }
    },
    wrapper: {
        display: 'flex',
        alignItens: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        opacity: 0,
        transition: 'opacity 1s',
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
    },
    titulo: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    autorName: {
        all: 'unset',
        color: '#029c96',
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },
    dataCriacao: {
        all: 'unset'
    },
    dominio: {
        all: 'unset',
        color: '#676767',
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    }
});