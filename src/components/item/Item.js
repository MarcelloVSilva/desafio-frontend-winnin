import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
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

function Item(props) {
    const { classes, thumbnail, titulo, timestampCriacao, autor, dominio } = props;

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.root} elevation={1}>
                <div className={classes.thumb}>
                    {thumbnail === 'self' ?
                        <Avatar className={`${classes.self} ${classes.customSizeAvatar}`} /> :
                        <Avatar className={classes.customSizeAvatar} src={thumbnail} />
                    }
                </div>
                <div>
                    <Typography variant="h5" component="h3">
                        {titulo}
                    </Typography>
                    <Typography component="p">
                        {`Enviado ${queHorasEnviou(timestampCriacao)} por ${autor}`}
                    </Typography>
                    <Typography component="p">
                        {dominio}
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}

const queHorasEnviou = (ts) => {
    const z = new Date().getTime() - ts;
    const days = parseInt((z / (60 * 60 * 24 * 30 * 12 * 1000)))
    return days === 0 ? 'Hoje' :
        days === 1 ? 'Ontem' : `a ${days} dias`
}

Item.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);