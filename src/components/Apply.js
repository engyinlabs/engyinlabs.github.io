import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Apply extends Component {
  componentDidMount() {
    const obj = ReactDOM.findDOMNode(this);
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    document.title = "Engyin Labs | Apply";
  }
  render() {
    return (
        <iframe className="apply-from" id="student-application-form" src="https://docs.google.com/forms/d/e/1FAIpQLSdZDYSUIoEb-LUQxvItgSQtZ-5FX8JsnoP8d47HG21pxkW7Zw/viewform?embedded=true">Loading...</iframe>
    );
  }
}

export default Apply;