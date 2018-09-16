import React, { Component } from 'react';

import appetitoImg from '../images/u-appetito.svg';
import firetalkImg from '../images/u-firetalk.svg';
import lenderImg from '../images/u-lend-ledger.svg';
import myhomeImg from '../images/u-my-house.svg';
import rwmImg from '../images/u-rideshare.svg';
import travlrrImg from '../images/u-travlrr.svg';
import saudaImg from '../images/u-smart-sauda.svg';


var classNames = require('classnames');


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.img,
      title: props.title,
      desc: props.desc
    };
  }
  render(){
    const ProjectClasses = classNames('col-12', 'col-sm-6', 'project');
    const imgContainerClasses = classNames('project-image');
    const descContainerClasses = classNames('project-desc')
    return (
      <div className={ProjectClasses}>
        <div className={imgContainerClasses}>
          <img src={this.state.image} alt=""/>
        </div>
        <div className={descContainerClasses}>
          <h3>{this.state.title}</h3>
          <p>{this.state.desc}</p>
        </div>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div className="row">
        <Project title='Appetito' img={appetitoImg} desc='invite people around you for dinner and parties' />
        <Project title='Lender' img={lenderImg} desc='p2p loans with micro-crypto-assets as security' />
        <Project title='My Home' img={myhomeImg} desc='home automation with personalised experiences ' />
        <Project title='Ride With' img={rwmImg} desc='car pooling for long distances' />
        <Project title='Smart Sauda' img={saudaImg} desc='easy buy and sell agreements on phone' />
        <Project title='Travlrr' img={travlrrImg} desc='discover the hidden gems of the world' />
        <Project title='Firetalk' img={firetalkImg} desc='ad hoc conversations for third party users' />
      </div>
    );
  }
}

export default Projects;