import React from 'react';
import { Link } from 'react-router-dom';
import menuSound from '../assets/sounds/menu.m4a';
import corn from '../assets/images/corn.png';
import hamburger from '../assets/images/hamburger.png';
import pancakes from '../assets/images/pancakes.png';
import pizza from '../assets/images/pizza.png';


class Menu extends React.Component  {

  constructor(props) {
    super(props)
    this.soundRef = React.createRef();
  }

  componentDidMount() {
    this.soundRef.current.play();
    console.log('mounted');
  }

  componentWillUnmount() {
    this.soundRef.current.pause();
  }
  
  render() {
    return (
      <div className="cube">
        <div className="face">
          <div className='menu-screen screen'>
            <div className="title"><h1>Menu</h1></div>
            <div className="menu">
              <div className="menu-food">
                <Link className="btn btn-error" to="/cooking/pizza">
                  <img alt="" className="menu-food__img" src={pizza} />
                </Link>
                <span className="menu-food__label">pizza</span>
              </div>
              <div className="menu-food">
                <Link className="btn btn-warn" to="/cooking/corn">
                  <img alt="" className="menu-food__img" src={corn} />
                </Link>
                <span className="menu-food__label">corn</span>
                </div>
              <div className="menu-food">
                <Link className="btn btn-alert" to="/cooking/burger">
                  <img alt="" className="menu-food__img" src={hamburger} />
                </Link>
                <span className="menu-food__label">hamburger</span>
              </div>
              <div className="menu-food">
                <Link className="btn btn-info" to="/cooking/crabcake">
                  <img alt="" className="menu-food__img" src={pancakes} />
                </Link>
                <span className="menu-food__label">pancakes</span>
              </div>
            </div>
          </div>
        </div>
        <audio ref={this.soundRef} src={menuSound} /> 
      </div>);
    }
  }

export default Menu;