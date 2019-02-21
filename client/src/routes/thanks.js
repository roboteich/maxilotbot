import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../assets/images/logotype.png';

  class Thanks extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        timeRemaining: 5
      }
    }

    componentDidMount() {

      const interval = setInterval(() => {
        const nextValue = this.state.timeRemaining-1
        this.setState({timeRemaining: nextValue});
        if(nextValue === 0) {
          clearInterval(interval);
          this.props.history.push('/start');
        }
      }, 1000);

    }

    render() { 
      return (
        <div className="cube">
          <div className="face">
            <div className="thanks-screen screen">
            <div className="start-screen__logo">
              <img alt="" className="start_screen__logo--graphic" src={logo} />
            </div>
              <h1>Thanks You</h1>
              <h2>Rebooting in {this.state.timeRemaining}</h2>
            </div>
        </div>
      </div>
      )
    }
  }

export default withRouter(Thanks);