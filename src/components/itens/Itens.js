import React from 'react';
import { Context } from '../../providers/Provider';
import Item from "../item/Item";
import './Itens.css'
import Carregando from '../carregando/Carregando';
import SemResultado from '../semResultado/SemResultado';

class Itens extends React.Component {
    render() {
        return (<Context.Consumer>
            {(context) => (
                <div id="conteudo">
                    {!context[this.props.abaAtiva] ?
                        <Carregando /> :
                        context[this.props.abaAtiva].length === 0 ?
                            <SemResultado /> :
                            context[this.props.abaAtiva].map((item) => {
                                return <Item
                                    key={item.id}
                                    thumbnail={item.thumbnail}
                                    titulo={item.title}
                                    tituloUri={item.comments._uri}
                                    timestampCriacao={item.created}
                                    autor={{...item.author}}
                                    dominio={item.domain} />;
                            })}
                </div>
            )}
        </Context.Consumer>);
    }
}

export default Itens;