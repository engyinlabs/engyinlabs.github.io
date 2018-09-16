import React, { Component } from 'react';

import Projects from './Projects';



class Work extends Component {
  componentDidMount(){
    document.title = "Engyin Labs | Work";
  }
  render() {
    return (
      <div>
        <div id="work">
          <div className="row workHeading">
            <div className="col-12">
              <h1>Our Work</h1>
              <p>Our students continue to strive every day to solve problems and build technology that would be used by millions of people. Our projects are designed to maximize learning.</p>
            </div>
          </div>
          <div className="row workHeading">
            <div className="col-12">
              <p>Here are some of our exciting projects</p>
            </div>
          </div>
          <Projects />
        </div>
      </div>
    )
  }
}

export default Work