import React, { Component, Fragment } from 'react';
import { Context, HOT, NEW, RISING } from '../providers/Provider'
import Conteudo from './conteudo/Conteudo';
import './App.css'
import Carregando from './carregando/Carregando';

class App extends Component {
  renderTab(context) {
    return (
      <div id="tabs">
        <button className={`tabBtn ${context.abaAtiva === HOT && 'active'}`} onClick={() => context.changeTab(HOT)}>Hot</button>
        <button className={`tabBtn ${context.abaAtiva === NEW && 'active'}`} onClick={() => context.changeTab(NEW)}>News</button>
        <button className={`tabBtn ${context.abaAtiva === RISING && 'active'}`} onClick={() => context.changeTab(RISING)}>Rising</button>
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
              {!context.reddit ? <Carregando /> : <div>{this.renderTab(context)}</div>}
            </div>
            {!context.reddit ? <Carregando /> : <Conteudo />}
          </Fragment>
        )}
      </Context.Consumer>
    );
  }
}

export default App;


