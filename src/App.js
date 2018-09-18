import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedinIn, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import ReactGA from 'react-ga';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Apply from './components/Apply';
import Work from './components/Work';
import FAQs from './components/FAQs';
import People from './components/People';
import Footer from './components/Footer';

library.add(faGlobeAmericas, faEnvelope, faTwitter, faLinkedinIn, faGithub, faFacebook)

ReactGA.initialize('UA-123136769-2');
function fireTracking() {
    ReactGA.pageview(window.location.hash);
}

class App extends Component {
  render() {
    var loc = window.location.pathname;
    var apply = true;
    if (loc == "/apply" || loc == "/") apply = false;
    return (
      <Router onUpdate={fireTracking}>
        <div className="container-fluid" id="wrapper">
          <Header apply={apply}/>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/people" component={People} />
          <Route path="/work" component={Work} />
          <Route path="/faq" component={FAQs} />
          <Route path="/apply" component={Apply} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
