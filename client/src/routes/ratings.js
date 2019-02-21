import React from 'react';
import { Link } from 'react-router-dom';
import ratingSound from '../assets/sounds/rate.m4a';
import SoundContext from '../actions/sound-context';

class Rating extends React.Component {

  static contextType = SoundContext

  componentDidMount() {
    this.context.playSound({src: ratingSound});
  }

  render() { return (
    <div className="cube">
      <div className="face">
        <div className="rating-screen screen">
          <h1>My Food Was</h1>
          <div className="ratings">
            <div className="ratings__rating">
              <Link className="btn btn-primary" to="thanks/5"><span role="img" >🤪</span></Link>
              <p>Nom nom nom</p>
            </div>
            <div className="ratings__rating">
              <Link className="btn btn-info" to="thanks/4"><span role="img" >😋</span></Link>
              <p>Yum</p>
            </div>
            <div className="ratings__rating">
              <Link className="btn btn-warn" to="thanks/3"><span role="img" >😐</span></Link>
              <p>O.K.</p>
            </div>
            <div className="ratings__rating">
              <Link className="btn btn-alert" to="thanks/2"><span role="img" >🤢</span></Link>
              <p>Yuck</p>
              </div>
            <div className="ratings__rating">
              <Link className="btn btn-error" to="thanks/1"><span role="img" >🤮</span></Link>
              <p>Barf</p>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Rating;