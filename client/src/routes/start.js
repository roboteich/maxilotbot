import React from 'react';
import Sound from 'react-sound';
import { Link } from 'react-router-dom';
import startSound from '../assets/sounds/startloop.m4a';
import img1 from '../assets/images/schprocket1.png';
import img2 from '../assets/images/schprocket2.png';
import img3 from '../assets/images/schprocket3.png';
import img4 from '../assets/images/schprocket4.png';
import corn from '../assets/images/corn.png';
import hamburger from '../assets/images/hamburger.png';
import pancakes from '../assets/images/pancakes.png';
import pizza from '../assets/images/pizza.png';
import logo from '../assets/images/logotype.png';

const Start = () => (
  <div className="cube">
    <div className="face">
      <div className='start-screen screen'>
        <div className="start-screen__foods">
          <div className="start-screen__foods--slider">
            <div className="food" style={{backgroundImage: `url(${corn})`}}/>
            <div className="food" style={{backgroundImage: `url(${hamburger})`}}/>
            <div className="food" style={{backgroundImage: `url(${pancakes})`}}/>
            <div className="food" style={{backgroundImage: `url(${pizza})`}}/>
            <div className="food" style={{backgroundImage: `url(${corn})`}}/>
            <div className="food" style={{backgroundImage: `url(${hamburger})`}}/>
            <div className="food" style={{backgroundImage: `url(${pancakes})`}}/>
            <div className="food" style={{backgroundImage: `url(${pizza})`}}/>
          </div>
        </div>
        <div className="start-screen__logo">
          <img alt="" className="start_screen__logo--graphic" src={logo} />
        </div>
        <div className="start-screen__schprockets start-screen__schprockets--1">
          <div className="schprocket schprocket--3">
            <img alt="" className="schprocket__img " src={img3} />
          </div>
          <div className="schprocket schprocket--4">
            <img alt="" className="schprocket__img" src={img4} />
          </div>
        </div>
        <div className="start-screen__schprockets start-screen__schprockets--2">
          <div className="schprocket schprocket--1">
            <img alt="" className="schprocket__img" src={img1} />
          </div>
          <div className="schprocket schprocket--2">
            <img alt="" className="schprocket__img" src={img2} />
          </div>
        </div>
        <div className="start-screen__start">
          <Link className="btn btn-primary" to="/menu">start</Link>
        </div>
      </div>
    </div>
    <Sound playStatus={Sound.status.PLAYING} autoLoad={true} url={startSound} loop={true} />
  </div>
)

export default Start;