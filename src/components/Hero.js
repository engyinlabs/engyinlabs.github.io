import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Program from './Program';

var classNames = require('classnames');


class Hero extends Component {
  render() {
    var welcomeClasses = classNames('col-12', 'col-sm-8', 'offset-sm-2')
    var learnMoreButtonClasses = classNames('btn', 'btn-default', 'btn-sm', 'd-none', 'd-sm-block');
    var applyButtonClasses = classNames('btn', 'btn-primary', 'btn-sm');
    return (
      <div className="row" id="hero">
        <div className={welcomeClasses}>
          <h1>Welcome to Engyin Labs</h1>
          <h4>{["Chandigarh's ", <b>first</b>, " talent incubator"]}</h4>
          <h2>We help students explore their talent through work opportunities</h2>
          <div id="heroButtons">
            <Link to="/apply">
              <button className={applyButtonClasses}>Apply Now</button>
            </Link>
            <button id="moreButton" className={learnMoreButtonClasses} onClick={this.props.learnMore}>Learn More</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;