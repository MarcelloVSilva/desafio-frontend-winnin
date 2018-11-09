import React from 'react';
export class Item extends React.Component {
    render() {
        return (<div>
            <h4>{this.props.titulo}</h4>
            <img alt="thumb" src={this.props.thumbnail} />
            <div>{this.props.timestampCriacao}</div>
            <div>{this.props.autor}</div>
            <div>{this.props.dominio}</div>

        </div>);
    }
}