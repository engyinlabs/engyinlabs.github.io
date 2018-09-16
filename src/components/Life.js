import React, { Component } from 'react';
import life1 from '../images/life-1.jpg';
import life2 from '../images/life-2.jpg';
import life3 from '../images/life-3.jpg';
import life4 from '../images/life-4.jpg';

var classNames = require('classnames');

const LifeImage = props => {
  const LifeImageClasses = classNames('col-12', 'col-sm-6', 'col-lg-3', 'life-image');
  return (
    <div className={LifeImageClasses}>
      <img src={props.img} alt="" />
    </div>
  );
}

class Life extends Component {
  render() {
    return (
      <div className="row" id="life">
        <div className="col-12">
          <h2>Life with Engyin Labs</h2>
          <p>Most of the program is online. Our mentors and industry partners are located around the globe and therefore we maintain a strong online presence. We collaborate with each other using Dropbox, Slack & Git. We also maintain a limited presence in various colleges in the tricity and hold regular meetups, which all members can join. A typical meetup session includes presenting work, discussion on various ideas with the rest of the cohort, guest talks by mentors, brainstorming and feedback sessions.</p>
        </div>
        <LifeImage img={life1} />
        <LifeImage img={life2} />
        <LifeImage img={life3} />
        <LifeImage img={life4} />
      </div>
    )
  }
}

export default Life;