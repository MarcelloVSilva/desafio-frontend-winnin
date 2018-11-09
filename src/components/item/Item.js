// import React from 'react';
// import './Item.css'

// export class Item extends React.Component {
//     render() {
//         return (
//             <div className="subreddit">
//                 <div className="thumb">
//                     <img alt="thumb" src={this.props.thumbnail} />
//                 </div>
//                 <div className="descricao">
//                     <div>{this.props.titulo}</div>
//                     <div>{this.props.timestampCriacao}</div>
//                     <div>{this.props.autor}</div>
//                     <div>{this.props.dominio}</div>
//                 </div>
//             </div>);
//     }
// }

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

    }
});

function Item(props) {
    const { classes, thumbnail, titulo, timestampCriacao, autor, dominio } = props;

    return (
        <div className={classes.wrapper}>
            <Paper className={classes.root} elevation={1}>
                <div className="thumb">
                    <Avatar src={thumbnail} />
                </div>
                <Typography variant="h5" component="h3">
                    {titulo}
                </Typography>
                <Typography component="p">
                    {`Enviado ${queHorasEnviou(timestampCriacao)} por ${autor}`}
                </Typography>
                <Typography component="p">
                    {dominio}
                </Typography>
            </Paper>
        </div>
    );
}

const queHorasEnviou = (ts) => {
    const z = new Date().getTime() - ts;
    const days = parseInt((z / (60 * 60 * 24 * 1000)))
    return days === 0 ? 'Hoje' :
        days === 1 ? 'Ontem' : `a ${days} dias`
}

Item.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);