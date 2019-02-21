import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SoundContext from '../../actions/sound-context';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Routes from '../../routes';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.soundRef = React.createRef();
    this.state = {
      sound: {
        src: '',
        loop: false
      },
      playSound: this.playSound
    }
  }

  playSound = ({src, loop=false}) => {
    return new Promise((resolve, reject) => {
      const ref = this.soundRef.current;
      
      if(loop) {
        ref.setAttribute('loop', '');
      } else {
        ref.removeAttribute('loop');
      }

      const resolveAndCleanup = () => { resolve(); ref.removeEventListener('end', resolveAndCleanup)};
      ref.addEventListener('ended', resolveAndCleanup);
      try {
        ref.src = src;
        if(!ref.playing) {
          ref.play();
        }
      } catch (err) {
        console.log(err.message);
        reject(err);
      }
    });
  }

  render() {
    return (
      
        <div className="App">
          <audio ref={this.soundRef} preload="auto" autoPlay />
          <main className="App-Body">
          <SoundContext.Provider value={this.state}>
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
          </SoundContext.Provider>
        </main>
        </div>
    );
  }
}

export default App;
