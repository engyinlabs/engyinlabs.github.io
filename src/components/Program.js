import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import learnImg from '../images/u-learn.svg';
import workImg from '../images/u-work.svg';
import createImg from '../images/u-create.svg';

var classNames = require('classnames');



const About = (
  <div className="col-12 col-sm-10 offset-sm-1" id="about">
    <h2>The best place to explore your talents</h2>
    <p id="about-l1">Engyin Labs offers you a unique opportunity to work on complex real-world problems, where you have the best chance to cultivate your talents. We are the alternative to higher education you wish existed. 
    </p>
    <p id="about-l2">It is the perfect place for <b>misfits</b>, <b>rebels</b> and <b>troublemakers</b></p>
    <p>With us, you work on what matters the most.<br/><b>You.</b></p>
  </div>
);


const ProgramDesc = (
  <div className="col-12 col-sm-10 offset-sm-1" id="program-desc">
    <h2>Our Program</h2>
    <p>Our goal is to recognise your potential and nurture you into becoming the best version of yourself. We expose you to everything that is going on in the world through a range of activities and provide an ecosystem for you to flourish in. Here is what we do</p>
  </div>
);

const LearnActivityList = (
  <ul>
    <li>Follow skill decks</li>
    <li>Take part in <b>technical challenges</b></li>
    <li>Contribute to Open Source Projects</li>
    <li>Talk to mentors</li>
  </ul>
);

const WorkActivityList = (
  <ul>
    <li>Solve <b>complex problems</b> for the industry</li>
    <li>Work closely with your mentors</li>
    <li>Learn to work in a team</li>
    <li>Get paid</li>
  </ul>
);

const CreateActivityList = (
  <ul>
    <li>Look for opportunities in problems</li>
    <li>Work on a capstone project</li>
    <li><b>Get funded for up to INR 5L</b></li>
    <li>Push it to market</li>
    <li>Build it as a <b>Startup</b></li>
    <li>Learn to lead</li>
  </ul>
);

class ProgramActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reverse: props.reverse?props.reverse:false,
      image: props.img,
      title: props.title,
      list: props.list
    };
  }
  render(){
    const PAClasses = classNames('program-activity', 'row');
    const imgContainerClasses = classNames('col-12', 'col-sm-5', 'activity-image', {'order-sm-2': this.state.reverse});
    const listContainerClasses = classNames('col-12', 'col-sm-7', 'activity-content', {'order-sm-1': this.state.reverse});
    return (
      <div className={PAClasses}>
        <div className={imgContainerClasses}>
          <img src={this.state.image} alt=""/>
        </div>
        <div className={listContainerClasses}>
          <div>
            <h3>{this.state.title}</h3>
            {this.state.list}
          </div>
        </div>
      </div>
    );
  }
}

class Program extends Component {
  render() {
    return (
      <div className="row">
        {About}
        {ProgramDesc}
        <ProgramActivity title='We Learn' img={learnImg} list={LearnActivityList} />
        <ProgramActivity title='We Work' img={workImg} list={WorkActivityList} reverse={true} />
        <ProgramActivity title='We Create' img={createImg} list={CreateActivityList} />
      </div>
    );
  }
}

export default Program;