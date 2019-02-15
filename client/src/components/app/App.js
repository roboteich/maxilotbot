import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from '../../routes';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Maxliot Bot</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={ Routes.Welcome }/>
            <Route exact path="/choose" component={ Routes.Choose }/>
            <Route path="/cook/:food" component={ Routes.Cook }/>
            <Route exact path="/eat" component={ Routes.Eat }/>
            <Route exact path="/rate" component={ Routes.Rate }/>
            <Route exact path="/thanks/:rating" component={ Routes.Thanks }/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
