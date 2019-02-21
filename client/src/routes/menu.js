/** eslint ignore */

import React from 'react';
import { withRouter } from 'react-router-dom';
import menuSound from '../assets/sounds/menu.m4a';
import corn from '../assets/images/corn.png';
import hamburger from '../assets/images/hamburger.png';
import pancakes from '../assets/images/pancakes.png';
import pizza from '../assets/images/pizza.png';
import classnames from 'classnames';
import SoundContext from '../actions/sound-context';

class Menu extends React.Component  {

  static contextType = SoundContext;
  constructor(props) {
    super(props)
    this.state = {};
    this.sounds = {
      pizza: require("../assets/sounds/pizza.m4a"),
      pancakes: require("../assets/sounds/pancakes.m4a"),
      corn: require("../assets/sounds/corn.m4a"),
      hamburger: require("../assets/sounds/hamburger.m4a")
    }
  }

  componentDidMount() {
   this.context.playSound({src:menuSound});
  }

  handleClick = (food) => {
    return (e) => {
      e.preventDefault();
      this.setState({selection:food});
      this.context.playSound({src: this.sounds[food]})
        .then(this.handleFoodSpoken)
        .catch(console.log);
    }
  }

  handleFoodSpoken = () => {
    console.log('handleFoodSpoken');
    this.props.history.push(`/cooking/${this.state.selection}`);
  }

  getClassNames = (food, style) => {
    return classnames('btn', `btn-${style}`, {'active': this.state.selection === food, 'off': this.state.selection && this.state.selection !== food });
  }
  
  render() {
    return (
      <div className="cube">
        <div className="face">
          <div className='menu-screen screen'>
            <div className="title"><h1>Menu</h1></div>
            <div className="menu">
              <div className="menu-food">
                <a className={this.getClassNames('pizza', 'error')} onClick={this.handleClick('pizza')}>
                  <img alt="" className="menu-food__img" src={pizza} />
                </a>
                <span className="menu-food__label">pizza</span>
              </div>
              <div className="menu-food">
                <a className={this.getClassNames('corn', 'warn')} onClick={this.handleClick('corn')}>
                  <img alt="" className="menu-food__img" src={corn} />
                </a>
                <span className="menu-food__label">corn</span>
                </div>
              <div className="menu-food">
                <a className={this.getClassNames('hamburger', 'alert')} onClick={this.handleClick('hamburger')}>
                  <img alt="" className="menu-food__img" src={hamburger} />
                </a>
                <span className="menu-food__label">hamburger</span>
              </div>
              <div className="menu-food">
                <a className={this.getClassNames('pancakes', 'info')} onClick={this.handleClick('pancakes')}>
                  <img alt="" className="menu-food__img" src={pancakes} />
                </a>
                <span className="menu-food__label">pancakes</span>
              </div>
            </div>
          </div>
        </div> 
      </div>);
    }
  }

export default withRouter(Menu);