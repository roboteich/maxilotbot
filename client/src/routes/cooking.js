import React from 'react';
import { withRouter } from 'react-router-dom';
import cookSound from '../assets/sounds/IwillMake.m4a';
import classnames from 'classnames'; 
import corn from '../assets/images/corn.png';
import hamburger from '../assets/images/hamburger.png';
import pancakes from '../assets/images/pancakes.png';
import pizza from '../assets/images/pizza.png';
import SoundContext from '../actions/sound-context';

class Cooking extends React.Component {
  
  static contextType = SoundContext;
  constructor(props) {
    super(props);
    this.state = {
      cooking: false,
    }
  }

  componentDidMount() {
    this.context.playSound({src: cookSound})
      .then(this.handleCookComplete);
      setTimeout(() => {
        this.setState({
          cooking: true
        });
      }, 1000);
  }

  handleCookComplete = () => {
    this.props.history.push('/ratings')
  }

  render() {

    const food = this.props.match.params.food;
    return (
      <div className="cube">
        <div className="face">
          <div className="cooking-screen screen">
            <h1>laser cooking</h1>
            <img className="cooking-screen__icon" src={this.props.icons[food]} alt="" />
            <div className={classnames('progress', { fill: this.state.cooking })}><div className="progress-fill"></div></div>
          </div>
        </div>
        <audio preload="auto" ref={this.soundRef} autoPlay src={cookSound} /> 
      </div>
    );
  }
}

Cooking.defaultProps = {
  icons: {
    corn,
    hamburger,
    pancakes,
    pizza
  }
}

export default withRouter(Cooking);