import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { styles } from './styles';

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
                        {`Enviado ${queHorasEnviou(timestampCriacao)} por ${autor.name}`}
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
    const days = parseInt(ts / (1000 * 60 * 60 * 24))
    return days === 0 ? 'Hoje' :
        days === 1 ? 'Ontem' : `a ${days} dias`
}

Item.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);