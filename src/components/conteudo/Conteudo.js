import React, { Component, Fragment } from 'react';
import { Context, HOT, NEW, RISING } from '../../providers/Provider'
import Itens from '../itens/Itens';

class Conteudo extends Component {
    conteudoAtivo(context) {
        switch (context.abaAtiva) {
            case HOT:
                return (<Itens abaAtiva="hot" />)
            case NEW:
                return (<Itens abaAtiva="news" />)
            case RISING:
                return (<Itens abaAtiva="rising" />)
            default:
                return (<Fragment>carregando</Fragment>)
        }
    }

    render() {
        return (
            <Context.Consumer>
                {(context) => (
                    <Fragment>{this.conteudoAtivo(context)}</Fragment>
                )}
            </Context.Consumer>
        );
    }
}

export default Conteudo;