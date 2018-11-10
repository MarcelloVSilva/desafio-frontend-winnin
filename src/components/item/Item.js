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
                        {'Enviado '}
                        <a
                            className={classes.dataCriacao}>{queHorasEnviou(timestampCriacao)}</a>
                        {' por '}
                        <a
                            onClick={() => window.open(`https://reddit.com/user/${autor.name}`, '_blank')}
                            className={classes.autorName}>
                            {autor.name}
                        </a>
                    </Typography>
                    <Typography component="p">
                        <a
                            onClick={() => {
                                dominio.indexOf('self') > -1 ?
                                    window.open(`https://reddit.com/r/reactjs`) :
                                    window.open(`https://reddit.com/damain/${dominio}`, '_blank')
                            }}
                            className={classes.dominio}>
                            {dominio}
                        </a>
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}

const queHorasEnviou = (ts) => {
    const days = parseInt(ts / (1000 * 60 * 60 * 24 * 1000))
    return days === 0 ? 'Hoje' :
        days === 1 ? 'Ontem' : `a ${days} dias`
}

Item.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);