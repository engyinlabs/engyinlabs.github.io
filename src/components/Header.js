import React, { Component } from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom'

var classNames = require('classnames');

class Logo extends Component {
  render() {
    var logoClasses = classNames('col-4', 'col-sm-3', 'order-sm-1');
    return (
      <div className={logoClasses}>
        <img src={logo} id="logo" alt="logo"/>
      </div>
    )
  }
}

const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search;
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";

  return (
    <li className={liClassName}>
      <a href={props.path} className="nav-link">{props.name}</a>
      {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
    </li>
  );
}

class Navigation extends Component {
  render() {
    var navClasses = classNames('col-12', 'col-sm-5', 'order-sm-2');
    return (
      <div id="navigation" className={navClasses}>
        <nav>
          <ul>
            <NavItem path='/' name='HOME' />
            <NavItem path='/people' name='PEOPLE' />
            <NavItem path='/work' name='WORK' />
            <NavItem path='/faq' name='FAQs' />
          </ul>
        </nav>
      </div>
    );
  }
}

class HeaderButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apply: props.apply
    };
  }
  render() {
    var headerButtonClasses = classNames('col-8', 'col-sm-4', 'order-sm-3');
    var logInButtonClasses = classNames('btn', 'btn-default', 'btn-sm');
    var applyButtonClasses = classNames('btn', 'btn-primary', 'btn-sm');
    return (
      <div className={headerButtonClasses} id="headerButtons">
      { this.state.apply &&
        <Link to='/apply'>
          <button className={applyButtonClasses}>Apply</button>
        </Link>
      }
        <a href='https://engyinlabs.slack.com'>
          <button id="loginButton" className={logInButtonClasses}>Log In</button>
        </a>
      </div>
    );
  }
}


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apply: props.apply
    };
  }
  render() {
    return (
      <header>
        <div className="row">
          <Logo/>
          <HeaderButtons apply={this.state.apply}/>
          <Navigation />
        </div>
      </header>
    )
  }
}

export default Header;