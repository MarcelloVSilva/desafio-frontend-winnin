import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { styles } from './styles';

const rootUrl = 'https://reddit.com/'

function Item(props) {
    const { classes, thumbnail, titulo, tituloUri, autor, dominio } = props;
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
                        <div 
                            className={classes.titulo}
                            onClick={()=> window.open(`${rootUrl}${tituloUri}`)}>
                            {titulo}
                        </div>
                    </Typography>
                    <Typography component="div">
                        {'Enviado '}
                        {' por '}
                        <button
                            onClick={() => window.open(`${rootUrl}user/${autor.name}`)}
                            className={classes.autorName}>
                            <b>{autor.name}</b>
                        </button>
                    </Typography>
                    <Typography component="div">
                        <button
                            onClick={() => {
                                dominio.indexOf('self') > -1 ?
                                    window.open(`${rootUrl}r/reactjs`) :
                                    window.open(`${rootUrl}domain/${dominio}`)
                            }}
                            className={classes.dominio}>
                            {dominio}
                        </button>
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}

// <div className={classes.dataCriacao}>{queHorasEnviou(timestampCriacao)}</div>                
// const queHorasEnviou = (ts) => {
//     const days = parseInt(ts / (1000 * 60 * 60 * 24 * 1000))
//     return days === 0 ? 'Hoje' :
//         days === 1 ? 'Ontem' : `a ${days} dias`
// }

Item.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);