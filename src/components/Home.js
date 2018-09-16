import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Hero from './Hero';
import Program from './Program';
import Life from './Life';

class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.scrollToProgram = this.scrollToProgram.bind(this);
  }
  componentDidMount(){
    document.title = "Engyin Labs";
  }
  scrollToProgram() {
    const domNode = ReactDOM.findDOMNode(this.myRef.current);
    domNode.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
  render() {
    return (
      <div>
        <Hero learnMore={this.scrollToProgram} />
        <Program ref={this.myRef} />
        <Life />
      </div>
    )
  }
}

export default Home