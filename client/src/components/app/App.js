import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Routes from '../../routes';
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <main className="App-Body">
        <Route
          render={({ location }) => (
          <TransitionGroup className="scene"
        >
            <CSSTransition
              timeout={1500}
              classNames="flip"
              unmountOnExit
              key={location.key}
            >
                <Switch location={location}>
                  <Route exact path="/" component={ Routes.Power }/>
                  <Route exact path="/start" component={ Routes.Start }/>
                  <Route dexact path="/menu" component={ Routes.Menu }/>
                  <Route path="/cooking/:food" component={ Routes.Cooking }/>
                  <Route exact path="/ratings" component={ Routes.Rating }/>
                  <Route exact path="/thanks/:rating" component={ Routes.Thanks }/>
                </Switch>
            </CSSTransition>
          </TransitionGroup>
          )} />
      </main>
      </div>
    );
  }
}

export default App;
