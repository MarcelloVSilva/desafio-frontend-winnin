import React, { Component } from 'react';
import { Context, HOT, NEW, RISING } from './providers/Provider'

class Conteudo extends Component {
    conteudoAtivo(context) {
        switch (context.abaAtiva) {
            case HOT:
                return (<Itens abaAtiva="hot"/>)
            case NEW:
                return (<Itens abaAtiva="news"/>)
            case RISING:
                return (<Itens abaAtiva="rising"/>)
            default:
                return (<div>carregando</div>)
        }
    }

    render() {
        return (
            <Context.Consumer>
                {(context) => (
                    <div>{this.conteudoAtivo(context)}</div>
                )}
            </Context.Consumer>
        );
    }
}

export default Conteudo;


class Itens extends React.Component {
    render() {
        return (
            <Context.Consumer>
                {(context) => (
                    <div>{!context[this.props.abaAtiva] ? 
                        'carregando' :
                        context[this.props.abaAtiva].map((item)=>{
                            return <Item 
                                        thumbnail={item.thumbnail}
                                        titulo={item.title} 
                                        timestampCriacao={item.created_utc}
                                        autor={item.author_fullname}
                                        dominio={item.domain}/>
                        })}</div>
                )}
            </Context.Consumer>
        )
    }
}

class Item extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.titulo}</h4>
                <img alt="thumb" src={this.props.thumbnail}/>
                <div>{this.props.timestampCriacao}</div>
                <div>{this.props.autor}</div>
                <div>{this.props.dominio}</div>

            </div>
        )
    }
}