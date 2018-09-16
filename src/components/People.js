import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import raghavImage from '../images/people/raghav.jpg';
import sheenamImage from '../images/people/sheenam.jpeg';
import rishabhImage from '../images/people/rishabh.jpg';
import brunoImage from '../images/people/bruno.jpg';
import rahulImage from '../images/people/rahul.jpeg';
import romitImage from '../images/people/romit.jpeg';
import bharatImage from '../images/people/bharat.jpeg';


var classNames = require('classnames');

const LinkedInProfile = (props) => {
  return (
    <span class="social-icon">
      <a href={props.link}>
        {props.link && <FontAwesomeIcon icon={['fab','linkedin-in']} />}
      </a>
    </span>
  )
}

const TwitterProfile = (props) => {
  return (
    <span class="social-icon">
      <a href={props.link}>
        {props.link && <FontAwesomeIcon icon={['fab','twitter']} />}
      </a>
    </span>
  )
}

const GitHubProfile = (props) => {
  return (
    <span class="social-icon">
      <a href={props.link}>
        {props.link && <FontAwesomeIcon icon={['fab','github']} />}
      </a>
    </span>
  )
}



const SocialIcons = (props) => {
  return (
    <div>
      {props.twitter && <TwitterProfile link={props.twitter} />}
      {props.linkedin && <LinkedInProfile link={props.linkedin} />}
      {props.github && <GitHubProfile link={props.github} />}
    </div>
  )
}




class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.img,
      name: props.name,
      expertise: props.expertise,
      location: props.location,
      twitter: props.twitter,
      linkedin: props.linkedin,
      github: props.github,
      probono: props.probono
    };
  }
  render(){
    const PersonClasses = classNames('col-12', 'col-sm-4', 'col-md-3', 'col-xl-2', 'person');
    const imgContainerClasses = classNames('person-image');
    const descContainerClasses = classNames('person-desc')
    return (
      <div className={PersonClasses}>
        <div className={imgContainerClasses}>
          <img src={this.state.image} alt=""/>
        </div>
        <div className={descContainerClasses}>
          <h4>{this.state.name}</h4>
          <p>{this.state.expertise}</p>
          <p>
            <FontAwesomeIcon icon='globe-americas' /> {this.state.location}
          </p>
          <SocialIcons twitter={this.state.twitter} linkedin={this.state.linkedin} github={this.state.github}/>
        </div>
      </div>
    );
  }
}

class People extends Component {
  componentDidMount(){
    document.title = "Engyin Labs | People";
  }
  render() {
    return (
      <div>
        <div id="people">
          <div className="row"  id="peopleIntroduction">
            <div className="col-12">
              <h1>Our People</h1>
              <p>Great things are never accomplished by one person; they're always done by a team. Our people make and break us.</p>
              <p> We have hand-picked highly skilled people from all over the world to advise us and mentor you.</p>
            </div>
          </div>        
          <div className="row" id="mentors">
            <Person name='Raghav' expertise='Building Product' img={raghavImage} location='Chandigarh' twitter='https://twitter.com/raghavaroraa' linkedin='https://www.linkedin.com/in/raghav-arora/' github='https://github.com/raghavaro'/>
            <Person name='Sheenam' expertise='Entrepreneurship' img={sheenamImage} location='Chandigarh' twitter='https://twitter.com/shngautam' linkedin='https://www.linkedin.com/in/sheenamgautam/'/>
            <Person name='Rishabh' expertise='Machine Learning' img={rishabhImage} location='Berlin' twitter='https://twitter.com/rtspeaks360' linkedin='https://www.linkedin.com/in/rishabhthukral/' github='https://github.com/rtspeaks360'/>
            <Person name='Bruno' expertise='Machine Learning' img={brunoImage} location='Zagreb' linkedin='https://www.linkedin.com/in/bruno-gavranovic/'/>
            <Person name='Rahul' expertise='Mechatronics' img={rahulImage} location='Toronto' linkedin='https://www.linkedin.com/in/rahul-sehgal/'/>
            <Person name='Bharat' expertise='Fullstack Development' img={bharatImage} location='Chandigarh' linkedin='https://www.linkedin.com/in/bharat-bagga-862256ab/'/>
            <Person name='Romit' expertise='Android Applications' img={romitImage} location='Delhi' linkedin='https://www.linkedin.com/in/romit-choudhary/'/>
          </div>
        </div>
      </div>
    );
  }
}

export default People;