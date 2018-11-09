import React, { Component } from 'react';
import { Context, HOT, NEW, RISING } from '../providers/Provider'
import Conteudo from './Conteudo';

class App extends Component {
  renderTab(context) {
    return (
      <div>
        <button onClick={() => context.changeTab(HOT)}>hot</button>
        <button onClick={() => context.changeTab(NEW)}>news</button>
        <button onClick={() => context.changeTab(RISING)}>rising</button>
      </div>
    )
  }

  render() {
    return (
      <Context.Consumer>
        {(context) => (
          <div>
            {!context.reddit ? <div>carregando...</div> : <div>{this.renderTab(context)}</div>}
            {!context.reddit ? <div>carregando...</div> : <div><Conteudo /></div>}
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default App;


