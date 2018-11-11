import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { styles } from './styles';

const rootUrl = 'https://reddit.com/'

let count = 1
class Item extends React.Component {
    componentDidMount() {
        const self = this
        setTimeout(() => {
            self._reactInternalFiber.child.stateNode.style.opacity = 1
        }, 100 * count++)
    }
    componentWillUnmount() {
        count = 0
    }
    render() {
        return (
            <div className={this.props.classes.wrapper}>
                <Paper className={this.props.classes.root} elevation={1}>
                    <div className={this.props.classes.thumb}>
                        {this.props.thumbnail === 'self' ?
                            <Avatar className={`${this.props.classes.self} ${this.props.classes.customSizeAvatar}`} /> :
                            <Avatar className={this.props.classes.customSizeAvatar} src={this.props.thumbnail} />
                        }
                    </div>
                    <div>
                        <Typography variant="h5" component="h3">
                            <div
                                className={this.props.classes.titulo}
                                onClick={() => window.open(`${rootUrl}${this.props.tituloUri}`)}>
                                {this.props.titulo}
                            </div>
                        </Typography>
                        <Typography component="div">
                            {'Enviado '}
                            {' por '}
                            <button
                                onClick={() => window.open(`${rootUrl}user/${this.props.autor.name}`)}
                                className={this.props.classes.autorName}>
                                <b>{this.props.autor.name}</b>
                            </button>
                        </Typography>
                        <Typography component="div">
                            <button
                                onClick={() => {
                                    this.props.dominio.indexOf('self') > -1 ?
                                        window.open(`${rootUrl}r/reactjs`) :
                                        window.open(`${rootUrl}domain/${this.props.dominio}`)
                                }}
                                className={this.props.classes.dominio}>
                                {this.props.dominio}
                            </button>
                        </Typography>
                    </div>
                </Paper>
            </div>
        );
    }
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