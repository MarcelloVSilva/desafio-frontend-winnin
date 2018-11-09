import React, { Component, Fragment } from 'react';
import { Context, HOT, NEW, RISING } from '../providers/Provider'
import Conteudo from './conteudo/Conteudo';
import './App.css'

class App extends Component {
  renderTab(context) {
    return (
      <div id="tabs">
        <button className="tabBtn" onClick={() => context.changeTab(HOT)}>Hot</button>
        <button className="tabBtn" onClick={() => context.changeTab(NEW)}>News</button>
        <button className="tabBtn" onClick={() => context.changeTab(RISING)}>Rising</button>
      </div>
    )
  }

  render() {
    return (
      <Context.Consumer>
        {(context) => (
          <Fragment>
            <div id="topo">
              <div id='tituloDaPagina'>ReactJs</div>
              {!context.reddit ? <div>carregando...</div> : <div>{this.renderTab(context)}</div>}
            </div>
            {!context.reddit ? <div>carregando...</div> : <Fragment><Conteudo /></Fragment>}
          </Fragment>
        )}
      </Context.Consumer>
    );
  }
}

export default App;


